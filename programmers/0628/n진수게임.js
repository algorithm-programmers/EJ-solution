/**
 * N진수 게임
 * 튜브가 말해야 하는 숫자를 구하라
 * 
 * @param {number} n 진법
 * @param {numbrt} t 튜브가 말해야할 숫자의 갯수
 * @param {number} m 게임에 참가하는 인원
 * @param {number} p 튜브의 순서
 */
function solution(n, t, m, p) {
    let numberArr = [];
    
    const length = (m * t);
    for (let i = 0; i < length; i++) {
        numberArr.push(i.toString(n));
    }

    const numberStr = numberArr.join("")
    
    let answer = "";
    for (let j = 0; j < length; j++) {
        if(j % m === (p - 1)){
            answer += numberStr[j].toUpperCase();
        }
    }

    console.log(answer);

    return answer;
}

solution(2, 4, 2, 1);

/**
 * t번 숫자를 말하는데, 말해야하는 숫자를 모두 문자열로 구하라
 */