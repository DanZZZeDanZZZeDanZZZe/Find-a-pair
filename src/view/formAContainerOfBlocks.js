import {createColorBlocks, shuffle} from '../utils'

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
    let childs = container.childNodes;
    [].forEach.call(childs, (element, index) => {
            if (arr[index].hasOwnProperty('color')) {
                element.style.backgroundColor = arr[index].color;
            }
    })
}

export function formAContainerOfBlocks(rows, columns, containerId, blockClass, colorConf){
    let blocksContainer = document.getElementById(containerId),
        count = createPartitions(rows, columns, blocksContainer, blockClass),
        arr = createColorBlocks(count, colorConf),
        shuffleArr = shuffle(arr);
    fillBlocksInContainer(shuffleArr, blocksContainer, colorConf);
}
