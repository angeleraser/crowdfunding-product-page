import rippleEffect from '../utils/btn-effect.js';

export default function addRippleEffectToAllButtons(btnList) {
	btnList.forEach(btn => {
		const rippleArea = document.createElement('span');
		const textContentArea = document.createElement('span');

		rippleArea.classList.add('btn__ripple-area');
		textContentArea.classList.add('btn__content');
		textContentArea.innerHTML = btn.innerHTML;

		btn.innerHTML = textContentArea.outerHTML;

		btn.appendChild(rippleArea);

		btn.addEventListener('mousedown', event => {
			rippleEffect(rippleArea, event);
		});
	});
}
