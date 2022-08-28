const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answerArr = ['Tak', 'Nie', 'Nie wiem', 'Lepiej nie pytaj']

const shakeBall = () => {
	ball.classList.add('shake-animation')
    setTimeout(checkAnswer, 1000);
}

const checkAnswer = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		generateAnswer();
        error.textContent = '';
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'To musi być pytanie';
        answer.textContent = '';
	} else {
		error.textContent = 'Nie podałeś treści';
        answer.textContent = '';
	}
}

const generateAnswer = () => {
	const number = Math.floor(Math.random() * answerArr.length);
	answer.innerHTML = `<span>Odpowiedź:</span> ${answerArr[number]}`
}

ball.addEventListener('click', shakeBall)
