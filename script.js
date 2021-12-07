const quadroPixel = document.querySelector('#pixel-board');
const btn = document.querySelector('#generate-board');
const colorPallet = document.getElementsByClassName('color');

const addRemoveClassSelected = ({ target }) => {
  for (let i = 0; i < colorPallet.length; i += 1) {
    if (colorPallet[i].classList.length === 2) {
      colorPallet[i].classList.remove('selected');
    }
  }
  target.classList.add('selected');
};

const addEvent = () => {
  for (let i = 0; i < colorPallet.length; i += 1) {
    colorPallet[i].addEventListener('click', addRemoveClassSelected);
  }
};

addEvent();

const criarPixels = (qtd) => {
  for (let i = 0; i < qtd * qtd; i += 1) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    quadroPixel.appendChild(div);
  }
};

const addClassSelectedtInicial = () => {
  colorPallet[0].classList.add('selected');
};

criarPixels(5);

window.onload = addClassSelectedtInicial;

// function criaQuadroPixel(size) {
//   for (let i = 0; i < size; i += 1) {
//     const linha = document.createElement('div');
//     linha.classList.add('linha');
//     for (let n = 0; n < size; n += 1) {
//       const pixel = document.createElement('div');
//       pixel.classList.add('pixel');
//       linha.appendChild(pixel);
//     }
//     const clear = document.createElement('div');
//     clear.classList.add('clear');
//     linha.appendChild(clear);
//     quadroPixel.appendChild(linha);
//   }
// }

// function pintarPixel() {
//   const pixels = document.querySelectorAll('.pixel');
//   let corSelecionada = selecionaCor();
// let corAtual;

//   for (let i = 0; i < pixels.length; i += 1) {
//     pixels[i].addEventListener('click', function () {
//       const selecionado = this.innerText;
//       const estilo = window.getComputedStyle(pixels[i]);
//       corAtual = estilo.backgroundColor;

//       if (i !== selecionado) {
//         pixels[i].style.backgroundColor = corSelecionada;
//       } else {
//         pixels[i].style.backgroundColor = corAtual;
//       }
//     });
//   }
// }

// function adicionaClasseSelected() {
//   const cores = document.querySelectorAll('.color');
//   cores[0].classList.add('selected');
//   for (let i = 0; i < cores.length; i += 1) {
//     cores[i].addEventListener('click', function () {
//       const clicou = this.innerText;
//       this.classList.add('selected');
//       for (let index = 0; index < cores.length; index += 1) {
//         if (cores[index].innerText !== clicou) {
//           cores[index].classList.remove('selected');
//           selecionaCor();
//           pintarPixel();
//         }
//       }
//       return clicou;
//     });
//   }
// }

// function selecionaCor() {
//   let selecionada = document.querySelector('.selected');
//   return selecionada.innerHTML;
// }

// function clear() {
//   const btn = document.querySelector('#clear-board');
//   const pixels = document.querySelectorAll('.pixel');

//   btn.addEventListener('click', function () {
//     for (let i = 0; i < pixels.length; i += 1) {
//       pixels[i].style.backgroundColor = 'white';
//     }
//   });
// }

// window.onload = function () {
// adicionaClasseSelected();
//   criaQuadroPixel(5);
//   clear();
//   pintarPixel();
// }
