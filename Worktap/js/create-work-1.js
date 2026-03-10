// Удаление тега при нажатии на кнопку закрытия
const tagsItem = document.querySelectorAll('.tags-item');
const buttonsClose = document.querySelectorAll('.tags-item--close');

buttonsClose.forEach((button) => {
    button.addEventListener('click', () => {
        button.closest('.tags-item').remove();
    });
});

// Валидация на первом шаге
const stepOneInput = document.querySelector('.step--1__form-input');
const categorySelect = document.querySelector('#work-category');
const subcategorySelect = document.querySelector('#work-subcategory');
const buttonNext = document.querySelector('.step__button--next');

stepOneInput.addEventListener('input', () => {
    if (stepOneInput.value.trim() !== '' && categorySelect.value !== '' && subcategorySelect.value !== '') {
        buttonNext.classList.remove('step__button--disabled');
    } else {
        buttonNext.classList.add('step__button--disabled');
    }
});

categorySelect.addEventListener("change", function () {
    if (stepOneInput.value.trim() !== '' && categorySelect.value !== '' && subcategorySelect.value !== '') {
        buttonNext.classList.remove("step__button--disabled");
    } else {
        buttonNext.classList.add("step__button--disabled");
    }
});

subcategorySelect.addEventListener("change", function () {
    if (stepOneInput.value.trim() !== '' && categorySelect.value !== '' && subcategorySelect.value !== '') {
        buttonNext.classList.remove("step__button--disabled");
    } else {
        buttonNext.classList.add("step__button--disabled");
    }
});