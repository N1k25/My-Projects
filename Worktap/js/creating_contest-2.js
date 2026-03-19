// Обработка изменения значения ползунка продолжительности
const durationInput = document.querySelector('.duration-input');
const durationValue = document.querySelector('.duration-value span');

function updateRange() {
  const value = durationInput.value;
  const min = durationInput.min;
  const max = durationInput.max;
  const percent = (value - min) / (max - min);

  // Оновлюємо значення на ползунку
  durationValue.textContent = `${value}`;
  const offset = percent * durationInput.offsetWidth;
  durationValue.style.left = `${offset}px`;

  // Оновлюємо градієнт фону
  durationInput.style.background = `linear-gradient(to right, #1DBF73 ${percent * 100}%, #B0AAD0 ${percent * 100}%)`;
}

durationInput.addEventListener('input', updateRange);
updateRange();


// Удаление тега при нажатии на кнопку закрытия
const tagsItem = document.querySelectorAll('.tags-item');
const buttonsClose = document.querySelectorAll('.tags-item--close');

buttonsClose.forEach((button) => {
    button.addEventListener('click', () => {
        button.closest('.tags-item').remove();
    });
});


// Валидация на втором шаге
const stepOneInput = document.querySelector('.step--1__form-input');
const categorySelect = document.querySelector('#work-category');
const subcategorySelect = document.querySelector('#work-subcategory');
const budgetInput = document.querySelector('#budget-input')
const buttonNext = document.querySelector('.step__button--next');

durationInput.addEventListener('input', () => {
    if (stepOneInput.value.trim() !== '' && categorySelect.value !== '' && subcategorySelect.value !== '' && budgetInput.value.trim() !== '') {
        buttonNext.classList.remove('step__button--disabled');
    } else {
        buttonNext.classList.add('step__button--disabled');
    }
});
