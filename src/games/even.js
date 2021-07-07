import { getRandomInt } from '../utils.js';
import run from '../index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const genQuestionAndCorrectAnswer = () => {
  const number = getRandomInt(400);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = `${number}`;
  return { question, correctAnswer };
};

const runEvenGame = () => run(genQuestionAndCorrectAnswer, gameDescription);

export default runEvenGame;
