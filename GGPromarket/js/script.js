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
const likesButton = document.querySelector('.likes-btn');
const likesCounter = document.querySelector('.likes span');

let counterLikes = 0;

likesButton.addEventListener('click', () => {
    counterLikes++;
    likesCounter.textContent = counterLikes;
});

/*------------------------------------*/
// Сброс счетчика корзины товаров при клике на кнопку "Корзина"
const trashButton = document.querySelector('.trash-btn');
const trashCounter = document.querySelector('.trash span');

trashButton.addEventListener('click', () => {
    trashCounter.textContent = '0';
});
