/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {

    let answer = [];

    go([], new Array(nums.length).fill(false));

    function go(arr, checked) {
        if(arr.length === nums.length){
            console.log('===>answer:', arr);
            answer.push(Array.from(arr)); // deep copy
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if(checked[i]){
                continue;
            }

            // 기본 순회 시작
            const el = nums[i];
            arr.push(el);
            
            checked[i] = true;

            console.log(i, 'push', arr, checked);
            
            go(arr, checked);
            // 기본 순회 끝
            
            // uncheck 상태로 만들어서 
            arr.pop();
            checked[i] = false;

            console.log(i, 'pop', arr, checked);
        }
    }

    console.log(answer);

    return answer;
};

permute([1, 2, 3]);