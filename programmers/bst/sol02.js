/**
 * 입국심사
 * 
 * @param {number} n 입국심사를 기다리는 사람
 * @param {number[]} times 심사관 배열
 */
function solution(n, times) {
    let answer = 0;

    let left = 1;
    let right = times[times.length - 1] * n;

    while(left <= right){
        const mid = (left + right) / 2;
        let done = times.reduce((prev, curr) => prev + parseInt(mid / curr));

        console.log(done);
        
        if(done < n){
            left = mid + 1;
        }else{
            if(mid < answer){
                answer = mid;
            }

            right = mid - 1;
        }
    }

    console.log(answer);
    
    return answer;
}

solution(6, [7, 10]);   // 28