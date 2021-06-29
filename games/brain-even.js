import getRandomInt from '../src/randomInt.js';

const greetingText = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const questionAndCorrectAnswer = () => {
  const number = getRandomInt(400);
  const question = `Question: ${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export { questionAndCorrectAnswer, greetingText };