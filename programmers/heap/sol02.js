/**
 * 라면 공장
 * 라면 공장에서는 하루에 밀가루를 1톤씩 사용합니다. 오늘 0일.
 * 
 * @param {number} stock 현재 공장에 남아있는 밀가루 수량 stock
 * @param {array} dates 해외 공장의 밀가루 공급 일정
 * @param {array} supplies 해외 공장에서 해당 시점에 공급 가능한 밀가루 수량
 * @param {number} k 원래 공장으로부터 공급받을 수 있는 시점 (k일 후 공급받음)
 */
function solution(stock, dates, supplies, k){
    let answer = 0;

    let currDate = stock, stackedStock = stock;
    while(currDate <= k){
        dates.map((date, idx) => {
            currDate += date;
            const volume = supplies[idx];
            
            // 현재 날짜보다 창고 수량이 부족하면...
            if(currDate >= stackedStock){
                stackedStock += volume;                
                answer += 1;
            }
        })
    }

    return answer;
}

solution(4, [4,10,15], [20,5,10], 30)