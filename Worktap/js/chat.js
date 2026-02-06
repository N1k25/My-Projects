const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();


// Attach button
const attachButton = document.querySelector('.tabs__item-message--in-attach-btn');
const hideAttachImgContainers = document.querySelectorAll('.attach-hide');

attachButton.addEventListener('click', () => {
    hideAttachImgContainers.forEach((container) => {
        container.classList.toggle('attach-hide');
        if (!container.classList.contains('attach-hide')) {
            attachButton.textContent = 'Скрыть';
        } else {
            attachButton.textContent = 'Еще';
        }
    });
});


// Search input
document.querySelector('.tabs__nav-search').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Щоб не відправлялася форма
        this.value = '';        // Очищаємо input
    }
});


// Attach choice block
const attachTrigger = document.getElementById('attachTrigger');
const attachChoiceBlock = document.querySelector('.attach-choice-block');

attachTrigger.addEventListener('click', () => {
    attachChoiceBlock.classList.toggle('attach-block-hide');
});

// Убрать блок при нажатии на Esc
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        attachChoiceBlock.classList.add('attach-block-hide');
    }
});


const attachChoiceBlockIcons = document.querySelectorAll('.attach-choice-block-icon');

attachChoiceBlockIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    document.getElementById("fileInput").click();
  });
});

// Після вибору файлу — вставляємо ім'я в поле вводу
document.getElementById("fileInput").addEventListener("change", (event) => {
    const names = [...event.target.files].map(f => f.name).join(", ");

    attachChoiceBlock.classList.add('attach-block-hide');
    messageInputEl.value = names;
    messageInputEl.focus();
});


// Message send button
const messageInputEl = document.querySelector('.tabs__item-footer--message-input');
const messageSendButton = document.querySelector('.tabs__item-footer--message-send-btn');

function sendMessage() {
    const messageContainer = document.querySelector('.tabs__item-body');
    const message = messageInputEl.value.trim();
    
    const messageElement = document.createElement('div');
    messageElement.classList.add('tabs__item-message--out');
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);
    messageInputEl.value = '';
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

messageSendButton.addEventListener('click', () => {
    if (messageInputEl.value.trim() === '') {
        messageInputEl.value = '';
        return;
    }

    sendMessage();
});

// Send message on Enter key press
messageInputEl.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (messageInputEl.value.trim() === '') {
            messageInputEl.value = '';
            return;
        }

        sendMessage();
    }
});