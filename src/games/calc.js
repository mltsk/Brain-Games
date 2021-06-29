import getRandomInt from '../src/randomInt.js';

const greetingText = 'What is the result of the expression?';

const calculation = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const questionAndCorrectAnswer = () => {
  const randomNum = getRandomInt(3);
  const mathOperators = ['+', '-', '*'];
  const number1 = getRandomInt(30);
  const number2 = getRandomInt(30);
  const correctAnswer = (calculation(number1, number2, mathOperators[randomNum])).toString();
  const question = `Question: ${number1} ${mathOperators[randomNum]} ${number2}`;
  return { question, correctAnswer };
};

export { questionAndCorrectAnswer, greetingText };
