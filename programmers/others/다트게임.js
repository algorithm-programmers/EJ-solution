/**
 * 다트 게임
 * Single(S) : 1제곱
 * Double(D) : 2제곱 
 * Triple(T) : 3제곱 
 * 스타상(*) : 해당 점수와 바로 전 점수를 2배로 만든다
 * 아차상(#) : 해당 점수는 마이너스가 된다.
 * 
 * @param {*} dartResult 
 */
function solution(dartResult) {
    const arr = dartResult.split("");
    let arrNum = [];
    for (let i = 0; i < arr.length; i++) {
        let numEl = parseInt(arr[i]);
        let bonusEl = arr[i+1];
        let optEl = arr[i+2];

        if(numEl >= 0){
            if(numEl === 1 && bonusEl === '0'){
                numEl = 10;
                bonusEl = arr[i+2];
                optEl = arr[i+3];
            }else if(numEl === 0 && arr[i-1] === '1'){
                continue;
            }
            console.log(numEl, bonusEl, optEl);

            let bonus = 1;
            if(bonusEl === 'S'){
                bonus = 1;
            }else if(bonusEl === 'D'){
                bonus = 2;
            }else if(bonusEl === 'T'){
                bonus = 3;
            }

            let currNum = Math.pow(numEl, bonus);

            if(optEl === '*'){
                currNum *= 2;
                if(arrNum.length - 1 > -1){
                    arrNum[arrNum.length - 1] *= 2;
                }
                
            }else if(optEl === '#'){
                currNum *= -1;
            }
            arrNum.push(currNum);
        }
        console.log(arrNum);
    }
    console.log('answer :', arrNum.reduce((prev, curr) => prev + curr));

    return arrNum.reduce((prev, curr) => prev + curr);
}

// solution("1S2D*3T");  // 37
// solution("1D2S#10S");  // 9
// solution("1D2S0T");  // 3
// solution("1S*2T*3S");   // 23
// solution("1D#2S*3S");   //5
// solution("1T2D3D#");    // -4
// solution("1D2S3T*");    // 59
// solution("1T#2D*0S");   // (-1^3 + 2^2 ) * 2 + 0^1 = (-1 + 4)*2 = 6
solution("10S10D*10T#");  // 10^1 + -10^2 * 2 + 10^3 * 2 = 10 + -100 + 1000 = 100
/* 

1^1 * 2(* 효과) + 2^2 * 2(* 효과) + 3^3
1^2 + 2^1 * (-1) + 10^1
1^2 + 2^1 + 0^3
(1^1 * 2 + 2^3) * 2 + 3^1

*/