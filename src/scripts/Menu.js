function createMenu(containerId, menuConf) {//menuId , length, idArr, textArr) {
    let container = getId(containerId);
    let menu = document.createElement('div');
    menu.className = 'menu';
    menu.id = menuConf.menuId;
    for(let i = 0; i < menuConf.length; i++) {
        let menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.id = menuConf.idArr[i];
        menuItem.innerText = menuConf.textArr[i];
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
    },
    intermediateMenu = {
        menuId: 'intermediate-menu',
        length: 2,
        idArr: ['intermediate-menu-play', 'intermediate-menu-exit'],
        textArr: ['Сыграть ещё', 'В главное меню']
    }
]
