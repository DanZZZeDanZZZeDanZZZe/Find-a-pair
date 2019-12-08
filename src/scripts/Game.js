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
        time: 120,
        numberOfHealths: 3
    }
]
function initializeTheGame(levelConfiguration){
    let 
        gameTime = levelConfiguration.time,
        colorConf = levelConfiguration.colorConf,
        healths = levelConfiguration.numberOfHealths;
    game = new Game(null);
    formAContainerOfBlocks(10, 8, "blocks-container", "partition", colorConf);
    healthIndcator.create('side-panel',healths)
    timer.create('timer-container', gameTime);
    setInterval(()=>{
        timer.reduceTime(1);
    },1000)
}

