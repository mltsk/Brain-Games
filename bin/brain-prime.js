#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomInt } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  if ((num === 1) || (num === 2)) {
    return 'yes';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const gamePrime = () => {
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomInt(400);

    const correctAnswer = isPrime(number1);
    console.log(`Question: ${number1}`);
    const answer = readlineSync.question('You answer: ');

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

gamePrime();
