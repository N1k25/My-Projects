
// app.js
let cartCount = 0;
const cartCountElement = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Initialize cart count from localStorage if available
if (localStorage.getItem('cartCount')) {
  cartCount = parseInt(localStorage.getItem('cartCount'));
}

updateCartCount(); // Display initial count

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    updateCartCount();
    localStorage.setItem('cartCount', cartCount); // Store updated count
  });
});

const countReset = document.getElementById('count-reset');

if (countReset) {
  countReset.addEventListener('click', () => {
    cartCount = 0;
    updateCartCount();
    localStorage.setItem('cartCount', cartCount);
  })
}

function updateCartCount() {
  cartCountElement.textContent = cartCount;
}
window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('blur', 'line');
  } else {
    header.classList.remove('blur', 'line');
  }
});


