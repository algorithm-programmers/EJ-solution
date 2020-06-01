/**
 * 같은 숫자는 싫어
 * 
 * @param {number[]} arr 
 */
function solution(arr) {
    const length = arr.length;

    let result = [];
    result.push(arr[0]);

    for (let i = 0; i < length; i++) {
        const el1 = arr[i];
        const el2 = arr[i+1];

        if(el1 === el2){
            continue;
        }else{
            el2 !== undefined && result.push(el2);
        }
    }

    console.log(result);
    return result;
}

solution([1,1,3,3,0,1,1]); // [1,3,0,1]


// 한 줄 필터링
const filtered = (arr) => arr.filter((el, idx) => el !== arr[idx + 1]);