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
  const start = randomInteger(1, 12);
  const step = randomInteger(1, 7);
  const numberMissingStep = randomInteger(1, 9);
  const correctAnswer = (makeProgression(start, step, numberMissingStep).missingNumber.toString());
  const question = `Question: ${makeProgression(start, step, numberMissingStep).progression}`;
  return { question, correctAnswer };
};

game(userName, questionAndCorrectAnswer);
