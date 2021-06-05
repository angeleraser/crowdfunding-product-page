import { closeDialog, openDialogWithContent } from './dialog.js';

const SuccessBackedDialogContent = function () {
	return `<div class="dialog__overlay__body__layout__content success-backed-dialog__content">
						<div class="success-backed-dialog__icon">
							<svg
								width="64"
								height="64"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g fill="none" fill-rule="evenodd">
									<circle fill="#3CB3AB" cx="32" cy="32" r="32" />
									<path
										stroke="#FFF"
										stroke-width="5"
										d="M20 31.86L28.093 40 44 24"
									/>
								</g>
							</svg>

							<div class="radial-bg"></div>
								</div>

								<div class="success-backed-dialog__title">
									Thanks for your support!
								</div>

								<div class="success-backed-dialog__message">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Facere minus dolores amet quos nesciunt beatae, placeat
									blanditiis sunt nisi libero dolore ut sint tempora tempore
									quae assumenda nemo itaque aperiam.
								</div>

								<button class="btn btn--rounded continue-success-btn btn--is-cyan">Got it</button>
							</div>`;
};

export default function () {
	openDialogWithContent(SuccessBackedDialogContent(), 'success-backed-dialog');

	const dialog = document.querySelector('.success-backed-dialog');

	const closeButton = dialog.querySelector('.continue-success-btn');

	closeButton.addEventListener('click', () => {
		closeDialog(dialog);
	});
}
