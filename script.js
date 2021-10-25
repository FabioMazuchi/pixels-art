let quadroPixel = document.querySelector('#pixel-board');
console.log(quadroPixel);
for (let i = 0; i < 25; i++) {
	let divPixel = document.createElement('div');
	divPixel.className = 'pixel';
	quadroPixel.appendChild(divPixel);
	

	
}
