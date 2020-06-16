/**
 * 가장 큰 정사각형 찾기
 * DP
 * board[i][j]의 사방을 비교하면서 가능한 정사각형을 만든다.
 * 참고 : https://codedrive.tistory.com/53
 * 
 * @param {number[][]} board 
 */
function solution(board) {
    let answer = 0;

    const xLength = board[0].length;
    const yLength = board.length;
    if(xLength < 2 || yLength < 2){
        return 1;   // 0 또는 1 이 나온다.
    }

    for (let i = 1; i < xLength; i++) {
        for (let j = 1; j < yLength; j++) {
            if(board[i][j] > 0){
                const min = Math.min(board[i-1][j], board[i-1][j-1], board[i][j-1]);
                board[i][j] = min + 1;
            }
            
            if(answer < board[i][j]){
                answer = board[i][j];
            }
        }
    }
    console.log(board, answer * answer);
    
    return answer * answer;
}

// solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]);    // 9
// solution([[0,0,1,1],[1,1,1,1]]);    // 4
// solution([[1,1,0],[1,1,0],[0,0,0]]); // 4
// solution([[1,0],[1,0]]);    // 0 => 점이므로 정사각형이 될 수 없다.
// solution([[1],[1]]); // 1
// solution([[0],[0]]); // 0