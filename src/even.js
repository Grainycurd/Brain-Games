import readlineSync from 'readline-sync';
 
const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
}

export const evenNumberGame = () => { 
    const getName = () => readlineSync.question('May I have your name? ');
    const userName = getName();
    const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
};
console.log('Answer "yes" if the number is even, otherwise answer "no".')
 for (let i = 0; i < 3; i += 1) {
const num = getRandomNumber(100)
console.log('Question: ', num);
const answerUser = readlineSync.question('Your answer: ');
const check1 = (num % 2 === 0) && (answerUser === 'yes');
const check2 = (num % 2 !== 0) && (answerUser === 'no');
if (check1 === true || check2 === true)  {
    console.log('Correct!');
} else {
    const opposite = (answerUser === 'yes' ? 'no' :'yes')
    const errorMessage = `"${answerUser}" is wrong answer ;(. Correct answer was '${opposite}'. /n Let's try again, ${userName}!`;
    console.log(errorMessage);
    }
}
console.log(`Congratulations, ${userName}`);
};