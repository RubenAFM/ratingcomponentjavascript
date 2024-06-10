// variables

const buttons = document.querySelector('.button__container');
const submitButton = document.querySelector('.button__submit');
const beforeRating = document.querySelector('.before-rating');
const afterRating = document.querySelector('.after-rating');
const resultRating = document.querySelector('.result__rating');



// listener

clickButton();

function clickButton() {
    buttons.addEventListener('click', result);

}

function result(e) {
    e.preventDefault();    
    if (e.target.id >= 1 && e.target.id <= 5) {        
        for (const button of buttons.querySelectorAll('button')) {
            if (button !== e.target) {
                button.classList.remove('button__clicked')                
            }                                    
        }
        e.target.classList.toggle('button__clicked');
        const calification = e.target.id;
        submitHTML(calification);
        } else {
            console.log('Valor fuera de rango');
        }
}

function submitHTML(calification) {
    submitButton.addEventListener('click', () => {
        
        if (calification >= 1 && calification <= 5) {
            beforeRating.style.display = 'none';
            afterRating.style.display = 'flex';
            resultRating.innerHTML = `<p class="result__rating">You selected ${calification} out of 5 </p>`;
        }
    })
}
    




