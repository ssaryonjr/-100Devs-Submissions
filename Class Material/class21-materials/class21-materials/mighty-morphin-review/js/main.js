// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = 'BIRTHDAY'
console.log(favHoliday)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let string = 'welcome'
console.log(string.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function takeFive (arr){
let newArr = arr.map(num => {
    return num -= 100
})

return newArr
}

console.log(takeFive([4,5,18,4,32]))

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function takeThree(arr){
    let highestNum = Math.max(...arr)
    let lowestNum = Math.min(...arr)
    return `Highest number in the array is ${highestNum} and the lowest is ${lowestNum} `
}

console.log(takeThree([4,1,190,3]))

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsorTails(){
    let result = Math.random()
    if (result < .5){
        return 'heads';
    } else {
        return 'tails'
    }
}


// console.log(headsorTails())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flip(n){
    for (let i = 1; i <= n; i++){
        let result = headsorTails();
        console.log(result)
    }
}

flip(1)