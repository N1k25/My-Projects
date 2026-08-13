 // Открыть модальное окно
document.querySelectorAll('.licenses-card-info__btn').forEach((button) => {
    button.addEventListener('click', ()=> {
        document.getElementById("modal-licenses").classList.add("open");
    })
});

// Закрыть модальное окно
document.getElementById("close-modal__licenses-btn").addEventListener("click", function() {
    document.getElementById("modal-licenses").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal-licenses").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#modal-licenses .modal__box-licenses").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal-licenses").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});