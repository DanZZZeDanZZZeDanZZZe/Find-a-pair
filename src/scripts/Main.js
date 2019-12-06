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
let game = new Game(null);
window.onload = () => {
    console.log('hy');
    formAContainerOfBlocks(10, 8, "blocks-container", "partition");
}
