let counter = document.getElementById('counter');

let shoppingCart = document.querySelector('.shopping-cart');
shoppingCart.addEventListener('click', function() {
    counter.textContent = '0';
});