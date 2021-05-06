const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeVisible() {
    tabContentItems.forEach(item => item.classList.remove('visible'));
}


function selectItem(e) {
    removeBorder();
    removeVisible();

    // Add border to current tab
    this.classList.add('tab-border');

    // Show content items for the current tab
    const currentTabContentItem = document.querySelector(`#${this.id}-content`);
    currentTabContentItem.classList.add('visible');

}

tabItems.forEach(item => item.addEventListener('click', selectItem));