export function shuffle(arr) {
	let j, temp;
	for(let i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}
export function hasClass(element, className) {
	return element.classList.contains(className);
}
export function getId(id){
	return document.getElementById(id);	
} 
export function swapId(oldId, newId) {
	let el = getId(oldId);
	el.id = newId;
}
export function removeChilds(elementId) {
	let el = getId(elementId);
	if (el !== null) {
		while (el.firstChild) {
			el.removeChild(el.firstChild);
		}
	}
}
export function removeElementById(elementId) {
	document.getElementById(elementId).parentNode.removeChild(document.getElementById(elementId));
}
export function closeWindow() {
	if (confirm("Вы уверены что хотите выйти?")) {
		close();
	}
}
export function updateLocalStorage(level, gameTime) {
	let addItem = function(){
		let newItem = {
			time: gameTime 
		}
		let newItemJSON = JSON.stringify(newItem);
		localStorage.setItem(level, newItemJSON);
	}
	let itemJSON = localStorage.getItem(level);
	if (itemJSON) {
		let item = JSON.parse(itemJSON);
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

function getRandColor(rEnd = 200, gEnd = 256, bEnd = 200, rStart = 0, gStart = 0, bStart = 0) {
  let
      r = rEnd - rStart,
      g = gEnd - gStart,
      b = bEnd - bStart,
      randR = Math.floor(Math.random() * r),
      randG = Math.floor(Math.random() * g),
      randB = Math.floor(Math.random() * b),
  colorCode = `rgb(${rStart + randR}, ${gStart + randG}, ${bStart + randB})`;
  return colorCode
}

export function createColorBlocks(count, colorConf){
  let arr = [];
  for (let i = 0; i < count / 2; i++) {
      let colorCode = null;
      if (colorConf) {
          colorCode = getRandColor.apply(this, colorConf);
      } else {
          colorCode = getRandColor();
      }    
      let obj = {
          color: colorCode
      };
      for (let j = 0; j < 2; j++) arr.push(obj)
  }
  return arr;
} 