/**
 * 더 맵게
 * 섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
 * 
 * @param {Array} scoville Leo가 가진 음식의 스코빌 지수를 담은 배열
 * @param {number} k 원하는 스코빌 지수 K
 */
function solution(scoville, k) {
    let answer = 0; // 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수

    let tempScoville = [...scoville];
    while(scoville.some(scovi => scovi <= k)){
        const minScovi = Math.min(...scoville);
        const idx = scoville.indexOf(minScovi);
        
        tempScoville.splice(idx, 1);
        const secMinScovi = Math.min(...tempScoville);

        const newEl = minScovi + (secMinScovi * 2);
        
        scoville[idx] = newEl;

        tempScoville = [...scoville];

        answer += 1;
    }
    // [5,2,3,9,10,12]
    // [5,8,3,9,10,12]
    // [5,8,13,9,10,12]
    // [21,8,13,9,10,12]
    
    return answer;  
}

solution([1, 2, 3, 9, 10, 12], 7);