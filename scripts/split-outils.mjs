// Historical one-off script: split the former monolithic question bank of
// "Outils de la recherche" CM1 into 30-question games (cm1-p1.js ... cm1-p5.js).
// The monolithic source (quiz_outils.js) is no longer in the repo; this script is
// kept for reference and only works if that file is put back in the folder below.
//
// Usage (from anywhere):  node scripts/split-outils.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataDir = path.join(projectDir, 'data', 'qcm', 'outils-recherche');
const srcPath = path.join(dataDir, 'quiz_outils.js');
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
  const fileName = `cm1-p${idx + 1}.js`;
  const outPath = path.join(dataDir, fileName);
  const jsContent = `const ${varName} = ${JSON.stringify(chunk, null, 2)};\n`;
  fs.writeFileSync(outPath, jsContent, 'utf8');
  console.log('Wrote', fileName, '-', chunk.length, 'questions');
});
