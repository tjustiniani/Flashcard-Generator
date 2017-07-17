// var fs = require("fs");
// var questions = require('./questions.js');
// var inquirer = require ("inquirer");

// process.argv for user input

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
console.log(firstPresident.front); 
console.log(firstPresident.back); 
console.log('-------------------------------------');
}

var firstPresident = new BasicCard (
    "Who was the first president of the United States?", "George Washington"); {
console.log(firstPresident.front); 
console.log(firstPresident.back); 
console.log('-------------------------------------');
}


module.exports = BasicCard;