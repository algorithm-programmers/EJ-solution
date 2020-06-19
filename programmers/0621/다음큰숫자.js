/**
 * 다음 큰 숫자
 * 
 * @param {number} n 
 */
function solution(n) {
    const bin = n.toString(2);
    const regexp = /1/gi;
    const no1OfBinCount = bin.match(regexp).length;
    
    while(true){
        ++n;
        const nextBin = n.toString(2);
        const no1OfNextBinCount = nextBin.match(regexp).length;
        if(no1OfBinCount === no1OfNextBinCount){
            break;
        }
    }
    
    console.log(n);
    return n;
}

solution(78);
// solution(15);