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

// ৩. ভয়েস রুম অন/অফ
function openVoiceRoom() {
    document.getElementById('voice-room-overlay').classList.add('active');
}

function closeVoiceRoom() {
    document.getElementById('voice-room-overlay').classList.remove('active');
    closeModal('exit-confirm-modal');
}

function minimizeRoom() {
    closeModal('exit-confirm-modal');
    document.getElementById('voice-room-overlay').classList.remove('active');
    alert("Room Minimized");
}

// ৪. ডাইনামিক মডাল / পপআপ হ্যান্ডলিং
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}
