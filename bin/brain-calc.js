#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomInt } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('What is the result of the expression?');

const calculation = (a, b, operator) => {
  if (operator === '+') {
    return a + b;
  }
  if (operator === '-') {
    return a - b;
  }
  return a * b;
};

const gameCalc = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomInt(3);
    const mathOperators = ['+', '-', '*'];
    const number1 = getRandomInt(30);
    const number2 = getRandomInt(30);

    const correctAnswer = Number(calculation(number1, number2, mathOperators[randomNum]));
    console.log(`Question: ${number1} ${mathOperators[randomNum]} ${number2}`);
    const answer = Number(readlineSync.question('You answer: '));

    if (correctAnswer === answer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}`);
      break;
    }
  }
};

gameCalc();
