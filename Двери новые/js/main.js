const selectionInputs = document.querySelectorAll('.selection-container input[type="radio"]');
const resetButton = document.querySelector('.reset-button');

resetButton.addEventListener('click', () => {
    // Скидання radio
    selectionInputs.forEach(input => {
        input.checked = false;
    });

    // Скидання range slider
    minValue = minPrice;
    maxValue = maxPrice;

    updateTrack();
});