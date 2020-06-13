/**
 * 영어 끝말잇기
 * 
 * @param {number} n 인원
 * @param {string[]} words 끝말잇기 단어
 */
function solution(n, words) {
    let wordList = [words[0]];
    
    const length = words.length;
    for (let i = 1; i < length; i++) {
        const currWord = words[i];
        const prevWord = words[i-1];
        const personNum = (i+1) % n === 0 ? n : (i+1) % n;
        const personOrder = parseInt(i / n) + 1;
        
        const currFirstLetter = currWord && currWord[0];
        const prevLastLetter = prevWord[prevWord.length - 1];
        
        if(prevLastLetter !== currFirstLetter || wordList.indexOf(currWord) > -1){
            console.log(personNum, personOrder);
            return [personNum, personOrder];
        }

        wordList.push(currWord);
    }

    return [0, 0];
}

solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]);