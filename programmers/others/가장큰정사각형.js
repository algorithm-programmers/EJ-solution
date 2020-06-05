/**
 * 가장 큰 정사각형 찾기
 * 
 * @param {number[][]} board 
 */
function solution(board) {

    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        console.log(row);

        let x = 0, y = 0;
        for (let j = x; j < row.length; j++) {
            const element = row[j];
            if(element !== 0){
                console.log(i, j);
                x = j;
                y = i;
                break;
            }
            
        }
        console.log('x : '+x + '/y :'+y);

    }
}

solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]);    // 9
solution([[0,0,1,1],[1,1,1,1]]);    // 4