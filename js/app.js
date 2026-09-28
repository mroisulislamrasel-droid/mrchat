// Store Navigation Functions
function switchStoreMain(mainTabId) {
    let mainTabs = document.querySelectorAll('.s-main-tab');
    mainTabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');

    let pages = document.querySelectorAll('.store-page');
    pages.forEach(page => page.classList.remove('active'));

    document.getElementById(mainTabId).classList.add('active');
}

function switchStoreSub(subTabId) {
    let subTabs = document.querySelectorAll('.s-sub-tab');
    subTabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');

    let contents = document.querySelectorAll('.s-tab-content');
    contents.forEach(content => content.classList.remove('active'));

    document.getElementById(subTabId).classList.add('active');
}

function switchLoveSub(subTabId) {
    let subTabs = document.querySelectorAll('.ls-sub-tab');
    subTabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');

    let contents = document.querySelectorAll('.ls-tab-content');
    contents.forEach(content => content.classList.remove('active'));

    document.getElementById(subTabId).classList.add('active');
}
