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
        name: 'Босиком по болоту'
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

