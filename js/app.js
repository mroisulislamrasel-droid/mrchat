function switchTab(viewId, element) {
    // সব ভিউ হাইড করা
    let views = document.querySelectorAll('.view-section');
    views.forEach(view => view.classList.remove('active'));
    
    // সিলেক্ট করা ভিউ দেখানো
    document.getElementById(viewId).classList.add('active');

    // নেভিগেশন বাটন একটিভ করা
    let navBtns = document.querySelectorAll('.bottom-nav .nav-btn');
    navBtns.forEach(btn => btn.classList.remove('active'));
    
    if(element) {
        element.classList.add('active');
    }
}
