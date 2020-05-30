/**
 * 문자열 압축
 * 
 * @param {string} s 
 */
function solution(s) {
    const length = s.length;
    let answer = length;

    for (let i = 1; i <= length / 2; i++) {
        let count = 1;
        let resultStr = "";
        let tempStr = s.substr(0, i);

        for (let j = i; j <= length; j += i) {
            let subTempStr = s.substr(j, i);
            console.log(j+"/"+count + "/"+ tempStr+ "/"+subTempStr);
            
            if (tempStr === subTempStr) {
                count++;
            } else {
                // count 가 1이면 문자만 추가
                if (count === 1) {
                    resultStr += tempStr;
                } else {
                    resultStr += count + tempStr;
                }
                tempStr = subTempStr;
                count = 1;
            }
        }

        console.log(resultStr, resultStr.length);

        if ((length / i) !== 0) {
            resultStr += s.substr((length / i) * i)
        }
        if (answer > resultStr.length) {
            answer = resultStr.length;
        }
    }
    // console.log(answer);

    return answer;
}

solution("aabbaccc");   // 7
// solution("ababcdcdababcdcd");   // 9
// solution("abcabcdede");     // 8
// solution("xababcdcdababcdcd");  // 17