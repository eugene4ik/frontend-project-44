#!/usr/bin/env node
import { counterPlus, counter, randomNum, anwser } from "../src/index.js";
import { name, userNameFunc } from "../src/cli.mjs";

const [numberOne, numberTwo] = randomNum();

userNameFunc();
console.log("Find the greatest common divisor of given numbers.");

const gcdCheck = () => {
  const [numberOne, numberTwo] = randomNum();
  console.log(`Question: ${numberOne} ${numberTwo} `);
  const answer = anwser();
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  };
  let result = gcd(numberOne, numberTwo);
  if (result == answer) {
    counterPlus();
    if (counter < 3) {
      gcdCheck();
    }
  } else if (result != answer) {
    console.log(
      "'" +
        answer +
        "' is wrong answer ;(. Correct answer was '" +
        result +
        "'. Let's try again, " +
        name +
        " !"
    );
  }
};
gcdCheck();