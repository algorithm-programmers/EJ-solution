/**
 * 지형 이동
 * 최대한 적은 비용이 들도록 사다리를 설치해서 모든 칸으로 이동 가능하도록 만들어라.
 * 높이 차가 height 보다 많이 나는 경우엔 사다리를 설치해야한다.
 * 
 * @param {number[][]} land 지형 값
 * @param {number} height 제한 높이
 */
function solution(land, height) {

    const length = land.length;
    
    // i : 세로, j : 가로
    for (let i = 1; i < length - 1; i++) {
        for (let j = 0; j < length; j++) {
            let uppperDiff = 0;
            let lowerDiff = 0;
            let leftDiff = 0;

            if(j === 0){
                const el = land[i][j];
                const upperEl = land[i-1][j];
                const lowerEl = land[i+1][j];
                // console.log(el, upperEl, lowerEl);
                
                uppperDiff = Math.abs(el - upperEl);
                lowerDiff = Math.abs(el - lowerEl);
            }else{
                const el = land[i][j];
                const upperEl = land[i-1][j];
                const lowerEl = land[i+1][j];      // i = length - 1 일 때 제외
                const leftEl = land[i][j-1];    // i = 0 일 때는 다음 항목 제외
                // console.log(i, j, '=>', el, upperEl, lowerEl, leftEl);

                uppperDiff = Math.abs(el - upperEl);
                lowerDiff = Math.abs(el - lowerEl);
                leftDiff = Math.abs(el - leftEl);
            }

            console.log(uppperDiff, lowerDiff, leftDiff);

            // if(uppperDiff <= height || lowerDiff <= height || leftDiff <= height){
            //     console.log(i, j);
            //     continue;
            // }else{
            //     console.log(i, j, '=>', uppperDiff, lowerDiff);
            // }
        }
    }
}

solution([[1, 4, 8, 10], [5, 5, 5, 5], [10, 10, 10, 10], [10, 10, 10, 20]], 3);