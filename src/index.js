import readlineSync from "readline-sync";
import { name } from "../src/cli.mjs";
let counter = 0;

const counterPlus = () => {
  console.log("Correct!");
  counter += 1;
  if (counter === 3) {
    console.log("Congratulations, " + name + " ! ");
  }
};

const randomNum = () => {
  let numberOne = Math.floor(Math.random() * 10) + 1;
  let numberTwo = Math.floor(Math.random() * 10) + 1;
  let numberThree = Math.floor(Math.random() * 5) + 1;
  return [numberOne, numberTwo, numberThree];
};

const answer = () => {
  const answ = readlineSync.question(`Your answer: `);
  return answ;
};

export { counterPlus, randomNum, counter, answer };
