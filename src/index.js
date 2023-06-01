import { name } from "../src/cli.mjs";

let counter = 0;

const counterPlus = () => {
  console.log("Correct!");
  counter += 1;
  if (counter === 3) {
    console.log("Congratulations, " + name + " ! ");
  }
};
// const counterPlusOne = () => {
//   console.log("Correct!");
//   count += 1;
//   if (count < 3) {
//   } else {
//     console.log("Congratulations, " + name + " ! ");
//   }
//   return count;
// };

export { counterPlus, counter };
