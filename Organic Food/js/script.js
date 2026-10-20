const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
    if (searchInput.value.trim() === '') return;

    searchInput.value = '';
});


const cartButton = document.querySelector('.cart__btn');
const cartFullMarker = document.querySelector('.cart--full');

cartButton.addEventListener('click', () => {
    cartFullMarker.classList.remove('active');
});


const heroButton = document.querySelector('.hero__btn');

heroButton.addEventListener('click', () => {
    cartFullMarker.classList.add('active');
});
