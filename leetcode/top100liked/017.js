/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if(digits.length === 0 || !digits){
        return [];
    }

    const map = {
		"2": ["a", "b", "c"],
		"3": ["d", "e", "f"],
		"4": ["g", "h", "i"],
		"5": ["j", "k", "l"],
		"6": ["m", "n", "o"],
		"7": ["p", "q", "r", "s"],
		"8": ["t", "u", "v"],
		"9": ["w", "x", "y", "z"]
	};

    let psbLetters = [];

    // 가능한 문자열 구하기
    for (let i = 0; i < digits.length; i++) {
        const element = digits[i];
        psbLetters.push(map[element])
    }

    // 한 줄로 문자열 구하기
    // psbLetters = digits.split("").map(digit => map[digit]);

    // 조합 구하기
    const answer = psbLetters.reduce((acc, psbLetter) => {
        let list = [];
        psbLetter.forEach(letter => {
            list = list.concat(acc.map(a => a + letter));
        });
        return list;
    })

    console.log(answer);
    return answer;
};

letterCombinations("23");