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
		cores[0].classList.add('selected');
	
		for(let c of cores){
			c.addEventListener('click', function () {
				for (let index = 0; index < cores.length; index++) {
					if(cores[index].classList.length > 1){
						cores[index].classList.remove('selected');
						console.log(cores[index]);
					}else{
						this.classList.add('selected');
					}
				}
			});
		}
}

