// Language Selection Logic
function selectLanguage(element) {
    document.querySelectorAll('.lang-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
}

function saveLanguage() {
    alert("Language preference saved!");
    closeModal('language-modal');
}

// Clear Cache Action
function clearCache() {
    document.getElementById('cache-size').innerText = '0MB';
    alert("Cache cleared successfully!");
}

// Log Upload Action
function uploadLog() {
    alert("System log uploaded successfully!");
}

// Feedback Form Logic
function selectFeedbackType(element) {
    document.querySelectorAll('.fb-type-btn').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
}

function submitFeedback() {
    alert("Thank you for your feedback!");
    closeModal('feedback-modal');
}
