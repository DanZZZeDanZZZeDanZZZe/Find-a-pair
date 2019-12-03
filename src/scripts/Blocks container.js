function createPartitions(rows, columns, container) {
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)` // `repeat(${rows}fr)`;
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`//`repeat(${columns}fr)`;
    for (let i = 0; i < rows*columns; i++) {
        let partition = document.createElement('div');
        partition.className = "partition";
        container.appendChild(partition);
    }
}
/*function createColorBlocks(count){
    let arr = [];
    for (let i = 0; i < count; i++) {
        let colorCode = 
        let obj = {
            color: 
        };

    }
} */
function getRandColor(r = 256, g = 256, b = 256) {
    let randR = Math.floor(Math.random() * r),
    randG = Math.floor(Math.random() * g),
    randB = Math.floor(Math.random() * b),
    colorCode = `#${randR.toString(16)}${randG.toString(16)}${randB.toString(16)}`;
    return colorCode
}
doc = document.getElementById('blocks-container');
createPartitions(8, 10, doc);
for (let i = 0; i < 5; i++) {
    console.log(getRandColor());
}