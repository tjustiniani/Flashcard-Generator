var inquirer = require('inquirer');

class ClozeCard {
    constructor(fullText, cloze){
        this.fullText = fullText;
        this.cloze = cloze;
        this.partial = fullText.replace(cloze, '...');
        this.print = function(){
        console.log(fullText);
        console.log(cloze);
        }
       
    }
}


firstPresident = new ClozeCard('George Washington was the first president of the United States.', 'George Washington');

secondPresident = new ClozeCard('John Adams was the second president of the United States.', 'John Adams');

thirdPresident = new ClozeCard('Thomas Jefferson was the third president of the United States.', 'Thomas Jefferson');







function askQuestion() {
	inquirer.prompt([
		{
			type: 'input',
			message: firstPresident.partial + '\nAnswer: ',
			name: 'userGuess'
        },
        {
			type: 'input',
			message: secondPresident.partial + '\nAnswer: ',
			name: 'userGuess'
        },
        {
			type: 'input',
			message: thirdPresident.partial + '\nAnswer: ',
			name: 'userGuess'
        }
	]).then(function (answers) {
		console.log('\n');

		// Check if the user has guessed correctly
		if (answers.userGuess.toLowerCase() === firstPresident.cloze.toLowerCase())  {
			console.log('Correct!');
			
		} else {
			console.log('Incorrect!');
			
		}
		
		console.log(firstPresident.fullText);
        console.log('-------------------------------------\n');

        if (answers.userGuess.toLowerCase() === secondPresident.cloze.toLowerCase())  {
			console.log('Correct!');
			
		} else {
			console.log('Incorrect!');
			
		}
		
		console.log(secondPresident.fullText);
        console.log('-------------------------------------\n');

        if (answers.userGuess.toLowerCase() === thirdPresident.cloze.toLowerCase())  {
			console.log('Correct!');
			
		} else {
			console.log('Incorrect!');
			
		}
		
		console.log(thirdPresident.fullText);
        console.log('-------------------------------------\n');
        

					}
			)
		}

				

// Begin asking the questions!
					
			

askQuestion();


module.exports = ClozeCard;