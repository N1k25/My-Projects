const surveyorNameInputField = document.querySelector('.call--surveyor__name--input');
const surveyorPhoneInputField = document.querySelector('.call--surveyor__phone--input');
const surveyorAddressInputField = document.querySelector('.call--surveyor__address--input');
const surveyorButton = document.querySelector('.call--surveyor__btn');

surveyorPhoneInputField.addEventListener('input', function () {
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

surveyorPhoneInputField.addEventListener('focus', function () {
    if (!this.value) {
        this.value = '+380';
    }
});

surveyorButton.addEventListener('click', () => {
    const maxLength = 13;

    if (surveyorPhoneInputField.value.length < maxLength) {
        alert('Введите номер в формате +380XXXXXXXXX');
    }

    if (surveyorNameInputField.value.trim() != '' | surveyorPhoneInputField.value.trim() != '' | surveyorAddressInputField.value.trim() != '' ) {
        surveyorNameInputField.value = '';
        surveyorPhoneInputField.value = '';
        surveyorAddressInputField.value = '';
    }
});
