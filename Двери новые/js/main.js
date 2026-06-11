const selectionInputs = document.querySelectorAll('.selection-container input[type="radio"]');
const resetButton = document.querySelector('.reset-button');

resetButton.addEventListener('click', () => {
    // Скидання radio
    selectionInputs.forEach(input => {
        input.checked = false;
    });

    // Скидання range slider
    minValue = minPrice;
    maxValue = maxPrice;

    updateTrack();
});

/*----------------------*/

const mapInputField = document.querySelector('.map-form__input--fild');
const mapButton = document.querySelector('.map-form__btn');

mapInputField.addEventListener('input', function () {
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

mapInputField.addEventListener('focus', function () {
    if (!this.value) {
        this.value = '+380';
    }
});

mapButton.addEventListener('click', () => {
    const maxLength = 13;

    if (mapInputField.value.length < maxLength) {
        alert('Введите номер в формате +380XXXXXXXXX');
    }

    if (mapInputField.value.trim() != '') {
        mapInputField.value = ''
    }
});
