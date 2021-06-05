import delay from './delay.util.js';

const createRippleCircle = (xPosition, yPosition, size) => {
	const spanEl = document.createElement('span');
	spanEl.classList.add('ripple');
	spanEl.style.top = `${yPosition}px`;
	spanEl.style.left = `${xPosition}px`;
	spanEl.style.width = `${size}px`;
	spanEl.style.height = `${size}px`;
	return spanEl;
};

const insertRipple = async (parentElement, rippleElement) => {
	parentElement.appendChild(rippleElement);
	await delay(1000);
	parentElement.removeChild(rippleElement);
};

const rippleEffect = (containerEl, event) => {
	const xPosition = event.offsetX;
	const yPosition = event.offsetY;
	const { width, height } = containerEl.getBoundingClientRect();
	let size = Math.max(width, height);
	insertRipple(containerEl, createRippleCircle(xPosition, yPosition, size));
};

export default rippleEffect;
