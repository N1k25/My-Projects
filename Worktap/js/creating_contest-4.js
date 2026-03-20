// Валидация на четвертом шаге
const payLinks = document.querySelectorAll('.pay-link');

payLinks.forEach(link => {
    link.addEventListener('click', () => {
        buttonNext.classList.remove('step__button--disabled');
    });
});
