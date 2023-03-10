import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';
const isProgression = () => {
  const arr1 = [];
  const num = getRandomNumber(1, 100);
  const random = Math.round(Math.random() * (7 - 1) + 1);
  const num2 = random;
  for (let i = 0; i < num2 * 10; i += num2) {
    arr1.push(num + i);
  }
  return arr1;
};

const questionAndAnswer = () => {
  const startNum = getRandomNumber(0, 50);
  const step = getRandomNumber(2, 8);
  const progression = isProgression(startNum, step);
  const randomIndex = getRandomNumber(0, 9);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
export default () => {
  playGame(description, questionAndAnswer);
};
