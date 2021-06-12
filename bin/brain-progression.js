#!/usr/bin/env node
import game from '../src/index.js';
import greeting from '../src/greeting.js';

const userName = greeting('What number is missing in the progression?');

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

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

const questionAndCorrectAnswer = () => {
  const number1 = randomInteger(1, 12);
  const number2 = randomInteger(1, 7);
  const number3 = randomInteger(1, 9);
  const correctAnswer = (makeProgression(number1, number2, number3).missingNumber.toString());
  const question = `Question: ${makeProgression(number1, number2, number3).progression}`;
  return { question, correctAnswer };
};

game(userName, questionAndCorrectAnswer);
