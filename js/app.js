
// ১. সিমুলেটেড লগইন ফংশন
function loginWith(provider) {
    console.log("Logging in via: " + provider);
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('app-screen').classList.add('active');
}

// ২. হোম পেজ ও র‍্যাঙ্কিং পেজের মধ্যে সুইচিং
function openRanking(category) {
    document.getElementById('home-view').classList.remove('active');
    document.getElementById('ranking-view').classList.add('active');
    loadRankCategory(category);
}

function showHome() {
    document.getElementById('ranking-view').classList.remove('active');
    document.getElementById('home-view').classList.add('active');
}

// ৩. হোম ট্যাব সুইচিং (Following, Popular, Recent)
function switchHomeTab(tabName) {
    let tabs = document.querySelectorAll('.top-nav-tabs .tab-item');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
}

// ৪. র‍্যাঙ্কিং ক্যাটাগরি সুইচিং (Contribution, Charm, Room)
function loadRankCategory(cat) {
    let rTabs = document.querySelectorAll('.ranking-main-tabs .r-tab');
    rTabs.forEach(tab => tab.classList.remove('active'));
    
    if(cat === 'contribution') document.getElementById('tab-contrib').classList.add('active');
    if(cat === 'charm') document.getElementById('tab-charm').classList.add('active');
    if(cat === 'room') document.getElementById('tab-room').classList.add('active');
}
