import { generateRandomInt } from '../utils.js';
import run from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGreatestDivisor = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return findGreatestDivisor(number2, number1 % number2);
}

const generateRound = () => {
  const number1 = generateRandomInt(100);
  const number2 = generateRandomInt(100);
  const correctAnswer = String(findGreatestDivisor(number1, number2));
  const question = `${number1} ${number2}`;
  return { question, correctAnswer };
};

const runGcdGame = () => run(generateRound, gameDescription);

export default runGcdGame;
