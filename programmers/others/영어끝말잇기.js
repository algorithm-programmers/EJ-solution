/**
 * 영어 끝말잇기
 * 
 * @param {number} n 인원
 * @param {string[]} words 끝말잇기 단어
 */
function solution(n, words) {
    const length = words.length;
    for (let i = 1; i < length; i++) {
        const currWord = words[i];
        const prevWord = words[i-1];
        const personIdx = i % n === 0 ? n : i % n;

        const currFirstLetter = currWord && currWord[0];
        const prevLastLetter = prevWord[prevWord.length - 1];
        console.log(prevLastLetter, currWord, currFirstLetter);

        if()
    }
}

solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]);