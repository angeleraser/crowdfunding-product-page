const rewardPackageProps = {
	title: '',
	pledge: 0,
	remaining: 0,
	description: '',
};

const createIdentifier = name => {
	return name
		.split(' ')
		.map(str => str.toLowerCase())
		.join('-');
};

const RewardPackage = (props = rewardPackageProps) => {
	const identifier = createIdentifier(props.title);

	return `
					<article data-id="${identifier}" class="reward-package
					${props.remaining === 0 ? ' reward-package--is-disabled' : ''}">

						<div class="reward-package__header">
							<h3>${props.title}</h3>
							${props.pledge > 0 ? `<span>Pledge $${props.pledge} or more</span>` : ''}
						</div>

						<p class="reward-package__description">
					    ${props.description}
						</p>

						<div class="reward-package__actions">
							<div class="reward-package__actions__reward-remaining">
								<div class="reward-package__actions__reward-remaining__count">
									${props.remaining}
								</div>

								<span class="reward-package__actions__reward-remaining__helper-text"> left </span>
							</div>

							<button data-role="select-reward-btn" class="btn--is-cyan btn--rounded btn">
								Select reward
							</button>
						</div>
					</article>`;
};

const RewardPackageEdit = (props = rewardPackageProps) => {
	const identifier = createIdentifier(props.title);

	return `
		<article data-id="${identifier}" class="reward-package-edit white-box white-box--outlined">
			<div class="reward-package-edit__header">
				<label class="reward-package-edit__header__title" for="${identifier}">
					<div class="reward-package-edit__header__title__checkbox-container">
						<input type="checkbox" name="${identifier}" id="${identifier}" />
						<button class="reward-package-edit__header__title__checkbox-container__button"></button>
					</div>

					<span>${props.title}</span>
				</label>

				${
					props.pledge
						? `<div class="reward-package-edit__header__feature">
								Pledge $${props.pledge} or more
							</div>`
						: ''
				}
			</div>

			<div class="reward-package-edit__description">
					${props.description}
			</div>

			<div class="reward-package-edit__items-remaining">
				${props.remaining}
				<span>left</span>
			</div>

			<div class="reward-package-edit__actions">
				<div class="reward-package-edit__actions__heading">
					Enter your pledge
				</div>

				<div class="reward-package-edit__actions__edit-pledge">
					<div class="reward-package-edit__actions__edit-pledge__input-wrapper">
						<span>$</span>
						<input min="0" max="99" value="0" type="number" />
					</div>

					<button class="btn--is-cyan continue-btn btn--rounded btn">
						<span class="btn__content">Continue</span>
					</button>
				</div>
			</div>
		</article>
	`;
};

export { RewardPackage, RewardPackageEdit };
