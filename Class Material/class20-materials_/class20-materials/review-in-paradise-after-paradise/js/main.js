// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function checkArr(arr){
    if (arr[0] < arr[arr.length -1]){
        console.log('Hi')
    } else if (arr[0] > arr[arr.length -1]){
        console.log('Bye')
    } else if (arr[0] === arr[arr.length -1]){
        console.log('We close in about an hour')
    }
}

checkArr([42,32,123,1])