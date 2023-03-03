const getCorrectAnswer = (num1, num2, getRandomOperator) => {
  let answer;
  switch (getRandomOperator) {
    case '+': answer = num1 + num2;
      break;
    case '-': answer = num1 - num2;
      break;
    case '*': answer = num1 * num2;
      break;
    default: break;
  }
  return answer;
};
export default getCorrectAnswer;
