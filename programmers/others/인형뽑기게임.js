/**
 * 크레인 인형뽑기 게임
 * 
 * @param {number[][]} board 
 * @param {number[][]} moves 
 */
function solution(board, moves) {
    var answer = 0;
    
    let basket = [];
    moves.map(m => {        
        board.some(b => {
            const idx = m - 1;
            if(b[idx] !== 0){
                if(basket[basket.length - 1] === b[idx]){
                    basket.pop();
                    answer += 2;
                }else{
                    basket.push(b[idx]);
                }
                
                b[idx] = 0;
                return true;
            }
        });
    });
    
    console.log(answer);
    
    return answer;
}

solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]);