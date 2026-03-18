// Обработчик события клика на ссылку "Сменить фрилансера"
const linkChangeCreator = document.querySelector('.order--creator__person-link--change');
const freelancerRatesBlock = document.querySelector('.order--creator__freelancer--rates');

linkChangeCreator.addEventListener('click', () => {
    freelancerRatesBlock.classList.remove('none');
    linkChangeCreator.classList.add('step__button--disabled');
});


// Обработчик события клика на кнопку "Отклонить"
const buttonsReject = document.querySelectorAll('.list-item-button--reject');
buttonsReject.forEach(button => {
    button.addEventListener('click', () => {
        freelancerRatesBlock.classList.add('none');
        linkChangeCreator.classList.remove('step__button--disabled');
    });
});
