#!/usr/bin/env node
import getRandomInt from '../src/randomInt.js';
import game from '../src/index.js';
import greeting from '../src/greeting.js';

const userName = greeting('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (number) => number % 2 === 0;

const questionAndCorrectAnswer = () => {
  const number = getRandomInt(400);
  const question = `Question: ${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

game(userName, questionAndCorrectAnswer);
