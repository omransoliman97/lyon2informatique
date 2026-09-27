import fs from 'fs';

const projectDir = '/Volumes/OS SSDExte2/Website Projects/Lyon2informatique/lyon2informatique';
const srcPath = projectDir + '/quiz_outils.js';
const src = fs.readFileSync(srcPath, 'utf8');

const match = src.match(/const outilsQuestions = (\[[\s\S]*\]);?\s*$/);
if (!match) {
  throw new Error('Could not parse quiz_outils.js');
}
const questions = JSON.parse(match[1]);
console.log('Total questions:', questions.length);

const chunkSize = 30;
const chunks = [];
for (let i = 0; i < questions.length; i += chunkSize) {
  chunks.push(questions.slice(i, i + chunkSize));
}

const varNames = ['outilsP1Questions', 'outilsP2Questions', 'outilsP3Questions', 'outilsP4Questions', 'outilsP5Questions'];

chunks.forEach((chunk, idx) => {
  const varName = varNames[idx];
  const fileName = `quiz_outils_p${idx + 1}.js`;
  const outPath = projectDir + '/' + fileName;
  const jsContent = `const ${varName} = ${JSON.stringify(chunk, null, 2)};\n`;
  fs.writeFileSync(outPath, jsContent, 'utf8');
  console.log('Wrote', fileName, '-', chunk.length, 'questions');
});
