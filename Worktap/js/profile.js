const profileDetails = document.querySelector('.hero__profile-details');
const profileDetailsInfoTitle = document.getElementById('hero__profile-details-info-title');
    
profileDetails.addEventListener("toggle", () => {
    if (profileDetails.open) {
    profileDetailsInfoTitle.textContent = "Скрыть подробную информацию";
    } else {
    profileDetailsInfoTitle.textContent = "Показать подробную информацию";
    }
});
