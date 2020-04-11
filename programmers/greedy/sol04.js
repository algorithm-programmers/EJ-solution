function solution(people, limit) {
    let answer = 0;

    people.sort((a, b) => a - b);
    
    let stack = [people.shift()];
    
    while(people.length > 0 || stack.length > 0){
        const first = people.shift();
        if(first < 40){
            stack = [];
            continue;
        }
        const sum = stack.reduce(((a, b) => a + b), 0);
        console.log('===>', stack, first, answer);
        
        stack.push(first);

        if(sum + first >= limit){
            console.log('first', first, sum);
            
            answer += 1;
            if(sum + first === limit){
                stack = [];
            }else{
                stack = [first];
            }
        }

        if(people.length === 0){
            answer += 1;
            stack = [];
        }
    }
        
    console.log(stack, answer);
    return answer;
}

// solution([70, 50, 80, 50], 100);
// solution([70, 80, 50], 100);
// solution([10,20,30,40,50,60,70,80,90], 100);    //5
// solution([40,40,40], 100);
solution([50, 60, 70, 60, 110], 240);