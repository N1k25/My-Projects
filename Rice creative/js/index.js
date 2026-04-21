// Получаем элементы формы и кнопки
const formButton = document.querySelector('.form-btn');
const formInputs = document.querySelectorAll('.form__field input');

// Добавляем обработчик события на кнопку
formButton.addEventListener('click', () => {
  // Очищаем все поля формы
  formInputs.forEach((input) => {
    input.value = '';
  });
});
