// Изменение цвета иконок сервисов при клике
const userServiceIcons = document.querySelectorAll('.header__authorization-user--service-icon');
userServiceIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        icon.classList.toggle('active');
    });
});


// Открытие/закрытие выпадающего списка в шапке при клике на иконку пользователя
const select = document.getElementById("uiSelect");
const trigger = select.querySelector(".ui-select-trigger");

trigger.addEventListener("click", () => {
  select.classList.toggle("open");
});

document.addEventListener("click", e => {
  if (!select.contains(e.target)) {
    select.classList.remove("open");
  }
});


// Изменение текста сортировки проектов в зависимости от выбора пользователя
document.getElementById('projects-sort-select').addEventListener('change', function () {
if (this.value === 'min-max-price') {
    document.querySelector('.projects__exchange-sort--select-label-start-price').textContent = 'Минимальная цена';
    document.querySelector('.projects__exchange-sort--select-label-end-price').textContent = 'Максимальная цена';
} else if (this.value === 'max-min-price') {
    document.querySelector('.projects__exchange-sort--select-label-start-price').textContent = 'Максимальная цена';
    document.querySelector('.projects__exchange-sort--select-label-end-price').textContent = 'Минимальная цена';
}
});
