let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let addP1 = document.querySelector('#addP1');
let addP2 = document.querySelector('#addP2');
let reset = document.querySelector('#reset');
let gamePoint = document.querySelector('#gamePoint');

let p1Score = 0;
addP1.addEventListener('click', () => {
	p1Score++;
	p1.textContent = p1Score;
	disable();
});

let p2Score = 0;
addP2.addEventListener('click', () => {
	p2Score++;
	p2.textContent = p2Score;
	disable();
});

reset.addEventListener('click', () => {
	p1Score = 0;
	p1.textContent = p1Score;
	p2Score = 0;
	p2.textContent = p2Score;
	able();
});

let gamePointScore = parseInt(gamePoint.value);
gamePoint.addEventListener('change', () => {
	gamePointScore = parseInt(gamePoint.value);
	console.log(gamePointScore);
});

let disable = () => {
	if (p1Score == gamePointScore) {
		p1.classList.add('text-green-600');
		p2.classList.add('text-red-600');
		addP1.setAttribute('disabled', 'true');
		addP2.setAttribute('disabled', 'true');
	} else if (p2Score == gamePointScore) {
		p1.classList.add('text-red-600');
		p2.classList.add('text-green-600');
		addP1.setAttribute('disabled', 'true');
		addP2.setAttribute('disabled', 'true');
	}
};
let able = () => {
	addP1.removeAttribute('disabled');
	p1.classList.remove('text-green-600');
	p2.classList.remove('text-red-600');
	p1.classList.remove('text-red-600');
	p2.classList.remove('text-green-600');
	addP2.removeAttribute('disabled');
};
