export const randomNum = () => {
  const numberOne = Math.floor(Math.random() * 10) + 1;
  const numberTwo = Math.floor(Math.random() * 10) + 1;
  const numberThree = Math.floor(Math.random() * 5) + 1;
  return [numberOne, numberTwo, numberThree];
};
