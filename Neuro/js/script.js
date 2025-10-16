let counter = 0;

const menuShopIcon = document.querySelector(".menu-shop-icon");
const menuShopCounter = document.querySelector(".menu-shop-counter");

menuShopIcon.addEventListener("click", function() {
    menuShopCounter.textContent = '0';
    counter = 0;
});


const shopButtons = document.querySelectorAll('.shop-btn');

shopButtons.forEach(button => {
  button.addEventListener('click', () => {
    counter ++;
    menuShopCounter.textContent = counter;
  });
});


const cookiesBlock = document.querySelector('.cookies-block');
const cookiesButton = document.querySelector('.cookies-btn');

cookiesButton.addEventListener('click', function() {
    cookiesBlock.classList.add('none');
});
