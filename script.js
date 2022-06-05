// gera cores aleatórias
const collorsBall = document.getElementsByClassName('ball');
const colors = document.querySelector('#colors');
const rgbColor = document.querySelector('#rgb-color');
const answer = document.querySelector('#answer');
const resetButton = document.querySelector('#reset-game')
const pontos = document.querySelector('#score')


window.onload = randomColorGenerate;

function randomColorGenerate() {
  
  for(let i = 0; i < collorsBall.length; i += 1) {
    let r = Math.round(Math.random() * 255 + 1);
    let g = Math.round(Math.random() * 255 + 1);
    let b = Math.round(Math.random() * 255 + 1);
    collorsBall[i].style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  }
  let initialRamdom = Math.floor(Math.random() * 5 + 1);
  rgbColor.innerText = collorsBall[initialRamdom].style.backgroundColor;
  answer.innerText = 'Escolha uma cor';
  
}

// checa se a cor escolhida é a mesma e responde se acertou ou errou
colors.addEventListener('click', colorCheck)

function colorCheck(event) {
  let pontuacao = 0;
  if(event.target.style.backgroundColor === rgbColor.innerText) {
    answer.innerText = "Acertou!"
    pontuacao += 3
    pontuacao = pontuacao + "";
    pontos.innerHTML = pontuacao
    
  } else {
    answer.innerText = "Errou! Tente novamente!";
  }
  
 
} 


// cria botão para resetar cores
resetButton.addEventListener('click', resetColors);
function resetColors() {
  randomColorGenerate()
 
}

// function addScore() {
//   localStorage.setItem('myPoints', JSON.stringify(pontos.innerText))
// }
// function addScore()
// function getScore() {
//   const myPoints = JSON.parse(localStorage.getItem('myPoints'));
//   pontos.innerText = myPoints;
// }
// getScore()