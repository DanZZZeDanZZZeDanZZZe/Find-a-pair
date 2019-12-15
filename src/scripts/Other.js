function shuffle(arr) {
	let j, temp;
	for(let i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}
function hasClass(element, className) {
	return element.classList.contains(className);
}
function getId(id){
	return document.getElementById(id);	
} 
function swapId(oldId, newId) {
	let el = getId(oldId);
	el.id = newId;
}
function removeChilds(elementId) {
	let el = getId(elementId);
	if (el !== null) {
		while (el.firstChild) {
			el.removeChild(el.firstChild);
		}
	}
}
function removeElementById(elementId) {
	document.getElementById(elementId).parentNode.removeChild(document.getElementById(elementId));
}
function closeWindow() {
	if (confirm("Вы уверены что хотите выйти?")) {
		close();
	}
}
function updateLocalStorage(level, gameTime) {
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
