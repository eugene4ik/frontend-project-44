import readlineSync from "readline-sync";

const userNameFunc = () => {
  const userName = readlineSync.question("May I have your name? ");

  console.log("Hello, " + userName + "!");
  name = userName;
};

export { userNameFunc };
export let name;
