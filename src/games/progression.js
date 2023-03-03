import playGame from '../index.js';
import isProgression from '../functionProgression.js';

const description = 'What number is missing in the progression?';

const questionAndAnswer = () => {
  const arr1 = isProgression();
  const getRandom = Math.round(Math.random() * 9);
  const num1 = getRandom;
  const answer = arr1[num1];
  const arr2 = arr1.slice();
  arr2[num1] = '..';
  const question = arr2;
  return [question.join(' '), String(answer)];
};

export default () => {
  playGame(description, questionAndAnswer);
};
