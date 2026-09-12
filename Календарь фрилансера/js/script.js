// Header form
const headerFormInput = document.getElementById("header-form-input");
const headerFormButton = document.getElementById("header-form-button");

headerFormButton.addEventListener('click', (e) => {
  if (headerFormInput.value.trim()) {
    e.preventDefault();
    headerFormInput.value = '';
    alert('Success!');
  }
});


// Burger menu
const toggleMenu = () => {
  const navigation = document.querySelector(".navigation");
  const navigationMenu = document.querySelector(".menu-list");

  const burgerMenu = document.querySelector(".menu-icon");
  const src = burgerMenu.getAttribute("src");

  const isBurger = src === "assets/burger-menu.svg";
  const iconName = isBurger ? "assets/close.svg" : "assets/burger-menu.svg";

  burgerMenu.setAttribute("src", iconName);

  if (!isBurger) {
    navigation.classList.add("navigation--mobile--fadeout");
    setTimeout(() => {
      navigation.classList.toggle("navigation--mobile");
      navigationMenu.classList.toggle("menu--mobile");
    }, 300);
  } else {
    navigation.classList.remove("navigation--mobile--fadeout");
    navigation.classList.toggle("navigation--mobile");
    navigationMenu.classList.toggle("menu--mobile");
  }
};


// Newsletter form
const form = document.getElementById("newsletterForm");
const emailInput = document.getElementById("email");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (!email) {
    message.textContent = "Please enter your email.";
    return;
  }

  if (!emailInput.checkValidity()) {
    message.textContent = "Please enter a valid email.";
    return;
  }

  message.textContent = "Thank you for subscribing!";
  emailInput.value = "";
});


// Contact form
const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const contactEmailInput = document.getElementById("contactEmail");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const formStatus = document.getElementById("formStatus");

/* ========================================
   VALIDATION FUNCTIONS
======================================== */

function setError(input, errorElement, message) {
  const group = input.closest(".form-group");

  group.classList.remove("has-success");
  group.classList.add("has-error");

  errorElement.textContent = message;
}

function setSuccess(input, errorElement) {
  const group = input.closest(".form-group");

  group.classList.remove("has-error");
  group.classList.add("has-success");

  errorElement.textContent = "";
}

function clearValidation(input, errorElement) {
  const group = input.closest(".form-group");

  group.classList.remove("has-error", "has-success");

  errorElement.textContent = "";
}

/* ========================================
   NAME VALIDATION
======================================== */

function validateName() {
  const value = nameInput.value.trim();

  if (value === "") {
    setError(nameInput, nameError, "Please enter your name.");

    return false;
  }

  if (value.length < 2) {
    setError(nameInput, nameError, "Name must contain at least 2 characters.");

    return false;
  }

  setSuccess(nameInput, nameError);

  return true;
}

/* ========================================
   EMAIL VALIDATION
======================================== */

function validateEmail() {
  const value = contactEmailInput.value.trim();

  if (value === "") {
    setError(contactEmailInput, emailError, "Please enter your email.");

    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(value)) {
    setError(contactEmailInput, emailError, "Please enter a valid email address.");

    return false;
  }

  setSuccess(contactEmailInput, emailError);

  return true;
}

/* ========================================
   MESSAGE VALIDATION
======================================== */

function validateMessage() {
  const value = messageInput.value.trim();

  if (value === "") {
    setError(messageInput, messageError, "Please enter your message.");

    return false;
  }

  if (value.length < 10) {
    setError(
      messageInput,
      messageError,
      "Message must contain at least 10 characters.",
    );

    return false;
  }

  setSuccess(messageInput, messageError);

  return true;
}

/* ========================================
   LIVE VALIDATION
======================================== */

nameInput.addEventListener("blur", validateName);
contactEmailInput.addEventListener("blur", validateEmail);
messageInput.addEventListener("blur", validateMessage);

/* При вводі прибираємо помилку */

nameInput.addEventListener("input", () => {
  if (nameInput.value.trim() !== "") {
    validateName();
  }
});

contactEmailInput.addEventListener("input", () => {
  if (contactEmailInput.value.trim() !== "") {
    validateEmail();
  }
});

messageInput.addEventListener("input", () => {
  if (messageInput.value.trim() !== "") {
    validateMessage();
  }
});

/* ========================================
   FORM SUBMIT
======================================== */

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  formStatus.textContent = "";
  formStatus.style.color = "";

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  if (!isNameValid || !isEmailValid || !isMessageValid) {
    formStatus.textContent = "Please correct the errors above.";

    formStatus.style.color = "#e53935";

    return;
  }

  /*
   * Тут можна підключити реальний API
   * або бекенд для відправки форми.
   */

  const formData = {
    name: nameInput.value.trim(),
    email: contactEmailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  console.log("Form data:", formData);

  formStatus.textContent = "Your message has been sent successfully!";
  formStatus.style.color = "#38a169";

  contactForm.reset();

  clearValidation(nameInput, nameError);
  clearValidation(contactEmailInput, emailError);
  clearValidation(messageInput, messageError);
});
