//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
function reverseList(list){
    return list.reverse();
}


//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
 function compare(arr1,arr2){
     return arr1.reduce((acc,c) => acc + Math.pow(c), 0) > arr2.reduce((acc,c) => acc + c**3, 0)
 }
 
 console.log(compare([2,2,2],[2,2,2]))

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
 
function canMult(arr){
    let newArr = arr.filter((element, index) => element % index === 0)
    return newArr
}

console.log(canMult([22, -6, 32, 82, 9, 25]))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sum(arr){
    return arr.reduce((acc, c) => acc + Number(c), 0)
}