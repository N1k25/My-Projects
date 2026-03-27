// Показать блок других фрилансеров
const personChangeButton = document.querySelector('.contest--creator__person-link--change');
const freelancerRatesBlock = document.querySelector('.contest--creator__freelancer--rates');

personChangeButton.addEventListener('click', () => {
    freelancerRatesBlock.classList.remove('none');
    personChangeButton.classList.add('step__button--disabled');
});


function hideFreelancerRates() {
    personChangeButton.classList.remove('step__button--disabled');
    freelancerRatesBlock.classList.add('none');
}

// Обработчик события клика на кнопку "Выбрать"
const listItemButtonAccept = document.querySelectorAll('.list-item-button--accept');
listItemButtonAccept.forEach(button => {
    button.addEventListener('click', () => {
        hideFreelancerRates();
    });
});

// Обработчик события клика на кнопку "Отклонить"
const listItemButtonReject = document.querySelectorAll('.list-item-button--reject');
listItemButtonReject.forEach(button => {
    button.addEventListener('click', () => {
        hideFreelancerRates();
    });
});
