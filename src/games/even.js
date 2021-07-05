import getRandomInt from '../getRandomInt.js';
import genRound from '../index.js';

const greetingText = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAndCorrectAnswer = () => {
  const number = getRandomInt(400);
  const question = `Question: ${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const brainEven = genRound(getQuestionAndCorrectAnswer, greetingText);

export default brainEven;
