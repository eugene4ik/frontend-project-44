import readlineSync from "readline-sync";

const userNameFunc = () => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log("Hello, " + userName + "!");
  name = userName;
};

export { userNameFunc };
export let name;
