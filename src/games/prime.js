import getRandomInt from '../getRandomInt.js';
import genRound from '../index.js';

const greetingText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 2) return true;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getQuestionAndCorrectAnswer = () => {
  const number = getRandomInt(400);
  const question = `Question: ${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const brainPrime = genRound(getQuestionAndCorrectAnswer, greetingText);

export default brainPrime;
