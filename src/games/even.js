import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEvenNumber = (num) => num % 2 === 0;
const questionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEvenNumber(question) ? 'yes' : 'no';
  return [question, answer];
};
export default () => {
  playGame(description, questionAndAnswer);
};
