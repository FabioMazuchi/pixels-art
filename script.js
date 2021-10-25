let quadroPixel = document.querySelector('#pixel-board');

function criaQuadroPixel() {
	for (let i = 0; i < 25; i++) {
		let divPixel = document.createElement('div');
		divPixel.className = 'pixel';
		quadroPixel.appendChild(divPixel);
	}
}

criaQuadroPixel();

window.onload = function(){
		let cores = document.querySelectorAll('.color');
		let selecionada = 'selected';
		cores[0].classList.add('selected');
		console.log(cores);
}
