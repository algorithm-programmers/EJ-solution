/**
 * JadenCase 문자열 만들기
 * 첫 문자는 대문자, 그 외의 알파벳은 소문자인 문자열
 * 
 * @param {string} string 
 */
function solution(string) {
    let answer = "";

    if(48 <= string.charCodeAt(0) && string.charCodeAt(0) <= 57){
        // 숫자일 경우
        answer += string[0];
    }else{
        // 문자일 경우
        answer += string[0].toUpperCase();
    }

    let isUpper = false;
    for (let i = 1; i < string.length; i++) {
        const element = string[i];
        const charCode = string.charCodeAt(i);

        if(isUpper){
            answer += element.toUpperCase();
        }else{
            answer += element.toLowerCase();
        }

        // 빈 칸일 경우
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