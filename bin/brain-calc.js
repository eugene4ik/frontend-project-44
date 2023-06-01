#!/usr/bin/env node
import readlineSync from "readline-sync";
import { counterPlus, counter } from "../src/index.js";
import { name, userNameFunc } from "../src/cli.mjs";

userNameFunc();
console.log("What is the result of the expression?");
const calcCheck = () => {
  let result;
  let numberOne = Math.floor(Math.random() * 100);
  let numberTwo = Math.floor(Math.random() * 100);
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
