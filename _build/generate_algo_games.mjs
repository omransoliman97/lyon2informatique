import fs from 'fs';
import vm from 'vm';

const dir = '/Volumes/OS SSDExte2/Website Projects/Lyon2informatique/lyon2informatique';

function loadSource(file, varName) {
  const code = fs.readFileSync(`${dir}/_build/${file}`, 'utf8');
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(code + `\nthis.__out = ${varName};`, sandbox);
  return sandbox.__out;
}

// Simple deterministic seeded RNG (mulberry32) so the shuffle is reproducible
function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleAnswers(questions, seed) {
  const rand = mulberry32(seed);
  return questions.map(q => {
    const correctText = q.options[q.correctAnswer];
    const opts = [...q.options];
    // Fisher-Yates shuffle
    for (let i = opts.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [opts[i], opts[j]] = [opts[j], opts[i]];
    }
    return {
      question: q.question,
      options: opts,
      correctAnswer: opts.indexOf(correctText),
      explanation: q.explanation,
      part: q.part,
    };
  });
}

function validate(name, questions) {
  const seen = new Set();
  questions.forEach((q, i) => {
    if (!Array.isArray(q.options) || q.options.length !== 4) throw new Error(`${name}[${i}] bad options`);
    if (new Set(q.options).size !== 4) throw new Error(`${name}[${i}] duplicate option text`);
    if (q.correctAnswer < 0 || q.correctAnswer > 3) throw new Error(`${name}[${i}] bad correctAnswer`);
    if (seen.has(q.question)) throw new Error(`${name}[${i}] duplicate question`);
    seen.add(q.question);
  });
  console.log(`${name}: validated ${questions.length} questions, no duplicates`);
}

function chunkAndWrite(courseKey, questions, chunkSize, varPrefix) {
  const chunks = [];
  if (questions.length <= 40) {
    // Small enough to stay a single game rather than an awkward 30+tiny split.
    chunks.push(questions);
  } else {
    for (let i = 0; i < questions.length; i += chunkSize) {
      chunks.push(questions.slice(i, i + chunkSize));
    }
  }
  chunks.forEach((chunk, idx) => {
    const partNum = idx + 1;
    const varName = `${varPrefix}P${partNum}Questions`;
    const fileName = `quiz_algo_${courseKey}_p${partNum}.js`;
    const jsContent = `const ${varName} = ${JSON.stringify(chunk, null, 2)};\n`;
    fs.writeFileSync(`${dir}/${fileName}`, jsContent, 'utf8');
    console.log(`Wrote ${fileName} - ${chunk.length} questions (var: ${varName})`);
  });
  return chunks.length;
}

const cm1 = loadSource('cm1_source.js', 'cm1SourceQuestions');
const cm2 = loadSource('cm2_source.js', 'cm2SourceQuestions');
const cm3 = loadSource('cm3_source.js', 'cm3SourceQuestions');

validate('CM1', cm1);
validate('CM2', cm2);
validate('CM3', cm3);

const cm1Shuffled = shuffleAnswers(cm1, 1001);
const cm2Shuffled = shuffleAnswers(cm2, 1002);
const cm3Shuffled = shuffleAnswers(cm3, 1003);

function dist(questions) {
  const c = [0, 0, 0, 0];
  questions.forEach(q => c[q.correctAnswer]++);
  return c;
}
console.log('CM1 answer distribution:', dist(cm1Shuffled));
console.log('CM2 answer distribution:', dist(cm2Shuffled));
console.log('CM3 answer distribution:', dist(cm3Shuffled));

chunkAndWrite('cm1', cm1Shuffled, 30, 'algoCm1');
chunkAndWrite('cm2', cm2Shuffled, 30, 'algoCm2');
chunkAndWrite('cm3', cm3Shuffled, 30, 'algoCm3');

console.log('DONE');
