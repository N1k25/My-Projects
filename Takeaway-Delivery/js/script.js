let counter = document.getElementById('counter');

const orderButtons = document.querySelectorAll('.order-btn');
orderButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        let currentCount = parseInt(counter.textContent);
        counter.textContent = currentCount + 1;
    });
});

let shoppingCart = document.querySelector('.shopping-cart');
shoppingCart.addEventListener('click', function() {
    counter.textContent = '0';
});