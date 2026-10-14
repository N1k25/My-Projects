const tourForm = document.querySelector("#tourForm");
const tourFormNameInput = document.querySelector("#tour-form-name");
const tourFormPhoneInput = document.querySelector("#tour-form-phone");
const tourFormStatusMessage = document.querySelector("#tourFormStatus");

// Маска телефона: сохраняет префикс +380 и позволяет вводить только цифры.
tourFormPhoneInput.addEventListener("focus", () => {
    if (!tourFormPhoneInput.value.trim()) tourFormPhoneInput.value = "+380";
});

tourFormPhoneInput.addEventListener("input", () => {
    const digits = tourFormPhoneInput.value.replace(/\D/g, "");
    let nationalDigits = digits;

    if (nationalDigits.startsWith("380")) {
    nationalDigits = nationalDigits.slice(3);
    } else if (nationalDigits.startsWith("0")) {
    nationalDigits = nationalDigits.slice(1);
    }

    tourFormPhoneInput.value = "+380" + nationalDigits.slice(0, 9);
    tourFormPhoneInput.setAttribute("aria-invalid", "false");
    tourFormStatusMessage.textContent = "";
});

[tourFormNameInput, tourFormPhoneInput].forEach((input) => {
    input.addEventListener("input", () => {
    input.setAttribute("aria-invalid", "false");
    tourFormStatusMessage.textContent = "";
    });
});

tourForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = tourFormNameInput.value.trim();
    const phoneDigits = tourFormPhoneInput.value.replace(/\D/g, "");
    let valid = true;

    if (name.length < 2) {
    tourFormNameInput.setAttribute("aria-invalid", "true");
    valid = false;
    }

    if (!phoneDigits.startsWith("380") || phoneDigits.length !== 12) {
    tourFormPhoneInput.setAttribute("aria-invalid", "true");
    valid = false;
    }

    if (!valid) {
    tourFormStatusMessage.style.color = "#b3261e";
    tourFormStatusMessage.textContent = "Введите имя и корректный телефонный номер.";
    return;
    }

    // Тут можна підключити fetch() до свого API або CRM.
    tourFormStatusMessage.style.color = "#048410";
    tourFormStatusMessage.textContent = "Спасибо! Данные проверены. Подключите API для фактической отправки.";
    tourForm.reset();
    tourFormPhoneInput.value = "+380";
});