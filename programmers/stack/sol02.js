function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let finished_trucks = [], moving_trucks = [];
    for (let i = 0; i < truck_weights.length; i++) {
        const element = truck_weights[i];
        if(moving_trucks.length === 0){
            moving_trucks.push(element);
        }
        let n = bridge_length;
        while(moving_trucks && n > 0){
            const prev_element = truck_weights[i+1];
            if(weight > moving_trucks[0] + prev_element){
                moving_trucks.push(prev_element);
                n += bridge_length;
            }
            answer++;
            n--;
        }
    }
    console.log(answer);
    return answer;
}

// solution(2, 10, [7,4,5,6]);
solution(100, 100, [10]);