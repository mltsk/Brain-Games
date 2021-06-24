import getRandomInt from '../src/randomInt.js';
import game from '../src/index.js';
import greeting from '../src/greeting.js';

const userName = greeting('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  if ((num === 1) || (num === 2)) return true;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const questionAndCorrectAnswer = () => {
  const number = getRandomInt(400);
  const question = `Question: ${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

game(userName, questionAndCorrectAnswer);
