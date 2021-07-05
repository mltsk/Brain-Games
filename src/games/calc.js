import getRandomInt from '../getRandomInt.js';
import play from '../index.js';

const greetingText = 'What is the result of the expression?';

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const getQuestionAndCorrectAnswer = () => {
  const number1 = getRandomInt(30);
  const number2 = getRandomInt(30);
  const number3 = getRandomInt(3);
  const mathOperators = ['+', '-', '*'];
  const correctAnswer = (calculate(number1, number2, mathOperators[number3])).toString();
  const question = `Question: ${number1} ${mathOperators[number3]} ${number2}`;
  return { question, correctAnswer };
};

const brainCalc = play(getQuestionAndCorrectAnswer, greetingText);

export default brainCalc;
