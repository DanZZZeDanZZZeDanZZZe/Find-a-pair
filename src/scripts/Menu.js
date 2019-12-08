function createMenu(containerId, menuId , length, idArr, textArr) {
    let container = getId(containerId);
    let menu = document.createElement('div');
    menu.className = 'menu';
    menu.id = menuId;
    for(let i = 0; i < length; i++) {
        let menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.id = idArr[i];
        menuItem.innerText = textArr[i]
        menu.appendChild(menuItem);
    }
    container.appendChild(menu);
}
menuData = [
    mainMenu = {
        menuId: 'main-menu',
        length: 4,
        idArr: ['main-menu-play', 'main-menu-highscores', 'main-menu-reference', 'main-menu-exit'],
        textArr: ['Играть', 'Рекорды', 'Справка', 'Выход'],
    }
]
