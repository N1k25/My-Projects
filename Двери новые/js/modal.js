// Ввод номера телефона
const modalFormInputPhoneField = document.querySelector('.top-row input[type="tel"]');

modalFormInputPhoneField.addEventListener('input', function () {
    // оставляем только цифры
    let digits = this.value.replace(/\D/g, '');

    // обязательно начинаем с 380
    if (!digits.startsWith('380')) {
        digits = '380';
    }

    // 380 + 9 цифр
    digits = digits.substring(0, 12);

    this.value = '+' + digits;
});

modalFormInputPhoneField.addEventListener('focus', function () {
    if (!this.value) {
        this.value = '+380';
    }
});

// Діалог вибору файлу
const input = document.getElementById('photo');
const fileName = document.getElementById('fileName');

input.addEventListener('change', () => {
    fileName.textContent = input.files.length
        ? input.files[0].name
        : 'Файл не вибрано';
});

// Очистка всех полей ввода
document.getElementById('reviews-submit').addEventListener('click', function (e) {
    e.preventDefault(); // если не нужно перезагружать страницу

    const form = document.querySelector('.reviews-form');

    // Очистка текстовых полей
    form.querySelector('input[type="text"]').value = '';
    form.querySelector('input[type="tel"]').value = '';
    form.querySelector('textarea').value = '';

    // Очистка файла
    const fileInput = form.querySelector('.file-input');
    fileInput.value = '';
    document.getElementById('fileName').textContent = 'Файл не вибрано';

    // Сброс рейтинга (1 звезда по умолчанию)
    document.getElementById('star1').checked = true;

    // Возврат чекбокса в отмеченное состояние
    form.querySelector('input[type="checkbox"]').checked = true;
});

// Закрыть модальное окно при нажатии кнопки Отправить
document.getElementById("reviews-submit").addEventListener("click", function() {
    document.getElementById("modal-reviews").classList.remove("open");
});


/*--------------------------------------------------*/

// Открыть модальное окно
document.getElementById("reviews-submit").addEventListener("click", function() {
    document.getElementById("modal-reviews-successfull").classList.add("open");
});

// Закрыть модальное окно
document.getElementById("close-modal__reviews-successfull-btn").addEventListener("click", function() {
    document.getElementById("modal-reviews-successfull").classList.remove("open");
});


/*--------------------------------------------------*/

// Открыть модальное окно
document.getElementById("open-modal__reviews-btn").addEventListener("click", function() {
    document.getElementById("modal-reviews").classList.add("open")
});

// Закрыть модальное окно
document.getElementById("close-modal__reviews-btn").addEventListener("click", function() {
    document.getElementById("modal-reviews").classList.remove("open")
});

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal-reviews").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#modal-reviews .modal__box-reviews").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal-reviews").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

