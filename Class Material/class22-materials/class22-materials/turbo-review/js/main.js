// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = ' strawberry lemonade   '
console.log(favDrink.trim())

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let words = 'potato, peanuts, greens'
console.log(words.includes('apple'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rsp(){
let choice = ['rock', 'paper', 'scissors'];
return choice[Math.floor(Math.random() * choice.length)]

}




// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(playerChoice){
    let botChoice = rsp();

    if ((playerChoice == 'rock' && botChoice == 'scissors') || (playerChoice == 'paper' && botChoice == 'rock') || (playerChoice == 'scissors' && botChoice == 'paper')) {
        console.log('You win!') 
    } else if (playerChoice === botChoice){
        console.log('It is a tie!')
    } else{
        console.log('You lose!')
    }
}



//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGame(arr){
    arr.forEach(choice => checkWin(choice))
}

playGame(['rock', 'paper', 'scissors'])