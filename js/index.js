import openBackProjectDialog from './components/back-project-dialog.js';
import bookmarkBtn from './components/bookmark-btn.js';
import addRippleEffectToAllButtons from './components/btn-ripple-effect.js';
import initializeMenuBtn from './components/menu.js';
import initializeRewardPackagesList from './components/reward-packages-list.js';

const allButtonsElements = [...document.querySelectorAll('.btn')];

const backProjectBtn = document.getElementById('back-project-btn');

addRippleEffectToAllButtons(allButtonsElements);

backProjectBtn.addEventListener('click', openBackProjectDialog);

initializeMenuBtn();
initializeRewardPackagesList();
bookmarkBtn();
