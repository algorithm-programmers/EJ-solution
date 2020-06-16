/**
 * 다트 게임
 * 다트를 세 번 던져서 계산한다.
 * 
 * Single(S) : 1제곱
 * Double(D) : 2제곱 
 * Triple(T) : 3제곱 
 * 스타상(*) : 해당 점수와 바로 전 점수를 2배로 만든다
 * 아차상(#) : 해당 점수는 마이너스가 된다.
 * 
 * 참고 : https://jo-c.tistory.com/23
 * 
 * @param {*} dartResult 
 */
function solution(dartResult) {
    const regexp = /\d{1,2}[SDT]{1}[*|#]?/g;
    const dartArr = dartResult.match(regexp);
    console.log(dartArr);
    
    let score = [];
    for (let i = 0; i < 3; i++) {
        const dart = dartArr[i];
        let num = dart.match(/\d{1,2}/g);
        const bonus = dart.match(/[SDT]{1}/g);
        const opt = dart.match(/[*|#]/g);

        console.log(num, bonus, opt);

        if(bonus == 'S'){
            num = parseInt(num);;
        }else if(bonus == 'D'){
            num = num * num;
        }else if(bonus == 'T'){
            num = num * num * num;
        }

        if(opt == '*'){
            num *= 2;
            if(i > -1){
                score[i-1] *= 2;
            }
        }else if(opt == '#'){
            num *= -1;
        }
        score.push(num);
    }
    console.log(score, score.reduce((prev, curr) => prev + curr));

    return score.reduce((prev, curr) => prev + curr);
}

solution("1S2D*3T");  // 37
// solution("1D2S#10S");  // 9
// solution("1D2S0T");  // 3
// solution("1S*2T*3S");   // 23
// solution("1D#2S*3S");   //5
// solution("1T2D3D#");    // -4
// solution("1D2S3T*");    // 59
/* 

1^1 * 2(* 효과) + 2^2 * 2(* 효과) + 3^3
1^2 + 2^1 * (-1) + 10^1
1^2 + 2^1 + 0^3
(1^1 * 2 + 2^3) * 2 + 3^1

숫자 범위에 두 자리수인 10도 포함되기 때문에
카카오 해설대로 정규식을 이용해서 토큰화를 시키고 난 후 계산하는 것이 더 쉬웠다.

*/
