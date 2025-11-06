document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    const winTop = window.scrollY || document.documentElement.scrollTop;
    if (winTop >= 30) {
      document.body.classList.add("sticky-header");
    } else {
      document.body.classList.remove("sticky-header");
    }
  });
});


const range = document.getElementById('range');
const tooltip = document.getElementById('range-tooltip');

function updateRange() {
  const value = range.value;
  const min = range.min;
  const max = range.max;
  const percent = (value - min) / (max - min);

  // Оновлюємо позицію tooltip
  tooltip.textContent = `$${value}`;
  const offset = percent * range.offsetWidth;
  tooltip.style.left = `${offset}px`;

  // Оновлюємо градієнт фону
  range.style.background = `linear-gradient(to right, #85FED6 ${percent * 100}%, #F6F6F6 ${percent * 100}%)`;
}

range.addEventListener('input', updateRange);
updateRange();


document.querySelectorAll('.plan-list-item').forEach(item => {
  const includes = item.querySelector('.plan-list-item-includes');
  const text = item.querySelector('.plan-list-item-text');
  
  if (includes && includes.textContent.trim().toLowerCase().includes('no')) {
    text.style.opacity = '0.5';
    text.style.textDecoration = "line-through";
    includes.style.opacity = '0.5';
  }
});

let buyPlan = document.querySelectorAll('.plan-card-btn');
buyPlan.forEach(button => {
  button.addEventListener('click', () => {
    alert('Дякуємо за покупку!');
  });
});
