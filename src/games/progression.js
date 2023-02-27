import playGame from '../index.js';

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const description = 'Find the greatest common divisor of given numbers.';
const QuestionAndAnswer = () => {
  const arr1 = [];
  const isProgression = () => {
    const num = getRandomNumber(100);
    const random = Math.round(Math.random() * (7 - 1) + 1);
    const num2 = random;
    for (let i = 0; i < num2 * 10; i += num2) {
      arr1.push(num + i);
    }
    return arr1;
  };
  isProgression();

  const getRandom = Math.round(Math.random() * 9);
  const num1 = getRandom;
  const answer = arr1[num1];
  const arr2 = arr1;
  arr2[num1] = '..';
  const question = arr2;
  return [question.join(' '), String(answer)];
};

export default () => {
  playGame(description, QuestionAndAnswer);
};
