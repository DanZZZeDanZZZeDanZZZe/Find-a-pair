import {getId} from '../utils'
import {gameLevelConfiguration} from '../data'


export function createHighscoreTable(containerId) {
  let container = getId(containerId);
  let head = document.createElement('div');
  head.id = 'highscore-table-head'
  let button1 = document.createElement('div');
  button1.id = 'highscore-button-clear';
  button1.innerText = 'Удалить рекорды'
  head.appendChild(button1);
  let button2 = document.createElement('div');
  button2.id = 'highscore-button-exit';
  button2.innerText = 'В главное меню';
  head.appendChild(button2);
  container.appendChild(head)
  let highscoreTable = document.createElement('div');
  highscoreTable.id = 'highscore-table';
  let name = document.createElement('div');
  name.innerHTML = '<p>Уровень</p><p>Скорость прохождения</p>';
  highscoreTable.appendChild(name);
  gameLevelConfiguration.forEach((element) => {
      let level = document.createElement('div');
      level.id = `highscore-${element.id}`
      level.className = 'highscores-levels';
      let name = document.createElement('div');
      name.innerText = element.name;
      level.appendChild(name);
      let time = document.createElement('div');
      let item = localStorage.getItem(element.id);
      if (item) {
          time.innerText = JSON.parse(item).time+' c';
      } else {
          time.innerText = 'Рекорд не установлен';
      }
      level.appendChild(time);
      highscoreTable.appendChild(level);
  })
  container.appendChild(highscoreTable);
}