#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomInt } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const evenGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(400);
    const isNumberEven = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('You answer: ');

    if (answer === isNumberEven) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isNumberEven}'. Let's try again, ${userName}`);
      break;
    }
  }
};

evenGame();
