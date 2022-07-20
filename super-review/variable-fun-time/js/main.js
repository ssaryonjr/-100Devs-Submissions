//--- Easy
//create a variable and assign it a number
let num = 15

//minus 10 from that number

 num = num - 10;

//print that number to the console

console.log(num)

//--- Medium
//create a variable that holds a value from the input


//add 25 to that number

//alert that number


//--- Hard
//create a variable that holds the h1

const title = document.querySelector('h1')


//add an event listener to that element that console logs the sum of the two previous variables

title.addEventListener('click', ()=> {

    let input = Number(document.querySelector('#danceDanceRevolution').value)

    input += 25

    console.log(input + num)
})