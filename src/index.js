import { userNameFunc, name } from './cli.mjs';
import { answer, userAnswerChecker } from './utils.js';

const getQuestion = (greeting) => {
  switch (greeting) {
    case 'gcd':
      return 'Find the greatest common divisor of given numbers.';
    case 'calc':
      return 'What is the result of the expression?';
    case 'even':
      return 'Answer "yes" if the number is even, otherwise answer "no".';
    case 'prime':
      return 'Answer "yes" if given number is prime. Otherwise answer "no".';
    case 'progression':
      return 'What number is missing in the progression?';
    default:
      return 'Invalid question type';
  }
};
const playGame = (question, gameQuest) => {
  userNameFunc();
  console.log(question);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = gameQuest();
    console.log(question);
    const userAnswer = answer();
    const stop = userAnswerChecker(userAnswer, correctAnswer);
    if (stop === true) {
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default playGame;
