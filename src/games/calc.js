import playGame from '../index.js';

const getRandomNumber = (max) => Math.floor(Math.random() * max);
const description = 'What is the result of the expression?';

const QuestionAndAnswer = () => {
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
  const num1 = getRandomNumber(100);
  const num2 = getRandomNumber(100);
  const operator = '+-*';
  const getRandomOperator = operator[Math.floor(Math.random() * operator.length)];
  const question = `${num1} ${getRandomOperator} ${num2}`;
  const answer = getCorrectAnswer(num1, num2, getRandomOperator);
  return [question, String(answer)];
};
export default () => {
  playGame(description, QuestionAndAnswer);
};
