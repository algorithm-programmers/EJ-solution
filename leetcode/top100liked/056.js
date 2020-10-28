/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0];
    })
    // console.log(intervals);

    let answer = [];
    let prevLastNum = 0;

    intervals.map((interval, idx) => {
        let [a, b] = interval;

        if (idx > 0 && prevLastNum >= a) {
            let prevA = answer[answer.length - 1][0],
                prevB = answer[answer.length - 1][1];

            if (prevB > b) {
                b = prevB;
            }

            answer.pop();
            answer.push([prevA, b]);
        } else {
            answer.push(interval);
        }

        // console.log(answer);
        prevLastNum = answer[answer.length - 1][1];
    })

    console.log(answer);
    return answer;
};

// merge([[1,3],[2,6],[8,10],[15,18]]);
// merge([[1,4],[4,5]]);
// merge([[1,4],[0,4]]);
// merge([[1,4],[2,3]]);
// merge([[1, 4], [0, 2], [3, 5]]);
// merge([[1,3],[2,6],[8,10],[15,18]]);
merge([[1,4],[0,2],[3,5]]);


// 예외 상황이 많았다..