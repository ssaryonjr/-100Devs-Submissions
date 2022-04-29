//Arrays
let arr = [1,2,3,'5',5,6]
//Create and array of numbers. Sum all of the numbers. Alert the sum.
let sum = arr.reduce((a,c) => a + Number(c))
console.log(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function sqr(arr){
    let sqrArray = arr.map(num => Math.sqrt(num))
    return sqrArray
}


console.log(sqr([1,2,3,4,5,6]))
//Create a function that takes string
//Print the reverse of that string to the console

function reverse(str){
    return str.split('').reverse().join('')
}

console.log(reverse('hello'))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindrome(str){
    let reverseStr = str.split('').reverse().join('');
    return reverseStr === str ? 'Its a palindrome!' : 'It is not!'
}

console.log(palindrome('taco cat'))