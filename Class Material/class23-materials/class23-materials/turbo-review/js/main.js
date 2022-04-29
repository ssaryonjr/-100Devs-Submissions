// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = 'this is not a question?'
// alert( sentence.endsWith('?'))
// alert(sentence + ' is not a question')

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let str = "I am looking for jr. dev positions."

// console.log( str.replaceAll('jr. dev', 'software engineer'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function whatChoice(){
    let choice = Math.floor(Math.random() *3)
    
    if(choice == 0){
        return 'rock'
    } else if (choice == 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}




// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function whoWon(playerChoice){
    let bot = whatChoice();

    if ((bot === 'rock' && playerChoice === 'scissors') || 
    (bot === 'paper' && playerChoice === 'rock') || 
    (bot === 'scissors' && playerChoice === 'paper') ){
        console.log('You lose!')
    } else if(bot === playerChoice){
        console.log('Its a tie!')
    } else {
        console.log('you win')
    }


}


console.log(whoWon('rock'))
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
