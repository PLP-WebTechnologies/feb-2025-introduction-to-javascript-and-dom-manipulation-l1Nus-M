// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const changeableText = document.getElementById('changeable-text');

changeTextBtn.addEventListener('click', () => {
    changeableText.textContent = 'The text has been changed!';
});

// Modify CSS styles via JavaScript
const styleBox = document.getElementById('style-box');
const changeStyleBtn = document.getElementById('change-style-btn');

changeStyleBtn.addEventListener('click', () => {
    styleBox.style.backgroundColor = '#ffcc00';
    styleBox.style.color = '#333';
    styleBox.style.fontWeight = 'bold';
    styleBox.style.padding = '30px';
});

// Add or remove element when button is clicked
const toggleElementBtn = document.getElementById('toggle-element-btn');
const elementContainer = document.getElementById('element-container');
let isElementVisible = true;

toggleElementBtn.addEventListener('click', () => {
    if (isElementVisible) {
        elementContainer.innerHTML = '';
        toggleElementBtn.textContent = 'Add Element';
    } else {
        elementContainer.innerHTML = '<p>This is the new content that was added!</p>';
        toggleElementBtn.textContent = 'Remove Element';
    }
    isElementVisible = !isElementVisible;
}); 