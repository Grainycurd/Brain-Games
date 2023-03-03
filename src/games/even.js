import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const questionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};
export default () => {
  playGame(description, questionAndAnswer);
};
