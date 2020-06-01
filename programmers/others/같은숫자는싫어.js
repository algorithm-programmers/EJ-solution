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
        console.log(el1);
        

        for (let j = i; j < length; j++) {
            const el2 = arr[j];
            if(el1 === el2){
                return;
            }else{
                result.push(el2);
            }
        }
    }

    console.log(result);
    
}

solution([1,1,3,3,0,1,1]); // [1,3,0,1]