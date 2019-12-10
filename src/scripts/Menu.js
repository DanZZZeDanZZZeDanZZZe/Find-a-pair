function createMenu(containerId, menuConf) {//menuId , length, idArr, textArr) {
    let container = getId(containerId);
    let menu = document.createElement('div');
    menu.className = 'menu';
    menu.id = menuConf.menuId;
    if (menuConf.textHeadArr) {
        menuConf.textHeadArr.forEach((element) => {
            let head = document.createElement('div');
            head.className = 'menu-head';
            head.innerText = element;
            menu.appendChild(head);
        })
    }
    for(let i = 0; i < menuConf.length; i++) {
        let menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.id = menuConf.idArr[i];
        menuItem.innerText = menuConf.textArr[i];
        menu.appendChild(menuItem);
    }
    container.appendChild(menu);
}
function addLevelHolder(containerId){
    let container = getId(containerId);
    let holder = document.createElement('div');
    holder.id = 'level-holder';
    container.appendChild(holder);
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
        textArr: ['Сыграть ещё', 'В главное меню'],
        textHeadArr: ['Поражение!']
    },
    levelMenu = {
        menuId: 'level-menu',
        length: gameLevelConfiguration.length,
        get idArr() {
            let arr = [];
            gameLevelConfiguration.forEach((el, index) => {
                arr.push(`level${index}`);
            });
            console.log(arr);
            return arr;
        },
        get textArr() {
            let arr =  [];
            gameLevelConfiguration.forEach((el) => {
                arr.push(el.name);
            });
            console.log(arr);
            return arr;
        }
    }
]
