const sortButtons = document.querySelectorAll(".sort-btn");
const viewButtons = document.querySelectorAll(".view-btn");

let currentSort = {
  field: "price",
  order: "desc",
};

sortButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const field = btn.dataset.sort;

    if (currentSort.field === field) {
      currentSort.order = currentSort.order === "asc" ? "desc" : "asc";
    } else {
      currentSort.field = field;
      currentSort.order = "asc";

      sortButtons.forEach((b) => b.classList.remove("active"));

      btn.classList.add("active");
    }

    btn.dataset.order = currentSort.order;

    sortButtons.forEach((b) => {
      if (b !== btn) {
        b.dataset.order = "asc";
      }
    });

    console.log(currentSort);

    // Тут викликаєте свою функцію:
    // sortProducts(currentSort.field, currentSort.order);
  });
});

viewButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    viewButtons.forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");

    const view = btn.dataset.view;

    console.log(view);

    // document.querySelector('.products')
    //     .className = `products ${view}`;

    if (view === "grid") {
      document.querySelector(".product-cards").classList.remove("list");
      document.querySelectorAll(".card").forEach((card) => {
        card.classList.remove("list");
      });
    } else if (view === "list") {
      document.querySelector(".product-cards").classList.add("list");
      document.querySelectorAll(".card").forEach((card) => {
        card.classList.add("list");
      });
    }
  });
});
