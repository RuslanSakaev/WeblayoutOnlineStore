// Скрипт для скрытия меню при клике вне его области
document.addEventListener('click', function (event) {
    var menu = document.querySelector('.menu');
    var menuButton = document.getElementById('menu-button');
    
    if (menu.style.display === 'block' && event.target !== menu && event.target !== menuButton) {
        menu.style.display = 'none';
    }
});
