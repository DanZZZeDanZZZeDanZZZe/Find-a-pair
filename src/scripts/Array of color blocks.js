function createColorBlocks(count, colorConf){
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
