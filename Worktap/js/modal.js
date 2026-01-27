/*------------------------------------About--------------------------------*/
// Открыть модальное окно
document.getElementById("open-modal__about-btn").addEventListener("click", function() {
    document.getElementById("modal-about").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-modal__about-btn").addEventListener("click", function() {
    document.getElementById("modal-about").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal-about").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#modal-about .modal__box-about").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal-about").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});



/*------------------------------------How it work--------------------------------*/
// Открыть модальное окно
document.getElementById("open-modal__how--it--work").addEventListener("click", function() {
    document.getElementById("modal-how--it--work").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-modal__how--it--work-btn").addEventListener("click", function() {
    document.getElementById("modal-how--it--work").classList.remove("open")
})
document.getElementById("how--it--work-btn").addEventListener("click", function() {
    document.getElementById("modal-how--it--work").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal-how--it--work").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#modal-how--it--work .modal__box-how--it--work").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal-how--it--work").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
