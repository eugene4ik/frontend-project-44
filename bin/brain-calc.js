#!/usr/bin/env node
import readlineSync from "readline-sync";
import { counterPlus, counter, randomNum } from "../src/index.js";
import { name, userNameFunc } from "../src/cli.mjs";

userNameFunc();
console.log("What is the result of the expression?");
const calcCheck = () => {
  const [numberOne, numberTwo] = randomNum();
  let result;
  let operators = ["+", "-", "*"];
  let randomOperator = operators[Math.floor(Math.random() * operators.length)];
  console.log(`Question: ${numberOne} ${randomOperator} ${numberTwo}`);
  const anwser = readlineSync.question(`Your anwser: `);

  if (randomOperator === "-") {
    result = numberOne - numberTwo;
  } else if (randomOperator === "+") {
    result = numberOne + numberTwo;
  } else if (randomOperator === "*") {
    result = numberOne * numberTwo;
  }

  if (result == anwser) {
    counterPlus();
    if (counter < 3) {
      calcCheck();
    }
  } else if (result != anwser) {
    console.log(
      "'" +
        anwser +
        "' is wrong answer ;(. Correct answer was '" +
        result +
        "'. Let's try again, " +
        name +
        " !"
    );
  }
};
calcCheck();
