import readlineSync from "readline-sync";
//const readlineSync = import("readline-sync");

const userNameFunc = () => {
  const userName = readlineSync.question("May I have your name? ");
  console.log("Hello, " + userName + "!");
};

export { userNameFunc };
