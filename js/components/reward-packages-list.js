import { RewardPackage } from './reward-package.js';
import addRippleEffectToAllButtons from './btn-ripple-effect.js';
import openBackProjectDialog from './back-project-dialog.js';
import rewardsData from '../data.js';

const RewardPackageList = document.getElementById('reward-packages-list');

const rewardsItems = rewardsData.map(item => RewardPackage(item)).join('');

export default function () {
	// Insert all items
	RewardPackageList.innerHTML = rewardsItems;

	const allButtons = [
		...RewardPackageList.querySelectorAll(
			'button[data-role="select-reward-btn"]',
		),
	];

	// Add ripple effect to all buttons whithin the list
	addRippleEffectToAllButtons(allButtons);

	allButtons.forEach(btn => {
		btn.addEventListener('click', () => {
			openBackProjectDialog();
		});
	});
}
