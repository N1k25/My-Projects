// Обработчик события клика на кнопку "Предложить услугу"
const offerServiceButton = document.getElementById('offer-service-btn');
const personLink = document.querySelector('.order--freelancer__person-link');
const freelancerForm = document.querySelector('.order--freelancer__form');

offerServiceButton.addEventListener('click', () => {
    offerServiceButton.classList.add('none');
    personLink.classList.remove('none');
    freelancerForm.classList.remove('none');
});


// Обработчик события ввода в поля ввода формы предложения услуги
const offerInputs = freelancerForm.querySelectorAll('input[required], textarea[required]');
const offerFormButton = document.getElementById('offer-form-btn');

offerInputs.forEach(input => {
    input.addEventListener('input', () => {
      let allFilled = true;

      offerInputs.forEach(field => {
        if (!field.value.trim()) {
          allFilled = false;
        }
      });

      if (allFilled) {
        offerFormButton.classList.remove('step__button--disabled');
      } else {
        offerFormButton.classList.add('step__button--disabled');
      }
    });
});