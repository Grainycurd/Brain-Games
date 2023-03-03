import getRandomNumber from './utils.js';

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
export default isProgression;
