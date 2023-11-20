const getQuestion = (param) => {
  switch (param) {
    case 'gcd':
      return 'Find the greatest common divisor of given numbers.';
    case 'calc':
      return 'What is the result of the expression?';
    case 'even':
      return 'Answer "yes" if the number is even, otherwise answer "no".';
    case 'prime':
      return 'Answer "yes" if given number is prime. Otherwise answer "no".';
    case 'progression':
      return 'What number is missing in the progression?';
    default:
      return 'Invalid question type';
  }
};

console.log(getQuestion('calc'));
