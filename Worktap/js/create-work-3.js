// Для кнопок редактирования текста добавляем обработчик события клика и переключаем класс selected
const editorButtons = document.querySelectorAll('.work__editor-header-btn--icon');
editorButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('selected');
    });
});


// Для поля ввода работы добавляем обработчик события ввода и проверяем, заполнено ли оно
const workEditor = document.getElementById('work__editor');
workEditor.addEventListener('input', () => {
    if (workEditor.value.trim() !== '') {
        buttonNext.classList.remove('step__button--disabled');
    } else {
        buttonNext.classList.add('step__button--disabled');
    }
});
