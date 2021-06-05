import delay from '../utils/delay.util.js';
const menuEl = document.getElementById('menu');
const burgerBtn = document.getElementById('burger-btn');

let isMenuClosed = true;

function toggleMenu() {
	if (!isMenuClosed) {
		menuEl.classList.remove('is-active');
		menuEl.classList.add('is-closed');
		delay(() => {
			menuEl.classList.add('display-none');
		}, 300);
	} else {
		menuEl.classList.add('is-active');
		menuEl.classList.remove('is-closed');
		menuEl.classList.remove('display-none');
	}
	isMenuClosed = !isMenuClosed;
	return false;
}

function handleBurgerBtnClick() {
	burgerBtn.classList.toggle('is-active');
	toggleMenu();
}

export default function () {
	burgerBtn.addEventListener('click', handleBurgerBtnClick);
document.body.classList.toggle("no-scroll")
}

