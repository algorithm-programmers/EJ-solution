function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let finished_trucks = [], moving_trucks = [];
    moving_trucks.push({weight: truck_weights.shift(), steps: bridge_length});
    while(moving_trucks.length > 0){
        let weight_sum = 0;
        for (const moving_truck in moving_trucks) {
            if (moving_trucks.hasOwnProperty(moving_truck)) {
                const element = moving_trucks[moving_truck];
                weight_sum += element;
            }
        }

        if(weight_sum < weight){
            moving_trucks.push({weight: truck_weights.shift(), steps: bridge_length});
        }

        answer++;
    }
    console.log(answer);
    return answer;
}

solution(2, 10, [7,4,5,6]);
// solution(100, 100, [10]);