import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const prime = (num) => {
  let result = 0;
  for (let i = 0; i <= num; i += 1) {
    if (num % i === 0) {
      result += 1;
    }
  }
  if (result > 2) {
    return false;
  } return true;
};
const questionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const answer = prime(question) ? 'yes' : 'no';
  return [String(question), answer];
};
export default () => {
  playGame(description, questionAndAnswer);
};
