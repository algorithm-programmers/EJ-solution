/**
 * 2016년 
 * 윤년, 2016년 a월 b일은 무슨 요일인가?
 * 예1) 16/01/01 => 금요일
 * 예2) 16/05/24 => 화요일
 * 
 * @param {number} a 월
 * @param {number} b 일
 */
function solution(a, b) {
    const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const yoils = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
    const totalYoil = 7;

    let dateCount = b;
    for (let i = 1; i < a; i++) {
        dateCount += months[i-1];
    }
    
    let answerIdx = dateCount%totalYoil;
    answerIdx = answerIdx === 0 ? totalYoil - 1 : answerIdx - 1;

    console.log(yoils[answerIdx]);

    return yoils[answerIdx];
}

// solution(5, 24);    // "TUE"
// solution(1, 1);    // "FRI"
// solution(1, 2);    // "SAT"
// solution(2, 1);
// solution(2, 29);
solution(12,1)