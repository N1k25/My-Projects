// Обработка нажатия на кнопку "Участвовать в конкурсе"
const contestServiceButton = document.getElementById('contest-service-btn');
const contestForm = document.querySelector('.contest--freelancer__form');

contestServiceButton.addEventListener('click', () => {
    if (contestForm.classList.contains('none')) {
        contestForm.classList.remove('none');
        contestServiceButton.style.display = 'none';
    } else {
        return;
    }
});


const contestTextArea = document.querySelector('.desc-field');
const addNewPhotoButton = document.getElementById('add__new--photo');
const contestFormButton = document.getElementById('contest-freelancer-form-btn');

//Обработка ввода в текстовое поле "Описание"
contestTextArea.addEventListener('input', () => {
    if (contestTextArea.value.trim() !== '') {
        contestFormButton.classList.remove('step__button--disabled');
    }
});

//Обработка нажатия на кнопку "Добавить фото"
addNewPhotoButton.addEventListener('click', () => {
    if (contestFormButton.classList.contains('step__button--disabled')) {
        contestFormButton.classList.remove('step__button--disabled');
    } else {
        return;
    }
});

//Обработка нажатия на кнопку "Отправить работу"
contestFormButton.addEventListener('click', () => {
    if (contestTextArea.value !== '') {
        contestTextArea.value = '';
    }
    contestFormButton.classList.add('step__button--disabled');
});
