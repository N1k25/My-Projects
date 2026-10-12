const form = document.querySelector("#priceForm");
const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");
const statusMessage = document.querySelector("#formStatus");

// Маска телефона: сохраняет префикс +380 и позволяет вводить только цифры.
phoneInput.addEventListener("focus", () => {
    if (!phoneInput.value.trim()) phoneInput.value = "+380";
});

phoneInput.addEventListener("input", () => {
    const digits = phoneInput.value.replace(/\D/g, "");
    let nationalDigits = digits;

    if (nationalDigits.startsWith("380")) {
    nationalDigits = nationalDigits.slice(3);
    } else if (nationalDigits.startsWith("0")) {
    nationalDigits = nationalDigits.slice(1);
    }

    phoneInput.value = "+380" + nationalDigits.slice(0, 9);
    phoneInput.setAttribute("aria-invalid", "false");
    statusMessage.textContent = "";
});

[nameInput, phoneInput].forEach((input) => {
    input.addEventListener("input", () => {
    input.setAttribute("aria-invalid", "false");
    statusMessage.textContent = "";
    });
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const phoneDigits = phoneInput.value.replace(/\D/g, "");
    let valid = true;

    if (name.length < 2) {
    nameInput.setAttribute("aria-invalid", "true");
    valid = false;
    }

    if (!phoneDigits.startsWith("380") || phoneDigits.length !== 12) {
    phoneInput.setAttribute("aria-invalid", "true");
    valid = false;
    }

    if (!valid) {
    statusMessage.style.color = "#b3261e";
    statusMessage.textContent = "Введите имя и корректный телефонный номер.";
    return;
    }

    // Тут можна підключити fetch() до свого API або CRM.
    statusMessage.style.color = "#048410";
    statusMessage.textContent = "Спасибо! Данные проверены. Подключите API для фактической отправки.";
    form.reset();
    phoneInput.value = "+380";
});