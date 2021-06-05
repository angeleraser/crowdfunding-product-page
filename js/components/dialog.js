import addRippleEffectToAllButtons from './btn-ripple-effect.js';
import delay from '../utils/delay.util.js';

const DialogComponent = content => {
	const dialog = document.createElement('div');

	dialog.classList.add('dialog', `dialog--is-open`);

	dialog.innerHTML = `<div class="dialog__overlay">
					<div class="dialog__overlay__body">
						<div class="dialog__overlay__body__layout white-box section-padding">
							<button class="dialog__overlay__body__close-btn close-btn">
								<svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
										fill-rule="evenodd"
									/>
								</svg>
							</button>
							<div class="dialog__overlay__body__layout__content">
                ${content}
							</div>
						</div>
					</div>
				</div>`;
	return dialog;
};

export const closeDialog = dialogElement => {
	dialogElement.classList.remove('dialog--is-open');
	dialogElement.classList.add('dialog--is-closed');
	document.body.classList.remove('no-scroll');

	delay(() => {
		document.body.removeChild(dialogElement);
	}, 300);
};

export const openDialogWithContent = (
	dialogContent,
	dialogClassnameIdentifier,
) => {
	const Dialog = DialogComponent(dialogContent);

	Dialog.classList.add(dialogClassnameIdentifier);
	document.body.appendChild(Dialog);
	document.body.classList.add('no-scroll');

	const closeBtn = Dialog.querySelector('.close-btn');
	addRippleEffectToAllButtons(Dialog.querySelectorAll('.btn'));

	closeBtn.addEventListener('click', async () => {
		closeDialog(Dialog);
	});
};
