/**
 * 스택/큐 - 주식 가격
 * 초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 떨어지지 않은 기간은 몇 초인가?
 * 
 * @param {Array} prices 주식 가격 배열
 */
function solution(prices) {
    let answer = [];

    while(prices.length > 0){
        const first = prices.shift();
        const smaller = prices.findIndex(price => price < first);
        
        if(smaller > -1){
            // *** 가격이 떨어졌을 때, 가격이 1초간은 떨어지지 않는 것으로 본다.
            answer.push(smaller + 1);
        }else{
            // 가격이 떨어지지 않았을 때
            answer.push(prices.length);
        }
    }

    console.log(answer);

    return answer;
}

solution([1, 2, 3, 2, 3]);