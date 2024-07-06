function toggleMenu() {
    var menu = document.querySelector('.menu');
    if (menu.style.display === 'flex' || menu.style.display === '') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
    }
}
