const buttonVideoPlay = document.getElementById('video-play__btn');

buttonVideoPlay.addEventListener('click', function() {
    alert('Воспроизведение видео!');
});


const subscriptionInput = document.getElementById('subscription-input');
const formButton = document.getElementById('form-button');

formButton.addEventListener('click', function() {
    if (subscriptionInput.value !== '') {
        alert('Форма отправлена!');
    } else {
        alert('Введите e-mail!');
    }
});