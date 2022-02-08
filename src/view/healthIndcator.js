import { getId } from '../utils';

export const healthIndcator = {
  _count: null,
  set count(value) {
    this._count = value;
  },
  get count() {
    return this._count;
  },
  create(elementId, count) {
    this._count = count;
    const element = document.getElementById(elementId);
    const healthContainer = document.createElement('div');
    healthContainer.id = 'health-сontainer';
    for (let i = 0; i < count; i++) {
      const healthImg = document.createElement('img');
      healthImg.setAttribute('src', 'heart.svg');
      healthImg.className = 'heart';
      healthContainer.appendChild(healthImg);
    }
    element.appendChild(healthContainer);
  },
  clear() {
    this._count--;
    const elem = getId('health-сontainer');
    elem.lastChild.style.animationPlayState = 'running';
    setTimeout(() => {
      elem.removeChild(elem.lastChild);
    }, 250);
  },
};
