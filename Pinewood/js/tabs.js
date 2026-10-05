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


// Next buttons functionality

const nextButtons = document.querySelectorAll('.tabs__item-btn');
const tabs = document.querySelectorAll('.tabs__item');

nextButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const currentTab = document.querySelector('.tabs__item.active');
        const currentIndex = Array.from(tabs).indexOf(currentTab);

        // Якщо це не остання вкладка — переходимо на наступну
        if (currentIndex < tabs.length - 1) {
            const nextTab = tabs[currentIndex + 1];
            const nextTabId = `#${nextTab.id}`;

            const nextTabButton = document.querySelector(
                `.tabs__nav-btn[data-tab="${nextTabId}"]`
            );

            if (nextTabButton) {
                nextTabButton.click();
            }
        }
    });
});