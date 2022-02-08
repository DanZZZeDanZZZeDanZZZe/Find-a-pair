import './styles/Animations.css';
import './styles/Scrollbar.css';
import './styles/Health indicator.css';
import './styles/Find-a-pair.css';
import './styles/Blocks container.css';
import './styles/Menu.css';
import './styles/Timer.css';
import './styles/High scores.css';

import {
  createMenu,
  addLevelHolder,
  createHighscoreTable,
  formAContainerOfBlocks,
  healthIndcator,
  toTurnPartitions,
} from './view';
import { menuData, gameLevelConfiguration } from './data';
import {
  hasClass,
  removeElementById,
  swapId,
  closeWindow,
  removeChilds,
  getId,
  updateLocalStorage,
} from './utils';
import { Game, timer } from './entities';

let game;
let gameStream;

document.body.addEventListener(
  'click',
  function (e) {
    if (hasClass(e.target, 'partition')) {
      if (game.buff === null) {
        e.target.className = 'allottedPartition';
        e.target.style.animation = 'none';
        game.buff = e.target;
      } else {
        if (
          e.target.style.backgroundColor === game.buff.style.backgroundColor &&
          game.buff !== e.target
        ) {
          e.target.className = 'guessedPartition';
          game.buff.className = 'guessedPartition';
          game.buff = null;
          game.destroyCouple();
          if (game.totalCouples === game.destroyedCouples) {
            game.time = timer.elapsedTime;
            removeChilds('blocks-container');
            removeChilds('side-panel');
            removeChilds('timer-container');
            swapId('blocks-container', 'intermediate-menu-container');
            const score = updateLocalStorage(game.currentLevel, game.time);
            if (score) {
              createMenu('intermediate-menu-container', menuData[4]);
            } else {
              createMenu('intermediate-menu-container', menuData[3]);
            }
            clearInterval(gameStream);
          }
        } else {
          healthIndcator.clear();
          game.buff.className = 'partition';
          game.buff = null;
        }
      }
    }
    if (
      e.target.id.indexOf('main-menu-') > -1 &&
      e.target.id !== 'main-menu-exit' &&
      e.target.id !== 'main-menu-reference'
    ) {
      removeElementById('main-menu');
      if (e.target.id === 'main-menu-play') {
        addLevelHolder('main-menu-container');
        createMenu('level-holder', menuData[2]);
      }
      if (e.target.id === 'main-menu-highscores') {
        swapId('main-menu-container', 'highscores-holder');
        createHighscoreTable('highscores-holder');
      }
    }
    if (e.target.id === 'main-menu-reference') {
      window.open('reference/reference.html');
    }
    if (e.target.id === 'intermediate-menu-play') {
      const levelNum = game.currentLevel[game.currentLevel.length - 1] - 1;
      removeElementById('intermediate-menu');
      swapId('intermediate-menu-container', 'blocks-container');
      initializeTheGame(gameLevelConfiguration[levelNum]);
    }
    if (e.target.id === 'intermediate-menu-exit') {
      removeElementById('intermediate-menu');
      swapId('intermediate-menu-container', 'main-menu-container');
      createMenu('main-menu-container', menuData[0]);
    }
    if (e.target.id.substring(0, e.target.id.length - 1) === 'level') {
      const levelNum = e.target.id[e.target.id.length - 1];
      removeElementById('level-menu');
      removeElementById('level-holder');
      swapId('main-menu-container', 'blocks-container');
      initializeTheGame(gameLevelConfiguration[levelNum]);
    }
    if (e.target.id === 'main-menu-exit') {
      closeWindow();
    }
    if (e.target.id.indexOf('highscore-button-') > -1) {
      removeChilds('highscores-holder');
      swapId('highscores-holder', 'main-menu-container');
      createMenu('main-menu-container', menuData[0]);
      if (e.target.id === 'highscore-button-clear') {
        if (confirm('Вы уверены что хотите удалить все рекорды?')) {
          localStorage.clear();
        }
      }
    }
  },
  true
);

function initializeTheGame(levelConfiguration) {
  const gameTime = levelConfiguration.time;
  const colorConf = levelConfiguration.colorConf;
  const healths = levelConfiguration.numberOfHealths;
  const id = levelConfiguration.id;
  const height = levelConfiguration.levelHeight;
  const width = levelConfiguration.levelWidth;
  const totalCouples = (height * width) / 2;
  const coups = levelConfiguration.coups;
  let timerBuff = 0;
  game = new Game(id, totalCouples);
  formAContainerOfBlocks(
    height,
    width,
    'blocks-container',
    'partition',
    colorConf
  );
  const partitionsArr = document.getElementsByClassName('partition');
  if (levelConfiguration.rotate) {
    getId('blocks-container').style.animationPlayState = 'running';
  } else {
    getId('blocks-container').style.animationPlayState = 'paused';
  }
  healthIndcator.create('side-panel', healths);
  timer.create('timer-container', gameTime);
  gameStream = setInterval(() => {
    timer.reduceTime(1);
    timerBuff++;
    if (healthIndcator.count === 0 || timer.time === 0) {
      removeChilds('side-panel');
      removeChilds('timer-container');
      removeChilds('blocks-container');
      swapId('blocks-container', 'intermediate-menu-container');
      createMenu('intermediate-menu-container', menuData[1]);
      clearInterval(gameStream);
    }
    if (timerBuff === 15 && coups) {
      timerBuff = 0;
      toTurnPartitions(partitionsArr);
    }
  }, 1000);
}

window.onload = () => {
  createMenu('main-menu-container', menuData[0]);
};
