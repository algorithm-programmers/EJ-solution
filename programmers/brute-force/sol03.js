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
    for(let num = 123; num <= 987; num++){
        const number = num + "";
        let flag = true;

        // 숫자 중복 제거 + '0' 이 들어가는 숫자 제거
        if(number[0] == number[1] || number[1] == number[2] || number[2] == number[3] || number.indexOf('0') > -1){
            continue;
        }

        for(let i = 0; i < baseball.length; i++){
            const bbNum = baseball[i][0] + "";

            let sCount = 0, bCount = 0;
            for (const idx in bbNum) {
                if(number[idx] == bbNum[idx]){  // 스트라이크 구하기
                    sCount += 1;
                }else if(number.indexOf(bbNum[idx]) > -1){    // 볼 구하기
                    bCount += 1;
                }
            }

            console.log(bbNum, [number, sCount, bCount]);

            const strikeCount = baseball[i][1];
            const ballCount = baseball[i][2];
            // 제시한 조건과 맞지 않은 숫자임.
            if(sCount !== strikeCount || bCount !== ballCount){
                flag = false;
                break;
            }
            
        };

        // baseball 루프가 끝난 후
        if(flag){
            answerArr.push(number);
            answer ++;
        }
        
    }

    console.log(answerArr, answer);
    return answer;
}

solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]);


// 잘못 생각했던 부분은 baseball 루프 안에서 number 을 구하려고 한 점이다.
// 루프가 종료되고 나서 답을 구해주어야 숫자의 반복없이 답을 구할 수 있다.

// PS)
// break문은 전체 루프의 실행을 종료한다.
// continue 문은 전체 루프의 실행을 종료하지 않는다.