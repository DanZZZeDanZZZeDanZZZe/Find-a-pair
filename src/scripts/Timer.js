let timer = {
    _startTime: null,
    _time: null,
    timerContainer: null,
    create: (elementId, s) => {
        let element = document.getElementById(elementId)
        timerContainer = document.createElement('div');
        timerContainer.className = 'timer-container'; 
        timer.time = s;
        timer.startTime = s;
        element.appendChild(timerContainer)
    },
    convert: () => {
        let s = _time % 60;
        let m = (_time - s) / 60;
        let sText, mText;
        if (s >= 10) {
            sText  = `${s}`
        } else {
            sText  = `0${s}`
        }
        if (m >= 10) {
            mText  = `${m}`
        } else {
            mText  = `0${m}`
        }
        timerContainer.innerText = mText+':'+sText;
    },
    set startTime(value) { 
        _startTime = value
    },
    set time(value) { 
        _time = value
        this.convert();
    },
    get time() {
        return _time;
    },
    get startTime() {
        return _startTime;
    },
    get elapsedTime() {
        return timer.startTime - timer.time;
    },
    reduceTime(s) {
        if (s > _time) {
            this.clearTime();
        } else {
            _time = _time - s; 
            this.convert();
        }
    },
    clearTime() {
        _time = 0;
        _startTime = 0;
    }
}


