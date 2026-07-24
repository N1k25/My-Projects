const products = [
  {
    id: 1,
    name: "Гелевый аккумулятор OPTIMA YellowTop",
    price: 6200,
  },
  {
    id: 2,
    name: "Автомобильний аккумулятор Bosch S5",
    price: 4300,
  },
  {
    id: 3,
    name: "Аккумулятор Varta Silver Dynamic",
    price: 4100,
  },
  {
    id: 4,
    name: "AGM аккумулятор Exide EK700",
    price: 5900,
  },
  {
    id: 5,
    name: "Зарядное устройство CTEK MXS 5.0",
    price: 3900,
  },
  {
    id: 6,
    name: "Пусковое устройство Baseus",
    price: 5100,
  },
  {
    id: 7,
    name: "Инвертор 1000W",
    price: 2500,
  },
  {
    id: 8,
    name: "Гелевый аккумулятор Yuasa",
    price: 4700,
  },
  {
    id: 9,
    name: "Гелиевый Аккумулятор OPTIMA",
    price: 4800,
  },
  {
    id: 10,
    name: "Аккумулятор Bars",
    price: 5800,
  },
  {
    id: 11,
    name: "Аккумулятор MAGNUM 60Ah",
    price: 2900,
  },
  {
    id: 12,
    name: "Аккумулятор MAGNUM 75Ah",
    price: 3000,
  },
  {
    id: 13,
    name: "Аккумулятор AFA",
    price: 3250,
  },
  {
    id: 14,
    name: "Аккумулятор EDCON",
    price: 3350,
  },
  {
    id: 15,
    name: "Масло моторное North Sea Lubricants Wave power EXCELLENCE 5W-40",
    price: 2190,
  },
  {
    id: 16,
    name: "ELF 5w-30 evolution 900 SXR 5л Масло моторное",
    price: 1200,
  },
  {
    id: 17,
    name: "Масло моторное Mobil Super 2000 x1 10W-40",
    price: 1218,
  },
  {
    id: 18,
    name: "Омыватель зимний -15°С 4л",
    price: 165,
  },
  {
    id: 19,
    name: "Полироль восковой для кузова K2 Color Max черный 250мл",
    price: 100,
  },
  {
    id: 20,
    name: "Очиститель салона (650 мл) MANNOL 9931",
    price: 190,
  },
];

const searchInput = document.querySelector('.search-popover-input');
const results = document.getElementById("searchResults");

let filteredProducts = [];
let currentIndex = -1;

searchInput.addEventListener("input", function () {
  const text = this.value.trim().toLowerCase();

  if (!text) {
    results.style.display = "none";
    results.innerHTML = "";
    return;
  }

  filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(text),
  );

  renderResults();
});

function renderResults() {
  currentIndex = -1;

  results.innerHTML = "";

  if (!filteredProducts.length) {
    results.innerHTML = "<li>Ничего не найдено</li>";

    results.style.display = "block";

    return;
  }

  filteredProducts.forEach((product, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
            <strong>${product.name}</strong>
        `;

    li.addEventListener("click", () => {
      searchInput.value = product.name;

      results.style.display = "none";
    });

    results.appendChild(li);
  });

  results.style.display = "block";
}


// Очищать поле ввода при нажатии на кнопку "НАЙТИ"
const searchButton = document.querySelector('.search-popover-btn');

searchButton.addEventListener('click', () => {
    searchInput.value = '';
});


// Очищать поле ввода и список найденных товаров при нажатии на кнопку "X"
const searchCloseButton = document.getElementById('searchCloseBtn');

searchCloseButton.addEventListener('click', () => {
    searchInput.value = '';
    results.innerHTML = "";
    results.style.display = "none";
});