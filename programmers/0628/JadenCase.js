/**
 * JadenCase 문자열 만들기
 * 첫 문자는 대문자, 그 외의 알파벳은 소문자인 문자열
 * 
 * @param {string} string 
 */
function solution(string) {
    let answer = "";

    let isUpper = false;
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        const charCode = string.charCodeAt(i);

        if(isUpper || i === 0){
            answer += element.toUpperCase();
        }else{
            answer += element.toLowerCase();
        }

        // 빈 칸 체크
        if(charCode === 32){
            isUpper = true;
        }else{
            isUpper = false;
        }
    }

    console.log(answer);
    
    return answer;
}

// solution("3people unFollowed me");
solution("for the last week");

/*

0 : 48
9 : 57
(빈칸) : 32

*/