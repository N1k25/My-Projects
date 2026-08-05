const cartOrderItems = document.getElementById("cartOrderItems");
const totalSumm = document.getElementById("totalSumm");
const totalCount = document.getElementById("totalCount");
const clearCart = document.getElementById("clearCart");

function updateCart() {
  let total = 0;
  let count = 0;

  const items = document.querySelectorAll(".cart-item");

  items.forEach((item) => {
    const price = Number(item.dataset.price);

    const input = item.querySelector("input");

    let qty = parseInt(input.value);

    if (isNaN(qty) || qty < 1) {
      qty = 1;
      input.value = 1;
    }

    const itemSum = price * qty;

    item.querySelector(".item-total").textContent =
      itemSum.toLocaleString("ru-RU") + " руб.";

    total += itemSum;
    count += qty;
  });

  totalSumm.textContent = total.toLocaleString("ru-RU") + " руб.";

  let word = "товаров";

  if (count === 1) word = "товар";
  else if (count >= 2 && count <= 4) word = "товара";

  totalCount.textContent = `Итого ${count} ${word}`;
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("plus")) {
    const input = e.target.previousElementSibling;

    input.value++;

    updateCart();
  }

  if (e.target.classList.contains("minus")) {
    const input = e.target.nextElementSibling;

    if (input.value > 1) input.value--;

    updateCart();
  }

  if (e.target.classList.contains("remove")) {
    e.target.closest(".cart-item").remove();

    updateCart();
  }
});

document.addEventListener("input", function (e) {
  if (e.target.matches(".quantity input")) {
    updateCart();
  }
});

clearCart.addEventListener("click", function () {
  cartOrderItems.innerHTML = "";

  totalSumm.textContent = "0 руб.";

  totalCount.textContent = "Итого 0 товаров";
});

updateCart();


// Перехід на іншу сторінку
const checkoutBtn = document.getElementById("checkoutBtn");

checkoutBtn.addEventListener("click", function () {

    // Перевіряємо, чи є товари в кошику
    const items = document.querySelectorAll(".cart-item");

    if (items.length === 0) {
        // Кошик порожній
        window.location.href = "order-null.html";
    } else {
        // Є хоча б один товар
        window.location.href = "order.html";
    }

});
