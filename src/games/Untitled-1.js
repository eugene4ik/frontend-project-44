let numberOne = 10;

const primecheck = () => {
  for (let i = 2; i <= Math.sqrt(numberOne); i++) {
    if (numberOne % i === 0) {
      return 'no';
    }
  }
  {
    return 'yes';
  }
};

console.log(primecheck());
