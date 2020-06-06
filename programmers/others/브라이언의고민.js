/**
 * 브라이언의 고민
 * 대문자 : 원래 문구, 소문자 : 특수문자
 * 한 번 쓰인 소문자는 다시 쓰일 수 없다.
 * 
 * @param {string} sentence 
 */
function solution(sentence) {
    const regexp = /[a-z]+/g;
    const symbols = sentence.match(regexp);
    console.log(symbols);

    let currVal = symbols[0], count = 0, symbolSum = {};
    for (let i = 0; i < symbols.length + 1; i++) {
        const symbol = symbols[i];
        if (symbol === currVal) {
            count += 1;
        } else {
            // symbolSum.push({ [currVal]: count });
            symbolSum[currVal] = count;
            currVal = symbol;
            count = 1;
        }
    }
    console.log(symbolSum);

    const wordList = Object.keys(symbolSum);
    const wordCount = wordList.length;
    console.log(wordList, wordCount);

    let answer = [];
    let str = sentence;
    wordList.map(word => {
        const count = symbolSum[word];
        let sen = "";
        if (count > 2) {
            const idx = sentence.lastIndexOf(word);
            const re = new RegExp(word, 'g');   // 변수 치환하기
            sen = str.slice(0, idx + 2).replace(re, '');
            str = str.slice(idx + 2);
        } else {
            // WbORLbD
            const startIdx = sentence.indexOf(word) + 1;
            const lastIdx = sentence.lastIndexOf(word);
            console.log(str);

            const re = new RegExp(word, 'g');   // 변수 치환하기
            sen = str.replace(re, '');
        }
        answer.push(sen);
    })

    console.log(answer.join(" "));

    return answer.join(" ");
}

// solution("HaEaLaLaObWORLDb");
// solution("SpIpGpOpNpGJqOqA");
solution("AxAxAxAoBoBoB");