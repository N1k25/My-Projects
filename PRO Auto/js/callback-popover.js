// Для поля телефону обмежити введення символів (цифри 0-9, знак +, дужки (), дефіс -)
const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function () {
    let value = this.value;

    // Видаляємо всі недопустимі символи
    value = value.replace(/[^0-9+()\-]/g, "");

    // Залишаємо лише один "+" на початку
    value = value.replace(/\+/g, "");
    if (this.value.startsWith("+")) {
        value = "+" + value;
    }

    this.value = value;
});


// Очищать все поля формы при нажатии на кнопку "ОТПРАВИТЬ"
const callbackForm = document.getElementById("callbackForm");
const callbackSubmitButton = document.getElementById("submitBtn");

callbackSubmitButton.addEventListener("click", () => {
    callbackForm.reset();
});

// Очищать все поля формы при нажатии на кнопку "X"
const callbackCloseButton = document.getElementById("closeBtn");

callbackCloseButton.addEventListener("click", () => {
    callbackForm.reset();
});
