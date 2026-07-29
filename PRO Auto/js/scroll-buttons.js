const btnUp = document.getElementById('scrollUp');
const btnDown = document.getElementById('scrollDown');

btnUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

btnDown.addEventListener('click', () => {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    });
});

function updateButtons() {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Кнопка "вгору"
    if (scrollTop > 100) {
        btnUp.classList.remove('disabled');
    } else {
        btnUp.classList.add('disabled');
    }

    // Кнопка "вниз"
    if (scrollTop + windowHeight >= documentHeight - 2) {
        btnDown.classList.add('disabled');
    } else {
        btnDown.classList.remove('disabled');
    }
}

window.addEventListener('scroll', updateButtons);
window.addEventListener('load', updateButtons);
window.addEventListener('resize', updateButtons);