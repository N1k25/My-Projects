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


// Next button functionality
const nextButton = document.querySelector('.tabs__item-btn');

nextButton.addEventListener('click', function() {
    const currentTabId = document.querySelector('.tabs__item.active').id;
    const nextTabId = currentTabId === 'tab_1' ? '#tab_2' : '#tab_1';
    const nextTabButton = document.querySelector(`.tabs__nav-btn[data-tab="${nextTabId}"]`);
    nextTabButton.click();
});