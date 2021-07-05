import { getRandomInt } from '../utils.js';
import run from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findSmallestNumber = (number1, number2) => (number1 <= number2 ? number1 : number2);

const findGreatestDivisor = (number1, number2) => {
  if (number1 === 0 || number2 === 0) return 1;
  let greatestDivisor = 1;
  for (let i = 1; i <= findSmallestNumber(number1, number2); i += 1) {
    if ((number1 % i === 0) && (number2 % i === 0)) {
      greatestDivisor = i;
    }
  }
  return greatestDivisor;
};

const genQuestionAndCorrectAnswer = () => {
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);
  const correctAnswer = (findGreatestDivisor(number1, number2)).toString();
  const question = `${number1} ${number2}`;
  return { question, correctAnswer };
};

const brainGcd = () => run(genQuestionAndCorrectAnswer, gameDescription);

export default brainGcd;
