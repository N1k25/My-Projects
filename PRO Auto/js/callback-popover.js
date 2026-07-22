const callbackPopover = document.getElementById('callback-popover');
const callbackSuccessPopover = document.getElementById('callback-success-popover');
const callbackForm = document.getElementById("callbackForm");


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


// Очищать все поля формы при нажатии на кнопку "X"
const callbackCloseButton = document.getElementById("closeBtn");

callbackCloseButton.addEventListener("click", () => {
    callbackForm.reset();
});


function showError(input, text) {
  input.classList.add("invalid");

  input.parentElement.querySelector(".error").textContent = text;
}

// Валидация формы
callbackForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  document
    .querySelectorAll(".invalid")
    .forEach((el) => el.classList.remove("invalid"));

  const name = callbackForm.name;
  const phone = callbackForm.phone;
  const agree = document.getElementById("agree");

  if (name.value.trim() === "") {
    showError(name, "Поле обязательное для заполнения");
    valid = false;
  }

  if (phone.value.trim() === "") {
    showError(phone, "Поле обязательное для заполнения");
    valid = false;
  }

  if (!agree.checked) {
    document.querySelector(".checkbox-error").textContent =
      "Необходимо согласиться с обработкой персональных данных";
    valid = false;
  }

  if (valid) {
    callbackForm.reset();
    callbackPopover.hidePopover();
    callbackSuccessPopover.showPopover();
  }
});
