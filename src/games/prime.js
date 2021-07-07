import { getRandomInt } from '../utils.js';
import run from '../index.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 2) return true;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const genQuestionAndCorrectAnswer = () => {
  const number = getRandomInt(400);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const runPrimeGame = () => run(genQuestionAndCorrectAnswer, gameDescription);

export default runPrimeGame;
