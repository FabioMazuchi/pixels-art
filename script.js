const quadroPixel = document.querySelector('#pixel-board');
const colorPallet = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const btnLimpar = document.querySelector('#clear-board');
const input = document.querySelector('#board-size');
const btnTamanho = document.querySelector('#generate-board');
const size = input.value;

const alteraTamanhoCss = (tamanho) => {
  quadroPixel.style.width = `calc(40px * ${tamanho})`;
};

const criarPixels = (tamanho) => {
  for (let i = 0; i < tamanho * tamanho; i += 1) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    quadroPixel.appendChild(div);
  }
};

criarPixels(size);

const addRemoveClassSelected = ({ target }) => {
  for (let i = 0; i < colorPallet.length; i += 1) {
    if (colorPallet[i].classList.length === 2) {
      colorPallet[i].classList.remove('selected');
    }
  }
  target.classList.add('selected');
};

const addEvent = (array, callback) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i].addEventListener('click', callback);
  }
};

const pintarQuadro = ({ target }) => {
  const atual = target;
  const sel = document.querySelector('.selected').innerHTML;
  atual.style.backgroundColor = `${sel}`;
};

const limparQuadro = () => {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
};

const checkTamanho = (tamanho) => {
  if (tamanho < 5) {
    return 5;
  }
  if (tamanho > 50) {
    return 50;
  }
  return tamanho;
};

const alteraTamanho = () => {
  const tam = Number(checkTamanho(input.value));

  if (tam === 0 || tam === 5) {
    alert('Board inválido!');
  } else {
    quadroPixel.innerHTML = '';
    criarPixels(tam);
    alteraTamanhoCss(tam);
    addEvent(colorPallet, addRemoveClassSelected);
    addEvent(pixels, pintarQuadro);
  }
};

btnTamanho.addEventListener('click', alteraTamanho);
btnLimpar.addEventListener('click', limparQuadro);

addEvent(colorPallet, addRemoveClassSelected);
addEvent(pixels, pintarQuadro);

const addClassSelectedtInicial = () => {
  colorPallet[0].classList.add('selected');
};

window.onload = addClassSelectedtInicial;
