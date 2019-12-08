let healthIndcator = {
    _count: null,
    set count(value) { 
        _count = value
    },
    get count() {
        return _count;
    },
    create: (elementId, count) => {
        this._count = count;
        let element = document.getElementById(elementId)
        healthContainer = document.createElement('div');
        healthContainer.id = 'health-сontainer'; 
        for(let i = 0; i < count; i++) {
            let healthImg = document.createElement('img');
            healthImg.setAttribute('src','src/image/heart.svg');
            healthImg.className = 'heart';
            healthContainer.appendChild(healthImg);
        }
        element.appendChild(healthContainer);
    },
    clear: () => {
        this._count--;
        let elem = getId('health-сontainer');
        elem.lastChild.style.animationPlayState = 'running';
        setTimeout(() => {
            elem.removeChild(elem.lastChild);
        }, 250);
    }
}