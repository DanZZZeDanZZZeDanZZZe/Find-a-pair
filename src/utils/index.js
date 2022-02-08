export function shuffle(arr) {
  let j, temp;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
export function hasClass(element, className) {
  return element.classList.contains(className);
}
export function getId(id) {
  return document.getElementById(id);
}
export function swapId(oldId, newId) {
  const el = getId(oldId);
  el.id = newId;
}
export function removeChilds(elementId) {
  const el = getId(elementId);
  if (el !== null) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  }
}
export function removeElementById(elementId) {
  document
    .getElementById(elementId)
    .parentNode.removeChild(document.getElementById(elementId));
}
export function closeWindow() {
  if (confirm('Вы уверены что хотите выйти?')) {
    close();
  }
}
export function updateLocalStorage(level, gameTime) {
  const addItem = function () {
    const newItem = {
      time: gameTime,
    };
    const newItemJSON = JSON.stringify(newItem);
    localStorage.setItem(level, newItemJSON);
  };
  const itemJSON = localStorage.getItem(level);
  if (itemJSON) {
    const item = JSON.parse(itemJSON);
    if (item.time > gameTime) {
      localStorage.removeItem(level);
      addItem();
      return true;
    }
  } else {
    addItem();
    return true;
  }
}

function getRandColor(
  rEnd = 200,
  gEnd = 256,
  bEnd = 200,
  rStart = 0,
  gStart = 0,
  bStart = 0
) {
  const r = rEnd - rStart;
  const g = gEnd - gStart;
  const b = bEnd - bStart;
  const randR = Math.floor(Math.random() * r);
  const randG = Math.floor(Math.random() * g);
  const randB = Math.floor(Math.random() * b);
  const colorCode = `rgb(${rStart + randR}, ${gStart + randG}, ${
    bStart + randB
  })`;
  return colorCode;
}

export function createColorBlocks(count, colorConf) {
  const arr = [];
  for (let i = 0; i < count / 2; i++) {
    let colorCode = null;
    if (colorConf) {
      colorCode = getRandColor.apply(this, colorConf);
    } else {
      colorCode = getRandColor();
    }
    const obj = {
      color: colorCode,
    };
    for (let j = 0; j < 2; j++) arr.push(obj);
  }
  return arr;
}
