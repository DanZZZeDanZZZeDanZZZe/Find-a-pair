class Game{
    constructor(buff) {
        this._buff = buff;
    };
    get buff() {
        return this._buff;
    };
    set buff(value) {
        this._buff = value
    };
}
let gameLevelConfiguration = [
    level1 = {
        name: 'Начало пути',
        colorConf: [250, 250, 250, 20, 20, 20],
        time: 10,
        numberOfHealths: 3
    },
    level2 = {
        name: 'Пробиваясь сквозь траву'
    },
    level3 = {
        name: 'Босиком по болоту'
    },
    level4 = {
        name: 'Босиком по болоту'
    }
]
function initializeTheGame(levelConfiguration) {
    let 
        gameTime = levelConfiguration.time,
        colorConf = levelConfiguration.colorConf,
        healths = levelConfiguration.numberOfHealths;
    game = new Game(null);
    formAContainerOfBlocks(10, 8, "blocks-container", "partition", colorConf);
    healthIndcator.create('side-panel',healths)
    timer.create('timer-container', gameTime);
    let gameStream = setInterval(()=>{
        timer.reduceTime(1);
        if (healthIndcator.count === 0 || timer.time === 0) {
            removeChilds('side-panel');
            removeChilds('timer-container');
            removeChilds('blocks-container');
            swapId('blocks-container', 'intermediate-menu-container');
            createMenu('intermediate-menu-container', menuData[1]);
            clearInterval(gameStream);
        }
    },1000)
}

