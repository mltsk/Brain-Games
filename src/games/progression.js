import run from '../index.js';
import { generateRandomIntOfRange } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const makeProgression = (start, step, index) => {
  const progression = [start];
  const progressionLength = 10;
  for (let i = 1; i < progressionLength; i += 1) {
    if (index === i) {
      progression.push('..');
    } else {
      const progressionNumber = start + step * i;
      progression.push(progressionNumber);
    }
  }
  return progression.join(' ');
};

const calcProgressionNumber = (start, step, index) => start + step * index;

const generateRound = () => {
  const start = generateRandomIntOfRange(1, 12);
  const step = generateRandomIntOfRange(1, 7);
  const index = generateRandomIntOfRange(1, 9);
  const correctAnswer = String(calcProgressionNumber(start, step, index));
  const question = `${makeProgression(start, step, index)}`;
  return { question, correctAnswer };
};

const runProgressionGame = () => run(generateRound, gameDescription);

export default runProgressionGame;
