function createColorBlocks(count){
    let arr = [];
    for (let i = 0; i < count / 2; i++) {
        let colorCode = getRandColor();
        let obj = {
            color: colorCode
        };
        for (let j = 0; j < 2; j++) arr.push(obj)
    }
    return arr;
} 
function getRandColor(r = 256, g = 256, b = 256) {
    let randR = Math.floor(Math.random() * r),
    randG = Math.floor(Math.random() * g),
    randB = Math.floor(Math.random() * b),
    colorCode = `#${randR.toString(16)}${randG.toString(16)}${randB.toString(16)}`;
    return colorCode
}
