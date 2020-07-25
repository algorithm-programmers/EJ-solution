/**
 * 짝지어 제거하기
 * 
 * @param {string} s 문자열
 */
function solution(s) {
    const sArr = s.split("");
    console.log(sArr);

    while(canRemove(sArr)){
        for (let i = 0; i < sArr.length - 1; i++) {
            const currElement = sArr[i];
            const nextElement = sArr[i+1];
            if(currElement === nextElement){
                sArr.splice(i, 2);
            }
        }
    }

    console.log(sArr);

    return sArr.length === 0 ? 1 : 0;
}

function canRemove(arr){
    for (let i = 0; i < arr.length - 1; i++) {
        const currElement = arr[i];
        const nextElement = arr[i+1];
        if(currElement === nextElement){
            return true;
        }
    }
    return false;
}

solution("baabaa");
// solution("cdcd");