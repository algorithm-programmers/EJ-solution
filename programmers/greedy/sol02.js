/**
 * 조이스틱
 * 
 * @param {string} name 알파벳 이름
 */
function solution(name) {
    let answer = 0;
    const z = 'Z'.charCodeAt(0);
    const a = 'A'.charCodeAt(0);
    for (let i = 0; i < name.length; i++) {
        const c = name[i].charCodeAt(0);
        // answer += (z - c + 1) > c - a ? 
    }
    return answer;
}

solution("JEROEN");
solution("JAN");