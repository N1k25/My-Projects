const askPopover = document.getElementById('ask-popover');
const askSuccessPopover = document.getElementById('ask-success-popover');
const askForm = document.getElementById("askForm");


// Для поля телефону обмежити введення символів (цифри 0-9, знак +, дужки (), дефіс -)
const askPhoneInput = document.getElementById("askPhone");

askPhoneInput.addEventListener("input", function () {
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
const askCloseButton = document.getElementById("askCloseBtn");

askCloseButton.addEventListener("click", () => {
    askForm.reset();
});


function showError(input, text) {
  input.classList.add("invalid");

  input.parentElement.querySelector(".error").textContent = text;
}

// Валидация формы
askForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  document
    .querySelectorAll(".invalid")
    .forEach((el) => el.classList.remove("invalid"));

  const askName = askForm.askName;
  const askPhone = askForm.askPhone;
  const askMessage = askForm.askMessage;
  const askAgree = document.getElementById("askAgree");

  if (askName.value.trim() === "") {
    showError(askName, "Поле обязательное для заполнения");
    valid = false;
  }

  if (askPhone.value.trim() === "") {
    showError(askPhone, "Поле обязательное для заполнения");
    valid = false;
  }

  if (askMessage.value.trim() === "") {
    showError(askMessage, "Поле обязательное для заполнения");
    valid = false;
  }

  if (!askAgree.checked) {
    document.querySelector(".ask-checkbox-error").textContent =
      "Необходимо согласиться с обработкой персональных данных";
    valid = false;
  }

  if (valid) {
    askForm.reset();
    askPopover.hidePopover();
    askSuccessPopover.showPopover();
  }
});
