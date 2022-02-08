import { gameLevelConfiguration } from './gameLevelConfiguration';

export const menuData = [
  {
    menuId: 'main-menu',
    length: 4,
    idArr: [
      'main-menu-play',
      'main-menu-highscores',
      'main-menu-reference',
      'main-menu-exit',
    ],
    textArr: ['Играть', 'Рекорды', 'Справка', 'Выход'],
  },
  {
    menuId: 'intermediate-menu',
    length: 2,
    idArr: ['intermediate-menu-play', 'intermediate-menu-exit'],
    textArr: ['Сыграть ещё', 'В главное меню'],
    textHeadArr: ['Поражение!'],
  },
  {
    menuId: 'level-menu',
    length: gameLevelConfiguration.length,
    get idArr() {
      const arr = [];
      gameLevelConfiguration.forEach((el, index) => {
        arr.push(`level${index}`);
      });
      return arr;
    },
    get textArr() {
      const arr = [];
      gameLevelConfiguration.forEach(el => {
        arr.push(el.name);
      });
      return arr;
    },
  },
  {
    menuId: 'intermediate-menu',
    length: 2,
    idArr: ['intermediate-menu-play', 'intermediate-menu-exit'],
    textArr: ['Сыграть ещё', 'В главное меню'],
    textHeadArr: ['Победа!'],
  },
  {
    menuId: 'intermediate-menu',
    length: 2,
    idArr: ['intermediate-menu-play', 'intermediate-menu-exit'],
    textArr: ['Сыграть ещё', 'В главное меню'],
    textHeadArr: ['Новый рекорд!'],
  },
];
