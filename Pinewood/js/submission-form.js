const submissionForm = document.querySelector("#submissionForm");
const submissionFormNameInput = document.querySelector("#submission-form-name");
const submissionFormPhoneInput = document.querySelector("#submission-form-phone");
const submissionFormEmailInput = document.querySelector("#submission-form-email");
const submissionFormStatusMessage = document.querySelector("#submissionFormStatus");

// Маска телефона: сохраняет префикс +380 и позволяет вводить только цифры.
submissionFormPhoneInput.addEventListener("focus", () => {
    if (!submissionFormPhoneInput.value.trim()) submissionFormPhoneInput.value = "+380";
});

submissionFormPhoneInput.addEventListener("input", () => {
    const digits = submissionFormPhoneInput.value.replace(/\D/g, "");
    let nationalDigits = digits;

    if (nationalDigits.startsWith("380")) {
    nationalDigits = nationalDigits.slice(3);
    } else if (nationalDigits.startsWith("0")) {
    nationalDigits = nationalDigits.slice(1);
    }

    submissionFormPhoneInput.value = "+380" + nationalDigits.slice(0, 9);
    submissionFormPhoneInput.setAttribute("aria-invalid", "false");
    submissionFormStatusMessage.textContent = "";
});

[submissionFormNameInput, submissionFormPhoneInput, submissionFormEmailInput].forEach((input) => {
    input.addEventListener("input", () => {
    input.setAttribute("aria-invalid", "false");
    submissionFormStatusMessage.textContent = "";
    });
});

submissionForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = submissionFormNameInput.value.trim();
    const phoneDigits = submissionFormPhoneInput.value.replace(/\D/g, "");
    const email = submissionFormEmailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;

    if (name.length < 2) {
        submissionFormNameInput.setAttribute("aria-invalid", "true");
        valid = false;
    }

    if (!phoneDigits.startsWith("380") || phoneDigits.length !== 12) {
        submissionFormPhoneInput.setAttribute("aria-invalid", "true");
        valid = false;
    }

    if (!emailRegex.test(email)) {
        submissionFormEmailInput.setAttribute("aria-invalid", "true");
        valid = false;
    }

    if (!valid) {
        submissionFormStatusMessage.style.color = "#b3261e";
        submissionFormStatusMessage.textContent = "Введите имя, корректный телефонный номер и E-mail.";
        return;
    }

    // Тут можна підключити fetch() до свого API або CRM.
    submissionFormStatusMessage.style.color = "#048410";
    submissionFormStatusMessage.textContent = "Спасибо! Данные проверены. Подключите API для фактической отправки.";
    submissionForm.reset();
    submissionFormPhoneInput.value = "+380";
});