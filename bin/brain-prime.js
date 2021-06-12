import { getRandomInt } from '../src/functions.js';
import game from '../src/index.js';
import greeting from '../src/greeting.js';

const userName = greeting('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  if ((num === 1) || (num === 2)) {
    return 'yes';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const questionAndCorrectAnswer = () => {
  const number1 = getRandomInt(400);
  const correctAnswer = isPrime(number1);
  const question = `Question: ${number1}`;
  return { question, correctAnswer };
};

game(userName, questionAndCorrectAnswer);
