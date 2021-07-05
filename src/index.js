import readlineSync from 'readline-sync';
import greet from './greet.js';

const run  = (genQuestionAndCorrectAnswer, gameDescription) => {
  const userName = greet(gameDescription);
  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = genQuestionAndCorrectAnswer();
    console.log(question);
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
