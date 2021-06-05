import { closeDialog, openDialogWithContent } from './dialog.js';
import { RewardPackageEdit } from './reward-package.js';
import rewardsData from '../data.js';
import successBackedDialog from './success-backed-dialog.js';

const DialogRewardItems = rewardsData
	.filter(item => item.remaining > 0)
	.map(item => RewardPackageEdit(item))
	.join('');

export const BackProjectDialogContent = projectList => {
	return `
								<div class="back-project-dialog__header">
									<h2 class="back-project-dialog__header__title">
										Back this project
									</h2>

									<p class="back-project-dialog__header__description">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Cumque odio doloremque facilis voluptate cupiditate aut.
									</p>
								</div>

								<div class="back-project-dialog__reward-list">
                  ${projectList}
								</div>
					    </div>`;
};

const handleSelectPackage = (item, list) => {
	const checkBtn = item.querySelector('input[type="checkbox"]');

	checkBtn.addEventListener('change', event => {
		if (event.target.tagName !== 'INPUT') return;

		if (!checkBtn.checked) {
			item.classList.remove('reward-package-edit--is-selected');
		} else {
			item.classList.add('reward-package-edit--is-selected');

			updateRewardList(list, item);
		}
	});

	return item;
};

const updateRewardList = (list, selectedItem) => {
	list.forEach(el => {
		if (selectedItem.dataset.id !== el.dataset.id) {
			el.querySelector('input[type="checkbox"]').checked = false;
			el.classList.remove('reward-package-edit--is-selected');
		}
	});
};

export const handleRewardPackageActions = dialogElement => {
	const rewardItems = [
		...dialogElement.querySelectorAll('.reward-package-edit'),
	];

	const continueButton = [...dialogElement.querySelectorAll('.continue-btn')];

	rewardItems.forEach((component, _, list) => {
		handleSelectPackage(component, list);
	});

	continueButton.forEach(btn => {
		btn.addEventListener('click', () => {
			closeDialog(dialogElement);

			successBackedDialog();
		});
	});
};

export default async function () {
	openDialogWithContent(
		BackProjectDialogContent(DialogRewardItems),
		'back-project-dialog',
	);

	const dialog = document.querySelector('.dialog');

	handleRewardPackageActions(dialog);
}
