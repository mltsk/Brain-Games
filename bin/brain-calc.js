#!/usr/bin/env node
import { getRandomInt } from '../src/functions.js';
import game from '../src/index.js';
import greeting from '../src/greeting.js';

const userName = greeting('What is the result of the expression?');

const calculation = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    default: return a * b;
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

game(userName, questionAndCorrectAnswer);
