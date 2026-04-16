const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
const stockTabsBtn   = document.querySelectorAll(".stock--tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");
const stockTabsItems = document.querySelectorAll(".stock-tabs__item");

tabsBtn.forEach(onTabClick);
stockTabsBtn.forEach(onStockTabClick);

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

function onStockTabClick(item) {
    item.addEventListener("click", function() {
        let stockCurrentBtn = item;
        let stockTabId = stockCurrentBtn.getAttribute("stock-data-tab");
        let stockCurrentTab = document.querySelector(stockTabId);

        if( ! stockCurrentBtn.classList.contains('active') ) {
            stockTabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
            
            stockTabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            stockCurrentBtn.classList.add('active');
            stockCurrentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();
document.querySelector('.stock--tabs__nav-btn').click();
