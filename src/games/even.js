import playGame from '../index.js';

const getRandomNumber = (max) => Math.floor(Math.random() * max);
const isEvenNumber = (num) => {
  if (num % 2 === 0) {
    return true;
  } return false;
};
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const QuestionAndAnswer = () => {
  const question = getRandomNumber(100);
  const answer = isEvenNumber(question) ? 'yes' : 'no';
  return [question, answer];
};
export default () => {
  playGame(description, QuestionAndAnswer);
};
