// Warehouse vs Using View Switcher
function switchWarehouseTab(tab) {
    const warehouseView = document.getElementById('warehouse-view');
    const usingView = document.getElementById('using-view');
    const btnWarehouse = document.getElementById('tab-btn-warehouse');
    const btnUsing = document.getElementById('tab-btn-using');

    if (tab === 'using') {
        warehouseView.classList.add('d-none');
        usingView.classList.remove('d-none');
        btnUsing.classList.add('active');
        btnWarehouse.classList.remove('active');
    } else {
        usingView.classList.add('d-none');
        warehouseView.classList.remove('d-none');
        btnWarehouse.classList.add('active');
        btnUsing.classList.remove('active');
    }
}

// Category Filtering Function
function filterCategory(cat) {
    let tabs = document.querySelectorAll('.sub-nav-tabs .p-tab');
    tabs.forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');

    const emptyState = document.getElementById('empty-state');
    
    // Example: If Enter Effect has no items
    if (cat === 'enter_effect') {
        document.querySelector('.prop-grid').classList.add('d-none');
        emptyState.classList.remove('d-none');
    } else {
        document.querySelector('.prop-grid').classList.remove('d-none');
        emptyState.classList.add('d-none');
    }
}
