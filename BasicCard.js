var inquirer = require ('inquirer');



class BasicCard {
    constructor(front, back){
        this.front = front;
        this.back = back;
        this.print = function(){
        console.log(front);
        console.log(back);
        }
       
    }
}


var firstPresident = new BasicCard (
    "Who was the first president of the United States?", "George Washington"); {
}

var secondPresident = new BasicCard (
    "Who was the second president of the United States?", "John Adams"); {
}

var thirdPresident = new BasicCard (
    "Who was the third president of the United States?", "Thomas Jefferson"); {
}




function question() {
	inquirer.prompt([
		{
			type: 'input',
			message: firstPresident.front + '\nAnswer: ',
			name: 'userGuess'
        },
        {
			type: 'input',
			message: secondPresident.front + '\nAnswer: ',
			name: 'userGuess'
        },
        {
			type: 'input',
			message: thirdPresident.front + '\nAnswer: ',
			name: 'userGuess'
        }
	]).then(function (answers) {
		console.log('\n');

		// Check if the user has guessed correctly
		if (answers.userGuess.toLowerCase() === firstPresident.back.toLowerCase())  {
			console.log('Correct!');
			
		} else {
			console.log('Incorrect!');
			
		}
		
		console.log(firstPresident.back);
        console.log('-------------------------------------\n');

        if (answers.userGuess.toLowerCase() === secondPresident.back.toLowerCase())  {
			console.log('Correct!');
			
		} else {
			console.log('Incorrect!');
			
		}
		
		console.log(secondPresident.back);
        console.log('-------------------------------------\n');

        
        if (answers.userGuess.toLowerCase() === thirdPresident.back.toLowerCase())  {
			console.log('Correct!');
			
		} else {
			console.log('Incorrect!');
			
		}
		
		console.log(thirdPresident.back);
        console.log('-------------------------------------\n');
        

					}
			)
		}

				

// Begin asking the questions!
					
			

question();

