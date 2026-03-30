// Получаем элементы радиокнопок и ссылку на конкурсы
const userRoleCustomer = document.getElementById('role-customer');
const userRolePerformer = document.getElementById('role-performer');
const contestLink = document.getElementById('contest-link');

if (userRoleCustomer.checked) {
    contestLink.href = "./contest_freelancer.html";
};

userRolePerformer.addEventListener('change', () => {
    if (userRolePerformer.checked) {
        contestLink.href = "./contest_creator.html";
    }
});


// Получаем элементы для раскрывающегося блока с подробной информацией
const profileDetails = document.querySelector('.hero__profile-details');
const profileDetailsInfoTitle = document.getElementById('hero__profile-details-info-title');
    
profileDetails.addEventListener("toggle", () => {
    if (profileDetails.open) {
    profileDetailsInfoTitle.textContent = "Скрыть подробную информацию";
    } else {
    profileDetailsInfoTitle.textContent = "Показать подробную информацию";
    }
});