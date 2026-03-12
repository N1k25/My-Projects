const packagesCards = document.querySelectorAll('.packages-card');
const buttonNext = document.querySelector('.step__button--next');

// Для каждой карточки добавляем обработчик события ввода в поля ввода и проверяем, заполнены ли они 
packagesCards.forEach(card => {
  const inputs = card.querySelectorAll('input[required], textarea[required]');
  const button = card.querySelector('.add__option');

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      let allFilled = true;

      inputs.forEach(field => {
        if (!field.value.trim()) {
          allFilled = false;
        }
      });

      if (allFilled) {
        button.classList.remove('step__button--disabled');
      } else {
        button.classList.add('step__button--disabled');
      }
    });
  });

  button.addEventListener('click', () => {
    // inputs.forEach(field => {
    //     field.value = '';
    // });
    buttonNext.classList.remove('step__button--disabled');
    button.classList.add('step__button--disabled');
  });
});


// Добавляем обработчик события клика на кнопку удаления опции
const additionalOptionsForm = document.querySelector('.additional--options__form');
const removeOptionButton = document.querySelector('.remove__option');

additionalOptionsForm.addEventListener('input', (event) => {
    const target = event.target;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        if (target.value.trim() !== '') {
            removeOptionButton.classList.remove('step__button--disabled');
            removeOptionButton.addEventListener('click', () => {
                target.value = '';
                removeOptionButton.classList.add('step__button--disabled');
            });
        } else {
            removeOptionButton.classList.add('step__button--disabled');
        }
    }
});


const addNewOptionButton = document.querySelector('.add__new--option');

// Добавляем обработчик события клика на кнопку добавления новой опции
addNewOptionButton.addEventListener('click', () => {
    document.getElementById("modal-new--option").classList.add("open");
});

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modal-new--option").classList.remove("open")
    }
});

const addOptionButton = document.getElementById("new--option-btn");
const addOptionNameInput = document.querySelector(".new--option__name");

// Добавляем обработчик события ввода в поле имени новой опции
addOptionNameInput.addEventListener('input', () => {
    if (addOptionNameInput.value.trim() !== '') {
        addOptionButton.classList.remove('step__button--disabled');
    } else {
        addOptionButton.classList.add('step__button--disabled');
    }
});


function createNewOption() {
    const additionalOptionsFormFields = document.querySelector(".additional--options__form-fields");
   
    const newOption = document.createElement("div");
    newOption.innerHTML = `
        <div class="field">
            <label for="new-option-name">${addOptionNameInput.value.trim()}</label>
            <input type="text" name="new-option-name" required placeholder="placeholder">
        </div>
    `;
    additionalOptionsFormFields.appendChild(newOption);
    
    addOptionNameInput.value = '';
    addOptionButton.classList.add('step__button--disabled');
    document.getElementById("modal-new--option").classList.remove("open");
};

// Закрыть модальное окно при нажатии на кнопку "Добавить опцию"
addOptionButton.addEventListener("click", createNewOption);

// Закрыть модальное окно при нажатии на Enter
window.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        if (addOptionNameInput.value.trim() !== '') {
            createNewOption();
        } else {
            return;
        }
    }
});
