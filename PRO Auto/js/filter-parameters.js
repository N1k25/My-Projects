const min = 2199;
const max = 9390;

const initialMin = 3064;
const initialMax = 7524;

const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");

const minInput = document.getElementById("minInput");
const maxInput = document.getElementById("maxInput");

const left = document.querySelector(".left");
const middle = document.querySelector(".middle");
const right = document.querySelector(".right");

const rangeMin = document.getElementById("rangeMin");
const rangeMax = document.getElementById("rangeMax");

minRange.min = min;
minRange.max = max;

maxRange.min = min;
maxRange.max = max;

minRange.value = initialMin;
maxRange.value = initialMax;

rangeMin.innerHTML = min;
rangeMax.innerHTML = max;

function updateSlider() {
  let minVal = parseInt(minRange.value);
  let maxVal = parseInt(maxRange.value);

  if (minVal > maxVal - 1) {
    minVal = maxVal - 1;
    minRange.value = minVal;
  }

  if (maxVal < minVal + 1) {
    maxVal = minVal + 1;
    maxRange.value = maxVal;
  }

  minInput.value = minVal;
  maxInput.value = maxVal;

  const leftPercent = ((minVal - min) / (max - min)) * 100;
  const rightPercent = ((maxVal - min) / (max - min)) * 100;

  left.style.width = leftPercent + "%";

  middle.style.width = rightPercent - leftPercent + "%";

  right.style.width = 100 - rightPercent + "%";
}

updateSlider();

minRange.addEventListener("input", updateSlider);
maxRange.addEventListener("input", updateSlider);

minInput.addEventListener("change", () => {
  let value = parseInt(minInput.value) || min;

  if (value < min) value = min;
  if (value >= parseInt(maxRange.value)) value = parseInt(maxRange.value) - 1;

  minRange.value = value;

  updateSlider();
});

maxInput.addEventListener("change", () => {
  let value = parseInt(maxInput.value) || max;

  if (value > max) value = max;
  if (value <= parseInt(minRange.value)) value = parseInt(minRange.value) + 1;

  maxRange.value = value;

  updateSlider();
});



document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");

    header.nextElementSibling.classList.toggle("hide");
  });
});



const filterResetButton = document.getElementById('filter-reset');

filterResetButton.addEventListener("click", function() {
    // Скинути range
    minRange.value = initialMin;
    maxRange.value = initialMax;
    updateSlider();

    // Зняти всі чекбокси
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false;
  });
});
