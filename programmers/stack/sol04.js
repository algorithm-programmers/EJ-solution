/**
 * 스택/큐 - 프린터
 * 1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
 * 2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
 * 3. 그렇지 않으면 J를 인쇄합니다.
 * 
 * 큐 이용 - 2번 조건에서 줄을 다시 서기 때문에.
 * 
 * @param {Array} priorities 인쇄 대기 목록
 * @param {Number} location 내가 요청한 문서 위치
 */
function solution(priorities, location) {
    let answer = 0;

    while(priorities.length > 0){
        const first = priorities.shift();
        if(priorities.some(priority => priority > first)){
            priorities.push(first);
        }else{
            answer ++;
            if(location === 0){
                break;
            }
        }
        
        if(location === 0){
            location = priorities.length - 1;
        }else{
            location--;
        }
        
        console.log(priorities, first, location, answer);
    }

    console.log(answer);
    
    return answer;
}

solution([2, 1, 3, 2], 2)
// solution([1, 1, 9, 1, 1, 1], 0)