import readlineSync from "readline-sync";
import { name } from "../src/cli.mjs";
import { counterPlus } from "../src/index.js";
//import { count, counterPlus } from "../src/index.js";

//let counter = 0;

const firstQuestFunc = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no". ');
  let number = Math.floor(Math.random() * 100); // to index.js
  const anwser = readlineSync.question(`Question: ${number} `);

  if (number % 2 === 0 && anwser === "yes") {
    counterPlus();
    console.log("Correct!");
    count();
    if (counter < 3) {
      firstQuestFunc();
    }
  } else if (number % 2 === 0 && anwser != "yes") {
    console.log(
      "" +
        anwser +
        " is wrong answer ;(. Correct answer was 'yes'. Let's try again, " +
        name +
        " !"
    );
  }
  if (number % 2 != 0 && anwser === "no") {
    counterPlus();
    console.log("Correct!");
    count();
    if (counter < 3) {
      firstQuestFunc();
    }
  } else if (number % 2 != 0 && anwser != "yes") {
    console.log(
      "" +
        anwser +
        " is wrong answer ;(. Correct answer was 'no'. Let's try again, " +
        name +
        " !"
    );
  }
};

export { firstQuestFunc };
