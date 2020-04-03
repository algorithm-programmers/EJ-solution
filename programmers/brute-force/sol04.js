/**
 * 완전 탐색 - 카펫
 * 카펫의 갈색 격자, 빨간색 격자의 수를 안다고 가정할 때 
 * 카펫의 가로, 세로 크기를 구하여라.
 * - 이때, 가로 길이는 세로 길이보다 같거나 길다.
 * - 카펫은 중앙이 빨간색이고 모서리가 갈색인 모양이다. => 갈색 격자 길이는 3개 이상
 * 
 * @param {number} brown 갈색 격자의 수
 * @param {number} red 빨간색 격자의 수
 */
function solution(brown, red) {
    let answer = [];

    const sum = brown + red;
    for (let i = 0; i <= sum; i++) {
        if(sum % i === 0){
            const len = sum/i;
            // (세로 - 2) * (가로 - 2) 하면 가운데 빨간색 격자 갯수가 나온다.
            if(red === (len - 2) * (i -2)){
                answer = [len, i];
                break;
            }
        }
    }

    console.log(answer);
    
    return answer;
}

solution(10, 2);
solution(8, 1);
solution(24, 24);