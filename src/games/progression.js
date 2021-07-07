import run from '../index.js';
import { getRandomIntegerOfRange } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const makeProgression = (start, step, missingIndex) => {
  const progression = [start];
  let progressionNumber;
  for (let i = 1; i < 10; i += 1) {
    if (missingIndex === i) {
      progression.push(' ..');
    } else {
      progressionNumber = start + step * i;
      progression.push(` ${progressionNumber}`);
    }
  }
  return `${progression.join('')}`;
};

const getMissingNumberProgression = (start, step, missingIndex) => start + step * missingIndex;

const generateRound = () => {
  const start = getRandomIntegerOfRange(1, 12);
  const step = getRandomIntegerOfRange(1, 7);
  const missingIndex = getRandomIntegerOfRange(1, 9);
  const correctAnswer = (getMissingNumberProgression(start, step, missingIndex).toString());
  const question = `${makeProgression(start, step, missingIndex)}`;
  return { question, correctAnswer };
};

const runProgressionGame = () => run(generateRound, gameDescription);

export default runProgressionGame;
