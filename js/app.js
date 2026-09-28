// Function to Switch Main Bottom Navigation Tabs
function switchMainTab(pageId, element) {
    document.querySelectorAll('.page-sec').forEach(page => page.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    
    document.getElementById(pageId).classList.add('active');
    element.classList.add('active');
}

// Open Any Feature Modal Screen
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
}

// Close Any Feature Modal Screen
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}

// Switch Prop Warehouse Tabs (Warehouse vs Using)
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

// Filter Prop Category Items
function filterCategory(cat, element) {
    document.querySelectorAll('.sub-nav-tabs .p-tab').forEach(t => t.classList.remove('active'));
    if (element) element.classList.add('active');
}
