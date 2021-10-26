let quadroPixel = document.querySelector('#pixel-board');

function criaQuadroPixel() {
	for (let i = 0; i < 25; i++) {
		let divPixel = document.createElement('div');
		divPixel.className = 'pixel';
		divPixel.innerText = i;
		quadroPixel.appendChild(divPixel);
	}
}

criaQuadroPixel();

function adicionaClsseSelected(){
	let cores = document.querySelectorAll('.color');
	cores[0].classList.add('selected');

	for (let c of cores) {
		c.addEventListener('click', function () {
			let clicou = this.innerText;
			this.classList.add('selected');

			for (let index = 0; index < cores.length; index += 1) {
				if (cores[index].innerText !== clicou) {
					cores[index].classList.remove('selected');
					selecionaCor();
					pintarPixel();
				}
			}

			return clicou;
		});
	}
}

adicionaClsseSelected();

function selecionaCor(){
	let selecionada = document.querySelector('.selected');
	return selecionada.innerHTML;
}


function pintarPixel(){
	let pixels = document.querySelectorAll('.pixel');
	let corSelecionada = selecionaCor();
	
	for(let i = 0; i < pixels.length; i+=1){
		pixels[i].addEventListener('click', function(){
			let selecionado = this.innerText;
			let estilo = window.getComputedStyle(pixels[i]);
			corAtual = estilo.backgroundColor;

			if(i !== selecionado){
				pixels[i].style.backgroundColor = corSelecionada;
			}else{
				pixels[i].style.backgroundColor = corAtual;
			}
		});
	}
}

pintarPixel();

function clear() {
	let btn = document.querySelector('#clear-board');
	let pixels = document.querySelectorAll('.pixel');

	btn.addEventListener('click', function(){
		for(p of pixels){
			p.style.backgroundColor = 'white';
		}
	});
}

clear();
