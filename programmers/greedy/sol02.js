/**
 * 조이스틱
 * 각 글자는 A에서 시작한다.
 * ▲ - 다음 알파벳
 * ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
 * ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
 * ▶ - 커서를 오른쪽으로 이동
 * 
 * 참고
 * - https://jayrightthere.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A1%B0%EC%9D%B4%EC%8A%A4%ED%8B%B1
 * - https://keepgoing0328.tistory.com/71
 * 
 * @param {string} name 알파벳 이름
 */
function solution(name) {
    let answer = 0;
    const length = name.length;
    let moveCnt = length - 1;   // 좌우 컨트롤 횟수. 글자 수마다 각 한번씩 움직인다고 가정한다. 첫번째 글자는 제외.
    
    const zLetter = 'Z'.charCodeAt(0);    // 90
    const aLetter = 'A'.charCodeAt(0);    // 65
    
    for (let i = 0; i < length; i++) {
        const letter = name[i].charCodeAt(0);

        const up = letter - aLetter;
        const down = zLetter - letter + 1;  // 방향 이동 횟수까지 포함한다.

        answer += (up > down) ? down : up;


        // 다음 문자로 가기 위한 계산. 좌우 컨트롤 횟수의 최솟값을 구한다.
        let next = i + 1;

        // 1. 다음 문자가 A 일 경우에는 우측으로 이동한다.
        while(next < length && name[next] === 'A'){
            next++;  
        }

        // 2. 중간에 방향을 바꾸는 경우가 있을 수 있다. ex) ABABAAAAABA
        const backCnt = i + length - next;  // A가 아닌 글자를 만날 때까지 좌측으로 이동한 횟수
        const compareCnt = Math.min(i, length - next);  // 뒤에서 시작해서 A가 아닌 글자를 만날 때까지 이동한 거리와 현재 거리를 비교
        const tmpCnt = backCnt + Math.min(i, compareCnt);
        moveCnt = Math.min(moveCnt, tmpCnt);
        
    }

    answer += moveCnt;

    console.log(answer);
    
    return answer;
}

// solution("JEROEN");
solution("JAN");