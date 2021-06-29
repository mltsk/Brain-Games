const greetingText = 'What number is missing in the progression?';

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
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

const missingNumberProgression = (start, step, missingStep) => start + step * missingStep;

const questionAndCorrectAnswer = () => {
  const start = randomInteger(1, 12);
  const step = randomInteger(1, 7);
  const missingStep = randomInteger(1, 9);
  const correctAnswer = (missingNumberProgression(start, step, missingStep).toString());
  const question = `Question: ${makeProgression(start, step, missingStep)}`;
  return { question, correctAnswer };
};

export { questionAndCorrectAnswer, greetingText };
