/**
 * 완전탐색 - 숫자 야구
 * 숫자와 위치가 모두 맞을 때는 스트라이크
 * 숫자는 맞지만, 위치가 틀렸을 때는 볼
 * 
 * @param {Array.<Array<number>} baseball 
 */
function solution(baseball) {
    let answer = 0;
    let answerArr = [];

    // 가능한 모든 수를 탐색한다.
    for(let num = 123; num <= 220; num++){
        const number = num + "";

        // 숫자 중복 제거 + '0' 이 들어가는 숫자 제거
        if(number[0] == number[1] || number[1] == number[2] || number[2] == number[3] || number.indexOf('0') > -1){
            continue;
        }
        
        for(let i = 0; i < baseball.length; i++){
            const bbNum = baseball[i][0] + "";
            const strikeCount = baseball[i][1];
            const ballCount = baseball[i][2];

            let sCount = 0, bCount = 0;
            for (const idx in bbNum) {
                // console.log(number, bbNum, number[idx], bbNum[idx]);
                
                // 스트라이크 구하기
                if(number[idx] == bbNum[idx]){
                    sCount += 1;
                    continue;
                }

                // 볼 구하기
                if(number.indexOf(bbNum[idx]) > -1){
                    bCount += 1;
                    continue;
                }

            }

            if(sCount != strikeCount || bCount != ballCount){
                break;
            }
            
            // console.log(number, baseball[i], sCount, bCount, strikeCount, ballCount);          
            // answerArr.push(number);
            
        };
    }

    // answer = answerArr.length;
    console.log(answer);

    return answer;
}

solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]);