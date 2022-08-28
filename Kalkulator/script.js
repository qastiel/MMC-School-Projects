const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const button = document.querySelector('.count');
const error = document.querySelector('.error');
const costInfo =document.querySelector('.cost-info');
const finalPrice = document.querySelector('.cost');

const checkInput = () => {
    if (price.value == '' || people.value == '' || tip.value == 0) {
        error.textContent = 'Podaj wszystkie wartości!';
        costInfo.style.display = 'none';
    } else {
        error.textContent = '';
        costCounter();
    }
};

const costCounter = () =>{
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);
    const allCost = (newPrice +(newPrice*newTip))/newPeople;
    costInfo.style.display = 'block';
    finalPrice.textContent = allCost.toFixed(2)
};

button.addEventListener('click', checkInput);