const dataForm = document.getElementById("dataForm");


// Для поля телефону обмежити введення символів (цифри 0-9, знак +, дужки (), дефіс -)
const dataPhoneInput = document.getElementById("dataPhone");

dataPhoneInput.addEventListener("input", function () {
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
const dataEmailInput = document.querySelector('#dataEmail');

dataEmailInput.addEventListener('blur', () => {
  const dataEmail = dataForm.dataEmail;
  const email = dataEmailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    showError(dataEmail, "Введите корректный email");
  } else {
    dataEmail.classList.remove("invalid");
    dataEmail.parentElement.querySelector(".error").textContent = '';
  }
});


function showError(input, text) {
  input.classList.add("invalid");

  input.parentElement.querySelector(".error").textContent = text;
}

// Валидация формы
dataForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  document
    .querySelectorAll(".invalid")
    .forEach((el) => el.classList.remove("invalid"));

  const dataName = dataForm.dataName;
  const dataPhone = dataForm.dataPhone;
  const dataAgree = document.getElementById("dataAgree");

  if (dataName.value.trim() === "") {
    showError(dataName, "Поле обязательное для заполнения");
    valid = false;
  }

  if (dataPhone.value.trim() === "") {
    showError(dataPhone, "Поле обязательное для заполнения");
    valid = false;
  }

  if (!dataAgree.checked) {
    document.querySelector(".data-checkbox-error").textContent =
      "Необходимо согласиться с обработкой персональных данных";
    valid = false;
  }

  if (valid) {
    dataForm.reset();
  }
});
