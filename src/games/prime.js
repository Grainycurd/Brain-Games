import playGame from '../index.js';

const getRandomNumber = (max) => Math.floor(Math.random() * max);
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
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const QuestionAndAnswer = () => {
  const question = getRandomNumber(100);
  const answer = prime(question) ? 'yes' : 'no';
  return [String(question), answer];
};
export default () => {
  playGame(description, QuestionAndAnswer);
};
