import playGame from '../index.js';
import getCorrectAnswer from '../calculate.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const questionAndAnswer = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operator = '+-*';
  const getRandomOperator = operator[Math.floor(Math.random() * operator.length)];
  const question = `${num1} ${getRandomOperator} ${num2}`;
  const answer = getCorrectAnswer(num1, num2, getRandomOperator);
  return [question, String(answer)];
};
export default () => {
  playGame(description, questionAndAnswer);
};
