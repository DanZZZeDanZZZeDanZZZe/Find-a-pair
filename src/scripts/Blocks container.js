function createPartitions(rows, columns, container) {
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`; 
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    for (let i = 0; i < rows*columns; i++) {
        let partition = document.createElement('div');
        partition.className = "partition";
        container.appendChild(partition);
    }
}

let doc = document.getElementById('blocks-container');
createPartitions(8, 10, doc);
let arr = createColorBlocks(80);
console.log(shuffle(arr));
console.log(arr.length);
