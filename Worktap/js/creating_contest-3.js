const otherCheckbox = document.getElementById('other-checkbox');
const socialNepworkInput = document.getElementById('social-network-input');

otherCheckbox.addEventListener('change', function () {
if (this.checked) {
    socialNepworkInput.style.display = 'block';
} else {
    socialNepworkInput.style.display = 'none';
}
});


const otherPurposeCheckbox = document.getElementById('other-purpose-checkbox');
const purposeCreatingPageInput = document.getElementById('purpose-creating-page-input');

otherPurposeCheckbox.addEventListener('change', function () {
if (this.checked) {
    purposeCreatingPageInput.style.display = 'block';
} else {
    purposeCreatingPageInput.style.display = 'none';
}
});


const otherPreferredStyleCheckbox = document.getElementById('other-preferred-style-checkbox');
const preferredStylePageInput = document.getElementById('preferred-style-page-input');

otherPreferredStyleCheckbox.addEventListener('change', function () {
if (this.checked) {
    preferredStylePageInput.style.display = 'block';
} else {
    preferredStylePageInput.style.display = 'none';
}
});


// Валидация на третьем шаге
const permissionCheckbox = document.querySelector('#permission-checkbox');

permissionCheckbox.addEventListener('change', function () {
    if (this.checked) {
        buttonNext.classList.remove('step__button--disabled');
    } else {
        buttonNext.classList.add('step__button--disabled');
    }
});
