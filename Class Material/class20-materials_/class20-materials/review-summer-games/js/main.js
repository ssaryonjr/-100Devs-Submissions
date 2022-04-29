//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function checkArr(arr){
    let product = 1;
    arr.forEach(num => {
        product *= num
    })
    alert(product)
}

checkArr([142, 2, 3])