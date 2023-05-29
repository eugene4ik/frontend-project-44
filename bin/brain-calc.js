import readlineSync from "readline-sync";
import { name } from "../src/cli.mjs";
import { counterPlus } from "../src/index.js";

const calculator = () => {
  let result = 0;
  let numberOne = Math.floor(Math.random() * 10);
  let numberTwo = Math.floor(Math.random() * 10);
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
    console.log("Correct!");
    counterPlus();
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

export { calculator };
