const form = document.getElementById("orderForm");

const clientNameField = document.getElementById("client-name");
const clientPhoneField = document.getElementById("client-phone");
const clientEmailField = document.getElementById("client-email");
const clientAgree = document.getElementById("client-agree");


// Для поля телефону обмежити введення символів (цифри 0-9, знак +, дужки (), дефіс -)
clientPhoneField.addEventListener("input", function () {
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


// Нажатие на кнопку (с валидацией формы)
document.getElementById("submitOrder").addEventListener("click", function (e) {
  e.preventDefault();

  let valid = true;

  clearErrors();

  if (clientNameField.value.trim() === "") {
    showOrderError(clientNameField, "Заполните поле");
    valid = false;
  }

  if (clientPhoneField.value.trim() === "") {
    showOrderError(clientPhoneField, "Заполните поле");
    valid = false;
  }

  if (clientEmailField.value.trim() === "") {
    showOrderError(clientEmailField, "Заполните поле");
    valid = false;
  } else {
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailReg.test(clientEmailField.value.trim())) {
      showOrderError(clientEmailField, "Неверный формат");
      valid = false;
    }
  }

  if (!clientAgree.checked) {
    alert("Необходимо согласиться с обработкой персональных данных.");
    valid = false;
  }

  if (valid) {
    window.location.href = "./order-finish.html";
  }
});

function showOrderError(input, text) {
  input.classList.add("error-field");

  input.parentElement.querySelector(".order-error").textContent = text;
}

function clearErrors() {
  document.querySelectorAll(".order-error").forEach((el) => (el.textContent = ""));

  document
    .querySelectorAll("input")
    .forEach((el) => el.classList.remove("error-field"));
}
