import { generateRandomInt } from '../utils.js';
import run from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => y ? gcd(y, x % y) : x;

const generateRound = () => {
  const number1 = generateRandomInt(100);
  const number2 = generateRandomInt(100);
  const correctAnswer = String(gcd(number1, number2));
  const question = `${number1} ${number2}`;
  return { question, correctAnswer };
};

const runGcdGame = () => run(generateRound, gameDescription);

export default runGcdGame;
