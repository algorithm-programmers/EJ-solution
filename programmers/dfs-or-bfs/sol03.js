/**
 * 단어 변환
 * 
 * @param {String} begin 시작 단어
 * @param {String} target 변환 목표 단어
 * @param {String[]} words 단어의 집합
 */
function solution(begin, target, words) {
    let answer = 0;

    if(words.indexOf(target) === -1){
        return 0;
    }

    const length = words.length;
    
    let checked = new Array(length).fill(false);

    for (let i = 0; i < length; i++) {
        const beginLetter = begin[i], targetLetter = target[i];
        if(beginLetter !== targetLetter){
            // const result = words.find(word => );
            // console.log(beginLetter, targetLetter, result);
            
        }
    }

    // words.filter()

    return answer;
}

solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]);     // 4