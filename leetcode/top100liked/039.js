/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    // 오름차순 결과 
    candidates.sort((a, b) => a - b);
    
    let answer = [];

    dfs([], 0, 0);

    /**
     * 
     * @param {number[]} path current 
     * @param {number} sum 현재 합계
     * @param {number} index index
     */
    function dfs(path, sum, index) {
        if(sum === target){
            answer.push(path);
            return;
        }
        
        for (let i = index; i < candidates.length; i++) {
            const el = candidates[i];
            if(sum + el <= target){
                dfs([...path, el], sum + el, i);
            }
        }
    }

    console.log(answer);

    return answer;
};

combinationSum([2, 3, 6, 7], 7);