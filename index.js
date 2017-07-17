var questions = require('./basic.json');
var inquirer = require ("inquirer");

// process.argv for user input

// class BasicCard {
//     constructor(front, back){
//         this.front = front;
//         this.back = back;
//         this.print = function(){
//         console.log(front);
//         console.log(back);
//         }
       
//     }
// }

var askQuestions = function(){

// "Who was the first president of the United States?"
console.log(questions.front); 

// "George Washington"
console.log(questions.back); }

askQuestions();




//clozeCard.js

class ClozeCard  {
  constructor(fullText, cloze){
        this.fullText = fullText;
        this.cloze = cloze;
        this.print = function(){
        console.log(fullText);
        console.log(cloze);
        }
       
    }
}



var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington"); {

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.

//THIS IS WHAT I NEED TO WORK ON. FIGURE OUT HOW TO EXCLUDE CLOZE FROM TEXT FOR PARTIAL STATEMENT.

var partial = firstPresidentCloze.replace('George Washington', '');
console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");
    }
module.exports = ClozeCard;