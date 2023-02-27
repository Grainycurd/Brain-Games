#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const maxRounds = 3;

const playGame = (description, QuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const getName = () => readlineSync.question('May I have your name? ');
  const userName = getName();
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let counterRound = 0; counterRound < maxRounds; counterRound += 1) {
    const [question, answer] = QuestionAndAnswer();
    console.log('Question: ', question);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser === answer) {
      console.log('Correct!');
    } else {
      const errorMessage = `'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'. \n Let's try again, ${userName}!'`;
      console.log(errorMessage);
    }
  }
  console.log(`Congratulations, ${userName}`);
};
export default playGame;
