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


/*------------------------------------Service rules--------------------------------*/
// Открыть модальное окно
document.getElementById("open-modal__service--rules").addEventListener("click", function() {
    document.getElementById("modal-service--rules").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-modal__service--rules-btn").addEventListener("click", function() {
    document.getElementById("modal-service--rules").classList.remove("open")
})
document.getElementById("service--rules-btn").addEventListener("click", function() {
    document.getElementById("modal-service--rules").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal-service--rules").classList.remove("open")
    }
});

// Закрыть модальное окно при клике вне его
document.querySelector("#modal-service--rules .modal__box-service--rules").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal-service--rules").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
