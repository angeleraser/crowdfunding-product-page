async function delay(callbackOrDelayTime, delayTime) {
	if (typeof callbackOrDelayTime === 'number') {
		return new Promise(resolve => {
			const timeout = setTimeout(() => {
				resolve();
				clearTimeout(timeout);
			}, callbackOrDelayTime);
		});
	}

	return new Promise(resolve => {
		const timeout = setTimeout(() => {
			resolve();
			callbackOrDelayTime();
			clearTimeout(timeout);
		}, delayTime);
	});
}

export default delay;
