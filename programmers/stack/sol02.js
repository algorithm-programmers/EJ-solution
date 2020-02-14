/**
 * 스택/큐 - 다리를 지나는 함수
 * https://programmers.co.kr/learn/courses/30/lessons/42583?language=javascript
 * @param {number} bridge_length 다리 길이
 * @param {number} weight 다리가 견딜 수 있는 무게
 * @param {Array} truck_weights 트럭별 무게, 대기 트럭 배열
 */
function solution(bridge_length, weight, truck_weights) {
    let answer = 0; // 모든 대기 트럭이 다리를 건너는 시간
    let moving_trucks = [];
    
    // 대기 트럭이 있거나 다리를 건너는 트럭이 있는 동안의 시간을 잰다.
    while(truck_weights.length > 0 || moving_trucks.length > 0){

        let moving_weight = 0;  // 다리를 건너고 있는 트럭 무게의 합

        moving_trucks.map(moving_truck => {
            moving_weight += moving_truck.weight;
            moving_truck.steps--;
            if(moving_truck.steps === 0){
                moving_weight -= moving_trucks.shift().weight;
            }
        });
        
        const curr_truck = truck_weights[0];
        if(moving_weight + curr_truck <= weight){
            moving_weight += curr_truck;
            moving_trucks.push({weight: truck_weights.shift(), steps: bridge_length});
        }
        
        console.log(truck_weights, moving_trucks, moving_weight, weight);
        answer++;
    }
    console.log(answer);
    return answer;
}

solution(2, 10, [7,4,5,6]);
// solution(100, 100, [10]);
// solution(100, 100, [10,10,10,10,10,10,10,10,10,10]);