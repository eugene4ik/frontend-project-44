#!/usr/bin/env node
import readlineSync from "readline-sync";
import { name, userNameFunc } from "../src/cli.mjs";
import { counterPlus, counter } from "../src/index.js";

userNameFunc();
console.log('Answer "yes" if the number is even, otherwise answer "no". ');
const evenCheck = () => {
  let number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number} `);
  const anwser = readlineSync.question(`Your anwser: `);

  if (
    (number % 2 === 0 && anwser === "yes") ||
    (number % 2 != 0 && anwser === "no")
  ) {
    counterPlus();
    if (counter < 3) {
      evenCheck();
    }
  } else if (
    (number % 2 === 0 && anwser != "yes") ||
    (number % 2 != 0 && anwser === "yes")
  ) {
    console.log(
      "" +
        anwser +
        " is wrong answer ;(. Correct answer was 'yes'. Let's try again, " +
        name +
        " !"
    );
  }
};
evenCheck();
