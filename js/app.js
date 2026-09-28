// ১. মেইন নেভিগেশন সুইচিং
function switchTab(viewId, element) {
    let views = document.querySelectorAll('.view-section');
    views.forEach(view => view.classList.remove('active'));
    
    document.getElementById(viewId).classList.add('active');

    let navBtns = document.querySelectorAll('.bottom-nav .nav-btn');
    navBtns.forEach(btn => btn.classList.remove('active'));
    
    if(element) {
        element.classList.add('active');
    }
}

// ২. প্রোফাইল সাব-ট্যাব (Profile / Intimacy)
function switchProfileTab(tabId) {
    let pTabs = document.querySelectorAll('.p-tab');
    pTabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');

    let pContents = document.querySelectorAll('.p-content');
    pContents.forEach(content => content.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
}

// ৩. ভয়েস রুম স্ক্রিন অন/অফ
function openVoiceRoom() {
    document.getElementById('voice-room-overlay').classList.add('active');
}

function closeVoiceRoom() {
    document.getElementById('voice-room-overlay').classList.remove('active');
}
