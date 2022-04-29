//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let arr =['disney', 'pokemon', 'flexasurs']

arr.forEach(show => console.log(show))


//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let numbers = [1,2,3,4,5,6]

let even = numbers.filter(num => num % 2 === 0)

console.log(even)

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function findSum(arr){
   let sorted = arr.sort((a,b) => a - b);
    return `The second lowest sum is ${sorted[sorted.length - 2]} and the second highest number is ${sorted[1]} `
}


console.log(findSum([5,19,85,3,42,-1,7,]))