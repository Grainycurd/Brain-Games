import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const questionAndAnswer = () => {
  const getGcd = (num1, num2) => {
    let number1 = num1;
    let number2 = num2;
    if (number1 === number2) {
      return number1;
    }
    if (number1 > 0 && number2 > 0) {
      if (number1 > number2) {
        number1 -= number2;
      } else {
        number2 -= number1;
      }
    } else {
      return number1 || number2;
    }
    return getGcd(number1, number2);
  };
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;

  const answer = getGcd(num1, num2);
  return [question, String(answer)];
};
export default () => {
  playGame(description, questionAndAnswer);
};
