// Prop Warehouse Filter Function
function filterProps(type) {
    let tabs = document.querySelectorAll('.p-tab');
    tabs.forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');

    // Filter logic can be extended here
}

// Toggle using list view
function toggleUsingList() {
    alert("Displaying currently active items.");
}
