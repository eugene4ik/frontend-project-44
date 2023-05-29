//import { counter } from "../bin/brain-even.js";
import readlineSync from "readline-sync";

import { calculator } from "../bin/brain-calc.js";
import { name } from "../src/cli.mjs";

let counter = 0;
const counterPlus = () => {
  counter += 1;
  if (counter < 3) {
    calculator();
  } else if (counter === 3) {
    console.log("Congratulations, " + name + " ! ");
  }
  return counter;
};

// const fail = () => {
//   const anwser = readlineSync.question(`Your anwser: `);
//   console.log(
//     "'" +
//       anwser +
//       "' is wrong answer ;(. Correct answer was '" +
//       result +
//       "'. Let's try again, " +
//       name +
//       " !"
//   );
// };

export { counterPlus };
