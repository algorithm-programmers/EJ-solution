/**
 * 짝지어 제거하기
 * 
 * @param {string} s 문자열
 */
function solution(s) {

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        const currElement = s[i];

        if (stack[stack.length - 1] === currElement) {
            stack.pop();
        } else {
            stack.push(currElement);
        }

    }

    console.log(stack);

    return stack.length === 0 ? 1 : 0;
}

solution("baabaa");
// solution("cdcd");