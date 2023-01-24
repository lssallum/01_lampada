const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

function isLampBroken () {
  return lamp.src.indexOf ('quebrada') > -1 //Faz uma varredura na string procurando um trecho - retorna verdadeiro ou falso (quando não encotra retorna -1)
}

function lampOn () {
  if (!isLampBroken ()){
  lamp.src = './img/ligada.jpg';
  }
}
function lampOff () {
  if (!isLampBroken ()){
  lamp.src = './img/desligada.jpg';
  }
}
function lampBroken () {
  lamp.src = './img/quebrada.jpg';
}

function lampOnOff () {
  if (turnOnOff.textContent === 'Ligar') {
    lampOn();
    turnOnOff.textContent = 'Desligar';
  } else {
    lampOff();
    turnOnOff.textContent = 'Ligar'
  }
}

turnOnOff.addEventListener('click', lampOnOff);

lamp.addEventListener('mouseover', lampOnOff);
lamp.addEventListener('mouseleave', lampOnOff)
lamp.addEventListener('dblclick', lampBroken);