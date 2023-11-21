import readlineSync from 'readline-sync';
import { userNameFunc, name } from './cli.mjs';

const playGame = (greeting, gameQuest) => {
  userNameFunc();
  const getQuestion = () => {
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
        return 'No greeting';
    }
  };
  console.log(getQuestion(greeting));
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [questionGame, correctAnswer] = gameQuest();
    console.log(questionGame);
    const userAnswerChecker = (userAnswer) => {
      let shouldStop = false;
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
      } else {
        shouldStop = true;
        console.log(`"${userAnswer}" is wrong answer ;(. Correct anwser was "${correctAnswer}".Let's try again, ${name}! `);
        console.log(`Let's try again, ${name}! `);
      }
      return shouldStop;
    };
    const answer = () => {
      const answ = readlineSync.question('Your answer: ');
      return answ;
    };
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
