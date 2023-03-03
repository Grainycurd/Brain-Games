#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const maxRounds = 3;

const playGame = (description, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const getName = () => readlineSync.question('May I have your name? ');
  const userName = getName();
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let counterRound = 0; counterRound < maxRounds; counterRound += 1) {
    const [question, answer] = questionAndAnswer();
    console.log('Question:', question);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser !== answer) return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'. \n Let's try again, ${userName}!'`);
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return playGame;
};
export default playGame;
