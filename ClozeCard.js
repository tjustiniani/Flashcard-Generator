
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
console.log(firstPresident.fullText);
console.log(firstPresident.cloze); 
console.log(firstPresident.partial); 
console.log('-------------------------------------');



module.exports = ClozeCard;