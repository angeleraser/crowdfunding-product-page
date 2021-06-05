const bookmarkBtn = document.getElementById('bookmark-btn');

export default function () {
	let isBookmarked = false;
	bookmarkBtn.addEventListener('click', () => {
		isBookmarked = !isBookmarked;
		bookmarkBtn.classList.toggle('bookmark-btn--is-bookmarked');
		bookmarkBtn.querySelector('.text-btn').textContent = isBookmarked
			? 'Bookmarked'
			: 'Bookmark';
	});
}
