export let timer = {
  _startTime: null,
  _time: null,
  timerContainer: null,
  create(elementId, s) {
    let element = document.getElementById(elementId);
    this.timerContainer = document.createElement('div');
    this.timerContainer.className = 'timer-container';
    timer.time = s;
    timer.startTime = s;
    element.appendChild(this.timerContainer);
  },
  convert() {
    let s = this._time % 60;
    let m = (this._time - s) / 60;
    let sText, mText;
    if (s >= 10) {
      sText = `${s}`;
    } else {
      sText = `0${s}`;
    }
    if (m >= 10) {
      mText = `${m}`;
    } else {
      mText = `0${m}`;
    }
    this.timerContainer.innerText = mText + ':' + sText;
  },
  set startTime(value) {
    this._startTime = value;
  },
  set time(value) {
    this._time = value;
    this.convert();
  },
  get time() {
    return this._time;
  },
  get startTime() {
    return this._startTime;
  },
  get elapsedTime() {
    return timer.startTime - timer.time;
  },
  reduceTime(s) {
    if (s > this._time) {
      this.clearTime();
    } else {
      this._time = this._time - s;
      this.convert();
    }
  },
  clearTime() {
    this._time = 0;
    this._startTime = 0;
  },
};
