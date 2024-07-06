function toggleMenu() {
    var menu = document.querySelector('.menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
    } else {
        menu.style.display = 'none';
    }
}

// Initialize the menu display state for mobile devices
document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector('.menu');
    menu.style.display = 'none';
});
