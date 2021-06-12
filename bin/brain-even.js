#!/usr/bin/env node
import { getRandomInt, isEven } from '../src/functions.js';
import game from '../src/index.js';
import greeting from '../src/greeting.js';

const userName = greeting('Answer "yes" if the number is even, otherwise answer "no".');

const questionAndCorrectAnswer = () => {
  const number = getRandomInt(400);
  const question = `Question: ${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

game(userName, questionAndCorrectAnswer);
