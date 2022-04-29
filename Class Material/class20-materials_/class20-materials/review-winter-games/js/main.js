//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function evenArray(arr){
    let even = [];
    let odd = [];
    arr.forEach(num =>{
        num % 2 === 0 ? even.push(num) : odd.push(num);
    })
}
console.log(evenArray([44, 13, 176,21, 4, 15]));