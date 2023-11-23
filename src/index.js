import readlineSync from 'readline-sync';
import userNameFunc from './cli.js';

const playGame = (askQuestion, infoSender) => {
  const userName = userNameFunc();

  console.log(askQuestion);
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [questionGame, correctAnswer] = infoSender();
    console.log(questionGame);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct anwser was "${correctAnswer}".\nLet's try again, ${userName}!`);
      break;
    }
    console.log(`Congratulations, ${userName}!`);
  }
};

export default playGame;
