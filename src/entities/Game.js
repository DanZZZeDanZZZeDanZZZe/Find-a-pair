export class Game {
  constructor(currentLevel, totalCouples) {
    this._currentLevel = currentLevel;
    this._buff = null;
    this._destroyedCouples = null;
    this._time = null;
    this._totalCouples = totalCouples;
  }
  get currentLevel() {
    return this._currentLevel;
  }
  get destroyedCouples() {
    return this._destroyedCouples;
  }
  get totalCouples() {
    return this._totalCouples;
  }
  get buff() {
    return this._buff;
  }
  set buff(value) {
    this._buff = value;
  }
  destroyCouple() {
    this._destroyedCouples++;
  }
}
