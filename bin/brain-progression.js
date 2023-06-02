#!/usr/bin/env node
import { counterPlus, counter, answer, randomNum } from '../src/index.js';
import { name, userNameFunc } from '../src/cli.mjs';

userNameFunc();

console.log('What number is missing in the progression?');

const progressionCheck = () => {
  const [numberOne, numberThree] = randomNum();
  let i = Math.floor(Math.random() * 10) + 1;
  let iter = Math.floor(Math.random() * 5) + 1; // numberThree
  let num = i + 50;
  let rand = [];
  for (i; i <= num; i += iter) {
    rand.push(i);
    if (rand.length == 10) {
      break;
    }
  }
  let randomIndex = Math.floor(Math.random() * rand.length);
  let result = rand[randomIndex];
  rand[randomIndex] = '..';
  console.log(`Question: ${rand.join(' ')} `);
  const answ = answer();
  if (result == answ) {
    counterPlus();
    if (counter < 3) {
      progressionCheck();
    }
  } else if (result != answ) {
    console.log(
      `'${answ}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}!`
    );
  }
};
progressionCheck();
