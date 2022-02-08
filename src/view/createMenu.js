import { getId } from "../utils";

export function createMenu(containerId, menuConf) {//menuId , length, idArr, textArr) {
  let container = getId(containerId);
  let menu = document.createElement('div');
  menu.className = 'menu';
  menu.id = menuConf.menuId;
  if (menuConf.textHeadArr) {
      menuConf.textHeadArr.forEach((element) => {
          let head = document.createElement('div');
          head.className = 'menu-head';
          head.innerText = element;
          menu.appendChild(head);
      })
  }
  for(let i = 0; i < menuConf.length; i++) {
      let menuItem = document.createElement('div');
      menuItem.className = 'menu-item';
      menuItem.id = menuConf.idArr[i];
      menuItem.innerText = menuConf.textArr[i];
      menu.appendChild(menuItem);
  }
  container.appendChild(menu);
}