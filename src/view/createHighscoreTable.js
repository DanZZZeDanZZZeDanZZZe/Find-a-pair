import { getId } from '../utils';
import { gameLevelConfiguration } from '../data';

export function createHighscoreTable(containerId) {
  const container = getId(containerId);
  const head = document.createElement('div');
  head.id = 'highscore-table-head';
  const button1 = document.createElement('div');
  button1.id = 'highscore-button-clear';
  button1.innerText = 'Удалить рекорды';
  head.appendChild(button1);
  const button2 = document.createElement('div');
  button2.id = 'highscore-button-exit';
  button2.innerText = 'В главное меню';
  head.appendChild(button2);
  container.appendChild(head);
  const highscoreTable = document.createElement('div');
  highscoreTable.id = 'highscore-table';
  const name = document.createElement('div');
  name.innerHTML = '<p>Уровень</p><p>Скорость прохождения</p>';
  highscoreTable.appendChild(name);
  gameLevelConfiguration.forEach(element => {
    const level = document.createElement('div');
    level.id = `highscore-${element.id}`;
    level.className = 'highscores-levels';
    const name = document.createElement('div');
    name.innerText = element.name;
    level.appendChild(name);
    const time = document.createElement('div');
    const item = localStorage.getItem(element.id);
    if (item) {
      time.innerText = JSON.parse(item).time + ' c';
    } else {
      time.innerText = 'Рекорд не установлен';
    }
    level.appendChild(time);
    highscoreTable.appendChild(level);
  });
  container.appendChild(highscoreTable);
}
