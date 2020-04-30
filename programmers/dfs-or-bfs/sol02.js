/**
 * 네트워크
 * 
 * @param {number} n 컴퓨터의 개수
 * @param {number[][]} computers 연결에 대한 정보가 담긴 2차원 배열
 */
function solution(n, computers) {
    let answer = 0;
    
    let visited = new Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        if(!visited[i]){
            answer++;
            dfs(i);
        }        
    }

    function dfs(idx) {
        visited[idx] = true;
        computers[idx].map((computer, j) => {
            if(!visited[j] && computer === 1){
                dfs(j);
            }
        });
    }

    console.log(answer);
    

    return answer;
}

solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]);     // 2
// solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]);     // 1


/**

ex1) n = 3, computers = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]

i = 0, answer = 1

dfs(0)

visited[0] = true
computers [1,1,0]
j = 0, pass 
j = 1, computer = 1, 

dfs(1)

visited[1] = true
computers [1,1,0]
j = 0, pass
j = 1, pass
j = 2, pass

i = 1, pass
i = 2, answer = 2 

dfs(2)

visited[2] = true
computers [0,0,1]
j = 0, pass
j = 1, pass
j = 2, pass

 */