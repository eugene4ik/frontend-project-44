#!/usr/bin/env node
import readlineSync from "readline-sync";
import { name, userNameFunc } from "../src/cli.mjs";
import { counterPlus, counter, randomNum } from "../src/index.js";

userNameFunc();
console.log('Answer "yes" if the number is even, otherwise answer "no". ');
const evenCheck = () => {
  const [numberOne] = randomNum();
  console.log(`Question: ${numberOne} `);
  const answer = readlineSync.question(`Your answer: `);
  if (
    (numberOne % 2 === 0 && answer === "yes") ||
    (numberOne % 2 != 0 && answer === "no")
  ) {
    counterPlus();
    if (counter < 3) {
      evenCheck();
    }
  } else if (
    (numberOne % 2 === 0 && answer != "yes") ||
    (numberOne % 2 != 0 && answer === "yes")
  ) {
    console.log(
      "" +
        answer +
        " is wrong answer ;(. Correct answer was 'yes'. Let's try again, " +
        name +
        " !"
    );
  }
};
evenCheck();
