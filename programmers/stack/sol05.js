/**
 * 스택/큐 - 쇠막대기
 * 임시 배열에 "(" 를 추가하고, ")"가 나오면 스택을 pop() 한다.
 * ")"를 만났을 때, 레이저인가 막대기의 끝인가에 따라 결과를 달리 저장한다.
 * 
 * @param {String} arrangement 쇠막대기
 */
function solution(arrangement) {
    let answer = 0; // 쇠막대기 조각의 갯수
    let tempStack = [];
    const arr = arrangement.split("");
    arr.forEach((a, idx) => {
        if(a === "("){
            tempStack.push(a);
        }else if(")"){
            tempStack.pop();
            if(arr[idx-1] === "("){
                // 레이저인 경우
                answer += tempStack.length;
            }else{
                // 막대기 끝인 경우
                answer += 1;
            }
        }
    });
    console.log(answer);
    
    return answer;
}

solution("()(((()())(())()))(())");