const reviewPopover = document.getElementById('review-popover');
const reviewSuccessPopover = document.getElementById('review-success-popover');
const reviewForm = document.getElementById("reviewForm");


// Для поля телефону обмежити введення символів (цифри 0-9, знак +, дужки (), дефіс -)
const reviewPhoneInput = document.getElementById("reviewPhone");

reviewPhoneInput.addEventListener("input", function () {
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
const reviewCloseButton = document.getElementById("reviewCloseBtn");

reviewCloseButton.addEventListener("click", () => {
    reviewForm.reset();
});


function showError(input, text) {
  input.classList.add("invalid");

  input.parentElement.querySelector(".error").textContent = text;
}

// Валидация формы
reviewForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  document
    .querySelectorAll(".invalid")
    .forEach((el) => el.classList.remove("invalid"));

  const reviewName = reviewForm.reviewName;
  const reviewPhone = reviewForm.reviewPhone;
  const reviewMessage = reviewForm.reviewMessage;
  const reviewAgree = document.getElementById("reviewAgree");

  if (reviewName.value.trim() === "") {
    showError(reviewName, "Поле обязательное для заполнения");
    valid = false;
  }

  if (reviewPhone.value.trim() === "") {
    showError(reviewPhone, "Поле обязательное для заполнения");
    valid = false;
  }

  if (reviewMessage.value.trim() === "") {
    showError(reviewMessage, "Поле обязательное для заполнения");
    valid = false;
  }

  if (!reviewAgree.checked) {
    document.querySelector(".review-checkbox-error").textContent =
      "Необходимо согласиться с обработкой персональных данных";
    valid = false;
  }

  if (valid) {
    reviewForm.reset();
    reviewPopover.hidePopover();
    reviewSuccessPopover.showPopover();
  }
});
