import readlineSync from "readline-sync";
import { name, userNameFunc } from "../src/cli.mjs";

let counter = 0;
const count = () => {
  if (counter === 3) {
    console.log("Congratulations, " + name + " ! ");
  }
};
const firstQuestFunc = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no". ');
  let number = Math.floor(Math.random() * 100);
  const firstQuest = readlineSync.question(`Question:" ${number} `);
  if (number % 2 === 0 && firstQuest === "yes") {
    counter += 1;
    console.log("Correct!");
    count();
    if (counter < 3) {
      firstQuestFunc();
    }
  } else if (number % 2 === 0 && firstQuest != "yes") {
    console.log(
      "" +
        firstQuest +
        " is wrong answer ;(. Correct answer was 'yes'. Let's try again, " +
        name +
        " !"
    );
  }
  if (number % 2 != 0 && firstQuest === "no") {
    counter += 1;
    console.log("Correct!");
    count();
    if (counter < 3) {
      firstQuestFunc();
    }
  } else if (number % 2 != 0 && firstQuest != "yes") {
    console.log(
      "" +
        firstQuest +
        " is wrong answer ;(. Correct answer was 'no'. Let's try again, " +
        name +
        " !"
    );
  }
};

export { firstQuestFunc, count };
