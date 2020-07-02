/**
 * 프렌즈4블록
 * 
 * @param {number} m 판의 높이
 * @param {number} n 판의 폭
 * @param {string[]} board 판의 배치 정보
 */
function solution(m, n, board) {

    board = board.map(b => b.split(""))

    const SHOWING = 1, DELETED = 0;
    let dp = new Array(m).fill(0).map(el => new Array(n).fill(SHOWING));

    let deleting = true;
    while (deleting) {
        deleting = false;

        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                if (board[i][j] === DELETED) {
                    continue;
                }
                if (board[i][j] === board[i][j + 1] && board[i][j] === board[i + 1][j] && board[i][j] === board[i + 1][j + 1]) {
                    // 블록 지우기
                    dp[i][j] = DELETED;
                    dp[i][j + 1] = DELETED;
                    dp[i + 1][j] = DELETED;
                    dp[i + 1][j + 1] = DELETED;
                    deleting = true;
                }
            }
        }

        // console.log(dp);

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (dp[i][j] === DELETED) {
                    for (let k = i - 1; k >= 0; k--) {
                        board[k + 1][j] = board[k][j];
                        board[k][j] = DELETED;

                        // dp 재정렬
                        dp[k + 1][j] = dp[k][j];
                        dp[k][j] = DELETED;
                    }
                }
            }
        }

        // console.log(board);
        // console.log("=======");
    }

    const answer = board.reduce((prev, curr) => prev + curr.filter(c => c === 0).length, 0);

    console.log(board, answer);

    return answer;
}

// solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]);   // 14
solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]);   // 15



/**
 * dp 구현은 했는데, while 조건을 생각하지 못했다.
 */