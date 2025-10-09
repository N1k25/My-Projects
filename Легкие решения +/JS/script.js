const buttonVideoPlay = document.getElementsByClassName('video-play__btn');
const videoFrame = document.getElementById('video__frame');

buttonVideoPlay[0].addEventListener('click', function() {
    buttonVideoPlay[0].classList.add('none');
    videoFrame.classList.remove('none');
});


const subscriptionInput = document.getElementById('subscription-input');
const formButton = document.getElementById('form-button');

formButton.addEventListener('click', function() {
    // Переменная для валидации (есть ли ошибка валидации)
    let validationResult = false;      
    
    if (subscriptionInput.value === "") {
        alert('Введите e-mail!');
        validationResult = true;
    }   
    if (subscriptionInput.value.length <= 6 || subscriptionInput.value.includes("@") === false || subscriptionInput.value.includes(".") === false) {
        alert("Введите правильную почту!");
        validationResult = true;
    }

    if (validationResult === true) {
        return;
    }  

    alert('Регистрация прошла успешно!');
    subscriptionInput.value = '';
});