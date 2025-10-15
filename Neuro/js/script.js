let counter = 0;

const menuShopIcon = document.querySelector(".menu-shop-icon");
const menuShopCounter = document.querySelector(".menu-shop-counter");

menuShopIcon.addEventListener("click", function() {
    menuShopCounter.textContent = '0';
    counter = 0;
});
  