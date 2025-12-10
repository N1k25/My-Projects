document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const mobileMenu = document.querySelector(".mobile-menu");

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        mobileMenu.classList.toggle("active");

        // Блокуємо або розблоковуємо скрол
        document.body.classList.toggle("lock", mobileMenu.classList.contains("active"));
    });
});
