#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomInt } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Find the greatest common divisor of given numbers.');

const findSmallestNumber = (a, b) => {
  if (a <= b) {
    return a;
  }
  return b;
};

const findGreatestDivisor = (a, b) => {
  let greatestDivisor;
  for (let i = 1; i <= findSmallestNumber(a, b); i += 1) {
    if ((a % i === 0) && (b % i === 0)) {
      greatestDivisor = i;
    }
  }
  return greatestDivisor;
};

const gameGcd = () => {
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomInt(100);
    const number2 = getRandomInt(100);

    const correctAnswer = findGreatestDivisor(number1, number2);
    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('You answer: ');

    if (correctAnswer == answer) {
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

gameGcd();
