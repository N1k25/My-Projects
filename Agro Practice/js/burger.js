const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector(".mobile-menu");

document.addEventListener("DOMContentLoaded", () => {
    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        mobileMenu.classList.toggle("active");

        // Блокуємо або розблоковуємо скрол
        document.body.classList.toggle("lock", mobileMenu.classList.contains("active"));
    });
});

let mobileMenuLinks = document.querySelectorAll('.mobile-menu__link, .mobile-menu-phone__link');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('lock');
    });
});
