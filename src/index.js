import { name } from "../src/cli.mjs";
import readlineSync from "readline-sync";
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
  return [numberOne, numberTwo];
};

const [numberOne, numberTwo] = randomNum();

const anwser = () => {
  const anwser = readlineSync.question(`Your anwser: `);
  return anwser;
};

export { counterPlus, randomNum, counter, anwser };
