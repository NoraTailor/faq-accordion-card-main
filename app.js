const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
	const btn = question.querySelector('.question-title');
	const answer = question.querySelector('.answer');

	btn.addEventListener('click', function () {
		questions.forEach(function (item) {
			if (item !== question) {
				item.classList.remove('show-answer');
			}
		});

		if (answer.classList.contains('show-answer')) {
			setTimeout(() => {
				answer.classList.remove('show-answer');
			}, 7000);
		}
		question.classList.toggle('show-answer');
	});
});
