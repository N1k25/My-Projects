const askSuccessPopover = document.getElementById('ask-success-popover');
const questionForm = document.getElementById("questionForm");


// Для поля телефону обмежити введення символів (цифри 0-9, знак +, дужки (), дефіс -)
const questionPhoneInput = document.getElementById("questionPhone");

questionPhoneInput.addEventListener("input", function () {
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


// Валидация email-поля
const questionEmailInput = document.querySelector('#questionEmail');

questionEmailInput.addEventListener('blur', () => {
  const questionEmail = questionForm.questionEmail;
  const email = questionEmailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    showError(questionEmail, "Введите корректный email");
  } else {
    questionEmail.classList.remove("invalid");
    questionEmail.parentElement.querySelector(".error").textContent = '';
  }
});


function showError(input, text) {
  input.classList.add("invalid");

  input.parentElement.querySelector(".error").textContent = text;
}

// Валидация формы
questionForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  document
    .querySelectorAll(".invalid")
    .forEach((el) => el.classList.remove("invalid"));

  const questionName = questionForm.questionName;
  const questionPhone = questionForm.questionPhone;
  const questionMessage = questionForm.questionMessage;
  const questionAgree = document.getElementById("questionAgree");

  if (questionName.value.trim() === "") {
    showError(questionName, "Поле обязательное для заполнения");
    valid = false;
  }

  if (questionPhone.value.trim() === "") {
    showError(questionPhone, "Поле обязательное для заполнения");
    valid = false;
  }

  if (questionMessage.value.trim() === "") {
    showError(questionMessage, "Поле обязательное для заполнения");
    valid = false;
  }

  if (!questionAgree.checked) {
    document.querySelector(".question-checkbox-error").textContent =
      "Необходимо согласиться с обработкой персональных данных";
    valid = false;
  }

  if (valid) {
    questionForm.reset();
    askSuccessPopover.showPopover();
  }
});
