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
	while (elementId.firstChild) {
		el.removeChild(el.firstChild);
	}
}
function removeElementById(elementId) {
	document.getElementById(elementId).parentNode.removeChild(document.getElementById(elementId));
}