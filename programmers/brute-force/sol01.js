function solution(answers) {
    let answer = [];
    const student1 = [1, 2, 3, 4, 5];
    const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let scores = [0, 0, 0];
    answers.forEach((a, idx) => {
        if(a === student1[idx%student1.length]) scores[0] ++;
        if(a === student2[idx%student2.length]) scores[1] ++;
        if(a === student3[idx%student3.length]) scores[2] ++;
    })

    const maxScore = Math.max(...scores);
    scores.forEach((s, idx) => {
        if(maxScore === s) answer.push(idx + 1)
    })

    return answer;
}

[[1,2,3,4,5], [2,3,4,5,1]].forEach(item => {
    console.log(solution(item));
})