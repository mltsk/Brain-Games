const greetingText = 'What number is missing in the progression?';

function getRandomIntegerOfRange(min, max) {
  const randomNumber = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(randomNumber);
}

const makeProgression = (start, step, missingStep) => {
  const progression = [start];
  let progressionNumber;
  for (let i = 1; i < 10; i += 1) {
    if (missingStep === i) {
      progression.push(' ..');
    } else {
      progressionNumber = start + step * i;
      progression.push(` ${progressionNumber}`);
    }
  }
  return `${progression.join('')}`;
};

const getMissingNumberProgression = (start, step, missingStep) => start + step * missingStep;

const getQuestionAndCorrectAnswer = () => {
  const start = getRandomIntegerOfRange(1, 12);
  const step = getRandomIntegerOfRange(1, 7);
  const missingStep = getRandomIntegerOfRange(1, 9);
  const correctAnswer = (getMissingNumberProgression(start, step, missingStep).toString());
  const question = `Question: ${makeProgression(start, step, missingStep)}`;
  return { question, correctAnswer };
};

export { getQuestionAndCorrectAnswer, greetingText };
