#!/usr/bin/env node
import readlineSync from 'readline-sync';

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('What number is missing in the progression?');

const makeProgression = (start, step, numberMissingStep) => {
  let progression = start;
  let progressionNumber;
  let missingNumber;
  for (let i = 1; i < 10; i += 1) {
    if (numberMissingStep === i) {
      progression += ' ..';
      missingNumber = start + step * i;
    } else {
      progressionNumber = start + step * i;
      progression = `${progression} ${progressionNumber}`;
    }
  }
  return { progression, missingNumber };
};

const gameProgression = () => {
  for (let i = 0; i < 3; i += 1) {
    const number1 = randomInteger(1, 12);
    const number2 = randomInteger(1, 7);
    const number3 = randomInteger(1, 9);

    const correctAnswer = Number(makeProgression(number1, number2, number3).missingNumber);
    console.log(`Question: ${makeProgression(number1, number2, number3).progression}`);
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

gameProgression();
