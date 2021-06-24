#!/usr/bin/env node
import getRandomInt from '../src/randomInt.js';
import game from '../src/index.js';
import greeting from '../src/greeting.js';

const userName = greeting('Find the greatest common divisor of given numbers.');

const findSmallestNumber = (a, b) => (a <= b ? a : b);

const findGreatestDivisor = (a, b) => {
  if (a === 0 || b === 0) return 1;
  let greatestDivisor = 1;
  for (let i = 1; i <= findSmallestNumber(a, b); i += 1) {
    if ((a % i === 0) && (b % i === 0)) {
      greatestDivisor = i;
    }
  }
  return greatestDivisor;
};

const questionAndCorrectAnswer = () => {
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);
  const correctAnswer = (findGreatestDivisor(number1, number2)).toString();
  const question = `Question: ${number1} ${number2}`;
  return { question, correctAnswer };
};

game(userName, questionAndCorrectAnswer);
