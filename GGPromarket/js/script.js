// Селектор для кнопки "Бургер"
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
});

/*------------------------------------*/
const searchInput = document.getElementById('search-input');
const searchButton = document.querySelector('.search-btn');

// Очистка поля ввода при клике на кнопку "Найти"
searchButton.addEventListener('click', () => {
    if (searchInput.value.trim() === '') {
        alert('Пожалуйста, введите поисковый запрос.');
    } else {
        searchInput.value = '';
    }
});

// Очистка поля ввода при нажатии клавиши "Enter"
searchInput.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        searchInput.value = '';
    }
});

/*------------------------------------*/
// Счетчик лайков при клике на кнопку "Нравится"
const likeButtons = document.querySelectorAll('.product-like-btn');
const likesCounter = document.querySelector('.likes span');

let counterLikes = 0;

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('active')) {
            counterLikes--;
            likesCounter.textContent = counterLikes;
        } else {
            counterLikes++;
            likesCounter.textContent = counterLikes;
        }
        button.classList.toggle('active');
    });
});

// Сброс счетчика лайков при клике на кнопку "Сбросить"
const buttonLikeReset = document.querySelector('.likes-btn');

buttonLikeReset.addEventListener('click', () => {
    counterLikes = 0;
    likesCounter.textContent = counterLikes;
    likeButtons.forEach(button => {
        button.classList.remove('active');
    });
});

/*------------------------------------*/
// Сброс счетчика корзины товаров при клике на кнопку "Корзина"
const buttonTrashReset = document.querySelector('.trash-btn');
const trashCounterEl = document.querySelector('.trash span');
let trashCounter = 0;

buttonTrashReset.addEventListener('click', () => {
    trashCounter = 0;
    trashCounterEl.textContent = trashCounter;
});

// Счетчик товаров в корзине при клике на кнопку "В корзину"
const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        trashCounter++;
        trashCounterEl.textContent = trashCounter;
    });
});