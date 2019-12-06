//написать завтра чтобы окрашивались блоки внутри сетки а не сама сетка
function formAContainerOfBlocks(rows, columns, containerId, blockClass){
    let blocksContainer = document.getElementById(containerId),
        count = createPartitions(rows, columns, blocksContainer, blockClass),
        arr = createColorBlocks(count),
        shuffleArr = shuffle(arr);
    fillBlocksInContainer(shuffleArr, blocksContainer);
}
function createPartitions(rows, columns, container, blockClass) {
    let count = rows*columns;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`; 
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    for (let i = 0; i < count; i++) {
        let partition = document.createElement('div');
        partition.className = blockClass;
        container.appendChild(partition);
    }
    return rows*columns;
}
function fillBlocksInContainer(arr, container){
    console.log('fillBlocksInContainer');
    let childs = container.childNodes;
    console.log(childs);
    [].forEach.call(childs, (element, index) => {
            if (arr[index].hasOwnProperty('color')) {
                console.log(`index = ${index}`);
                console.log(element);
                console.log(arr[index]);
                element.style.backgroundColor = arr[index].color;
            }
    })
}

