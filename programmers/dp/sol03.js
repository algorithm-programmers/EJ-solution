/**
 * 정수 삼각형
 * 
 * @param {number[][]} triangle 삼각형의 정보가 담긴 배열
 */
function solution(triangle) {
    let answer = 0;
    let idx = 0;
    for(let i = 0; i < triangle.length; i++){        
        const el = triangle[i][idx];
        console.log(el);
        
        answer += el;
        const nextEl = triangle[i+1];
        if(nextEl){
            if(nextEl[idx] < nextEl[idx + 1]){
                idx += 1;
            }
        }
    }
    console.log(answer);
    
    return answer;
}

solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]); //30