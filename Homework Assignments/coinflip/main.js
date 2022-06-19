const button = document.querySelector('button')
const headScore = document.querySelector('.headScore');
const tailScore = document.querySelector('.tailScore');
let coinImg = document.querySelector('img')

headScore.innerText = '0'
tailScore.innerText = '0'

button.addEventListener('click', flipCoin)


async function flipCoin(){
  // const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=leon`)
  const data = await res.json()

  console.log(data.name)
  let result = data.name;

  if(result == 'heads') {
     headScore.innerText = parseInt(headScore.textContent) + 1
     coinImg.src = '/heads.png'
  } else {
    coinImg.src = '/tails.png'
    tailScore.innerText = parseInt(tailScore.textContent) + 1;
  }

  
}