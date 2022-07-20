//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too



//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

const checker = document.querySelector('h1');

checker.addEventListener('click', ()=> {
let age = Number(document.getElementById('danceDanceRevolution').value)

let answer = document.querySelector('p');

if (age < 16){
    answer.innerText = 'Cant drive'
    console.log('Cannot drive');
} else if (age < 18) {
    answer.innerText = `Can't hate from outside of the club because they can't even get in`
    console.log(`Can't hate from outside of the club because they can't even get in`)
} else if (age < 21){
    answer.innerText = 'You cant drink'
    console.log('You cant drink')
} else if (age < 25){
    answer.innerText = 'They cannot rent cars affordably'
    console.log('They cannot rent cars affordably')
} else if (age < 30){
    answer.innerText = 'You cannot rent fancy cars affordably'
    console.log('You cannot rent fancy cars affordably')
} else if (age >= 30){
    answer.innerText = 'theres nothing left to look forward to'
    console.log('theres nothing left to look forward to')
}

})