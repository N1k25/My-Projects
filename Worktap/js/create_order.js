const inputElements = document.querySelectorAll('input[required], select[required]');
inputElements.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
            buttonNext.classList.remove('step__button--disabled');
        } else {
            buttonNext.classList.add('step__button--disabled');
        }
    });
});