// gera cores aleatórias
const collorsBall = document.getElementsByClassName('ball');

window.onload = randomColorGenerate;

function randomColorGenerate() {
  
  for(let i = 0; i < collorsBall.length; i += 1) {
    let r = Math.round(Math.random() * 255 + 1);
    let g = Math.round(Math.random() * 255 + 1);
    let b = Math.round(Math.random() * 255 + 1);
    collorsBall[i].style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  }
  
}
