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