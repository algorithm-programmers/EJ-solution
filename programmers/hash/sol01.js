function solution1(participant, completion) {
    let answer = '';
    const newObj = completion.reduce((acc, c) => {
        acc[c] = acc[c] ? acc[c] + 1 : 1;
        return acc;
    }, {});
    
    answer = participant.find(el => {
        if(newObj[el]){
            newObj[el] -= 1
        }else{
            return true;
        }
    });
    return answer;
}
// 더 깔끔한 방법이다.

function solution2(participant, completion){
    let answer = '';
    const newObj = participant.reduce((acc, cur) => {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
        return acc;
    }, {});
    
    completion.forEach(el => {
        if(newObj[el]){
            newObj[el] -= 1;
        }
        if(newObj[el] === 0){
            delete newObj[el]
        }
    });
    answer = Object.keys(newObj)[0]
    return answer;
}

const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

solution1(participant, completion);