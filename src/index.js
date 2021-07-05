import readlineSync from 'readline-sync';

const run = (genQuestionAndCorrectAnswer, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameDescription}`);
  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = genQuestionAndCorrectAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      break;
    }
    console.log('Correct!');
  }
};

export default run;
