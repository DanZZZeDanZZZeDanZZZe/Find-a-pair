function formAContainerOfBlocks(rows, columns, containerId, blockId){
    let blocksContainer = document.getElementById(containerId),
        count = createPartitions(rows, columns, blocksContainer, blockId),
        arr = createColorBlocks(count),
        shuffleArr = shuffle(arr);
    fillBlocksInContainer(shuffleArr, blocksContainer);
    console.log(arr);
    console.log(shuffleArr);
    console.log(arr.length);
}
function createPartitions(rows, columns, container, blockId) {
    let count = rows*columns;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`; 
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    for (let i = 0; i < count; i++) {
        let partition = document.createElement('div');
        partition.className = blockId;
        container.appendChild(partition);
    }
    return rows*columns;
}
window.onload = () => {
    console.log('hy');
    formAContainerOfBlocks(10, 8, "blocks-container", "partition");
}
function fillBlocksInContainer(arr, container){
    console.log('fillBlocksInContainer');
    let childs = container.childNodes;
    [].forEach.call(childs, (element, index) => {
        if (index != 0) {
            if (arr[index-1].hasOwnProperty('color')) {
                console.log(`index = ${index-1}`);
                console.log(element);
                console.log(arr[index-1]);
                element.style.backgroundColor = arr[index-1].color;
            }
        }   
    })
}

