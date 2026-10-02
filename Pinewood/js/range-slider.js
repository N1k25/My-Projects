
const range = document.querySelector(".range-slider__range");
const value = document.querySelector(".range-slider__value");

// Встановити початкове значення
value.textContent = range.value;

// Оновлювати значення при зміні повзунка
range.addEventListener("input", () => {
    value.textContent = range.value;
});


// Функція для оновлення прогресу
function updateRange() {
  const min = Number(range.min);
  const max = Number(range.max);
  const value = Number(range.value);

  const percent = ((value - min) / (max - min)) * 100;

  range.style.setProperty('--progress', `${percent}%`);
}

range.addEventListener('input', updateRange);

updateRange();
