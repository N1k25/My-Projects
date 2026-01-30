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

