document.querySelectorAll(".card").forEach((card) => {
  const price = card.querySelector(".price-value");
  const minus = card.querySelector(".minus");
  const plus = card.querySelector(".plus");
  const input = card.querySelector("input");

  const cart = card.querySelector(".cart-btn");

  const counter = card.querySelector(".counter");

  const inCart = card.querySelector(".in-cart");
  const inCartList = card.querySelector(".in-cart-list");

  plus.onclick = () => {
    input.value = Number(input.value) + 1;
  };

  minus.onclick = () => {
    if (Number(input.value) > 1) {
      input.value = Number(input.value) - 1;
    }
  };

  cart.onclick = () => {
    cart.classList.toggle("active");

    if (!card.classList.contains("list")) {
      if (cart.classList.contains("active")) {
        counter.style.display = "none";

        inCart.style.display = "flex";
      } else {
        counter.style.display = "flex";

        inCart.style.display = "none";
      }
    } else {
      inCart.style.display = "none";

      if (cart.classList.contains("active")) {
        inCartList.textContent = "В КОРЗИНЕ";
        inCartList.style.color = "#fff";
        inCartList.style.background = "#C53720";
      } else {
        inCartList.textContent = "В КОРЗИНУ";
        inCartList.style.color = "#C53720";
        inCartList.style.background = "transparent";
      }
    }
  };

  cart.addEventListener('click', () => {
    if (cart.classList.contains('active')) {
      addToCart('MAGNUM 60Ah', parseInt(price.textContent * Number(input.value)));
    }
  });
});

