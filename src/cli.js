import readlineSync from 'readline-sync';

const nameQuestion () => {
	console.log('Welcome to the Brain Games!');

	const namePlayer = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${namePlayer}!`);
};
export default nameQuestion;
