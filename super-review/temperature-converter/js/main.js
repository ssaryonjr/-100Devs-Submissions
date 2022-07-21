//Write your pseduo code first! 
//celcius to farhneight

//get the value of celcious
//take that input and multiplyit by 1.8 and add 32;
//return output

function converter(){
    let temp = Number(document.querySelector('input').value)

    temp = (temp * 1.8)+ 32
    
    document.querySelector('h2').innerText = temp
}


const click = document.querySelector('h1')

click.addEventListener('click', converter)