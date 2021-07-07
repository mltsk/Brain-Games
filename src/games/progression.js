import run from '../index.js';
import { getRandomIntegerOfRange } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const makeProgression = (start, step, index) => {
  const progression = [start];
  let progressionNumber;
  for (let i = 1; i < 10; i += 1) {
    if (index === i) {
      progression.push(' ..');
    } else {
      progressionNumber = start + step * i;
      progression.push(` ${progressionNumber}`);
    }
  }
  return `${progression.join('')}`;
};

const calcProgressionNumber  = (start, step, index) => start + step * index;

const generateRound = () => {
  const start = getRandomIntegerOfRange(1, 12);
  const step = getRandomIntegerOfRange(1, 7);
  const index = getRandomIntegerOfRange(1, 9);
  const correctAnswer = (calcProgressionNumber (start, step, index).toString());
  const question = `${makeProgression(start, step, index)}`;
  return { question, correctAnswer };
};

const runProgressionGame = () => run(generateRound, gameDescription);

export default runProgressionGame;
