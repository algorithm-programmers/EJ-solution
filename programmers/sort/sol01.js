function solution(array, commands) {
    let answer = [];
    commands.map(command => {
        const [i, j, k] = command;
        answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k-1]);
    })
    return answer;
}

solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);


// 예시로 풀면 성공이나, 테스트 케이스에서 하나가 계속 실패하였는데 원인은 sort 였다.
// [200,23,58,3].sort() 을 하면 알 수 있듯이, sort 함수는 요소를 문자열로 변환하고 유니코드 포인트 순서로 비교한다.
// 숫자를 비교하기 위해서는 다음 compareNumbers 이 제공되어야 한다.
// function compareNumbers(a, b) {
//     return a - b;
// }