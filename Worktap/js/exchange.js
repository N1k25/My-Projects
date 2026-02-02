// Изменение цвета иконок сервисов при клике
const userServiceIcons = document.querySelectorAll('.header__authorization-user--service-icon');
userServiceIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        icon.classList.toggle('active');
    });
});


// Выход из аккаунта с перенаправлением на главную страницу
document.getElementById('user-select').addEventListener('change', function () {
if (this.value === 'redirect') {
    window.location.href = 'index.html';
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
