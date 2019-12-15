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
        colorConf: [250, 250, 250, 20, 20, 20],
        time: 65,
        numberOfHealths: 3,
        levelWidth: 5,
        levelHeight: 8
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
        healths = levelConfiguration.numberOfHealths,
        id = levelConfiguration.id,
        height = levelConfiguration.levelHeight,
        width = levelConfiguration.levelWidth,
        totalCouples = height * width / 2;
    game = new Game(id, totalCouples);
    formAContainerOfBlocks(height, width, "blocks-container", "partition", colorConf);
    healthIndcator.create('side-panel',healths)
    timer.create('timer-container', gameTime);
    gameStream = setInterval(()=>{
        timer.reduceTime(1);
        if (healthIndcator.count === 0 || timer.time === 0) {
            console.log('a');
            removeChilds('side-panel');
            removeChilds('timer-container');
            removeChilds('blocks-container');
            swapId('blocks-container', 'intermediate-menu-container');
            createMenu('intermediate-menu-container', menuData[1]);
            clearInterval(gameStream);
        }
    },1000)
}

