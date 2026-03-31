// Загрузка документов
const uploadBtn = document.querySelector('.gallery__documents-form--input--field-download-btn');
const fileInput = document.querySelector('.gallery__documents-file-input');
const fileList = document.querySelector('.gallery__documents-form--list');

uploadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fileInput.click();
});

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];

    if (!file) return;

    const li = document.createElement('li');
    li.className = 'gallery__documents-form--list-item';
    li.innerHTML = `
        <div class="gallery__documents-form--list-item-file--name">${file.name}</div>
        <div class="gallery__documents-form--list-item-file-service">
            <button type="button" class="gallery__documents-form--list-item-file-service-btn">
                <img src="../img/create_work/page_down.svg" class="gallery__documents-form--list-item-file-service-icon">
            </button>
            <div class="gallery__documents-form--list-item-file-status file-status__not--completed">
                <img src="../img/create_work/done.svg" alt="Загруженный файл" class="gallery__documents-form--list-item-file-status-icon">
            </div>
        </div>
    `;

    fileList.appendChild(li);

    fileInput.value = '';

    buttonNext.classList.remove('step__button--disabled');
});


// Добавление обработчика события клика на список документов (для переключения статуса загруженного файла)
fileList.addEventListener('click', function (e) {
	const button = e.target.closest('.gallery__documents-form--list-item-file-service-btn');

	if (!button) return;

	const documentListItem = button.closest('.gallery__documents-form--list-item');
	const documentStatus = documentListItem.querySelector('.gallery__documents-form--list-item-file-status');

	documentStatus.classList.toggle('file-status__not--completed');
});


// Добавление новой фотографии
const addNewPhotoButton = document.getElementById('add__new--photo');
addNewPhotoButton.addEventListener('click', () => {
    buttonNext.classList.remove('step__button--disabled');
});


// Ссылка на YouTube
const linkYoutubeInput = document.getElementById('link_youtube_input');
linkYoutubeInput.addEventListener('input', () => {
    if (linkYoutubeInput.value.trim() !== '') {
        buttonNext.classList.remove('step__button--disabled');
    } else {
        buttonNext.classList.add('step__button--disabled');
    }
});