class Game{
    constructor(currentLevel, totalCouples) {
        this._currentLevel = currentLevel;
        this._buff = null;
        this._destroyedCouples = null;
        this._time = null;
        this._totalCouples = totalCouples;
    };
    get currentLevel() {
        return this._currentLevel;
    };
    get destroyedCouples() {
        return this._destroyedCouples;
    };
    get totalCouples() {
        return this._totalCouples;
    };
    get buff() {
        return this._buff;
    };
    set buff(value) {
        this._buff = value
    };
    destroyCouple() {
        this._destroyedCouples++;
    }
}
let gameLevelConfiguration = [
    level1 = {
        id: 'level1',
        name: 'Начало пути',
        colorConf: [255, 255, 250, 0, 0, 0],
        time: 65,
        numberOfHealths: 3,
        levelWidth: 5,
        levelHeight: 8,
        coups: false,
        rotate: true
    },
    level2 = {
        name: 'Дискотека',
        id: 'level2',
        colorConf: [255, 255, 250, 0, 0, 0],
        time: 120,
        numberOfHealths: 4,
        levelWidth: 6,
        levelHeight: 9,
        coups: true,
        rotate: true
    },
    level3 = {
        id: 'level3',
        name: 'Босиком по болоту',
        colorConf: [50, 255, 50, 0, 0, 0],
        time: 300,
        numberOfHealths: 6,
        levelWidth: 6,
        levelHeight: 8,
        coups: false,
        rotate: false
    },
    level4 = {
        id: 'level4',
        name: 'Маленькая деревушка',
        colorConf: [150, 150, 150, 0, 0, 0],
        time: 200,
        numberOfHealths: 5,
        levelWidth: 6,
        levelHeight: 8,
        coups: true,
        rotate: false
    },
    level5 = {
        id: 'level5',
        name: 'Кисельные берега',
        colorConf: [250, 100, 250, 50, 70, 40],
        time: 250,
        numberOfHealths: 4,
        levelWidth: 8,
        levelHeight: 8,
        coups: false,
        rotate: true
    },
    level6 = {
        id: 'level6',
        name: 'Без права на ошибку',
        colorConf: [50, 50, 50, 10, 10, 10],
        time: 80,
        numberOfHealths: 1,
        levelWidth: 5,
        levelHeight: 5,
        coups: false,
        rotate: false
    },
    level7 = {
        id: 'level7',
        name: 'Водоворот',
        colorConf: [100, 100, 250, 30, 10, 120],
        time: 600,
        numberOfHealths: 5,
        levelWidth: 6,
        levelHeight: 6,
        coups: true,
        rotate: true
    },
    level8 = {
        id: 'level8',
        name: 'Конец пути',
        colorConf: [100, 100, 150, 30, 10, 120],
        time: 600,
        numberOfHealths: 5,
        levelWidth: 7,
        levelHeight: 7,
        coups: true,
        rotate: true
    }
]
function initializeTheGame(levelConfiguration) {
    let 
        gameTime = levelConfiguration.time,
        colorConf = levelConfiguration.colorConf,
        healths = levelConfiguration.numberOfHealths,
        id = levelConfiguration.id,
        height = levelConfiguration.levelHeight,
        width = levelConfiguration.levelWidth,
        totalCouples = height * width / 2;
        coups = levelConfiguration.coups, 
        timerBuff = 0; 
    game = new Game(id, totalCouples);
    formAContainerOfBlocks(height, width, "blocks-container", "partition", colorConf);
    let partitionsArr = document.getElementsByClassName('partition');
    if (levelConfiguration.rotate) {
        getId("blocks-container").style.animationPlayState = 'running';
    } else {
        getId("blocks-container").style.animationPlayState = 'paused';
    }
    healthIndcator.create('side-panel',healths)
    timer.create('timer-container', gameTime);
    gameStream = setInterval(()=>{
        timer.reduceTime(1);
        timerBuff++;
        if (healthIndcator.count === 0 || timer.time === 0) {
            removeChilds('side-panel');
            removeChilds('timer-container');
            removeChilds('blocks-container');
            swapId('blocks-container', 'intermediate-menu-container');
            createMenu('intermediate-menu-container', menuData[1]);
            clearInterval(gameStream);
        }
        if (timerBuff === 15 && coups) {
            timerBuff = 0;
            toTurnPartitions(partitionsArr);
        }
    },1000)
}

