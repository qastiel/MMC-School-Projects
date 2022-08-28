const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answerArr = ['Tak', 'Nie', 'Nie wiem', 'Lepiej nie pytaj'];

const shakeBall = () =>{
    ball.classList.add('shake-animation');
    setTimeout(checkPoint, 1000)
}

const checkPoint = ()  => {
    if(input.value !== '' && input.value.slice(-1) === '?') {
       generateAnswer();
       error.textContent= '';
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'Pytanie musi być zakończoen znakiem "?".';
        answer.textContent = '';
    } else {
        error.textContent= "Musisz zadać pytanie!";
        answer.textContent = '';
    }
    ball.classList.remove('shake-animation');
}

const generateAnswer = () => {
    const number = Math.floor(Math.random() * answerArr.length);
    answer.innerHTML=`<span>Odpoweidź</span> ${answerArr[number]}`
}


ball.addEventListener('click', shakeBall )
