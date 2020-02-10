function solution(heights) {
    var answer = [];
    var temp = [];
    var n = heights.length;
    while(n > 0){
        n--;
        if(temp.length < 1){
            continue;
        }
        var curr = heights.pop();
        temp.push(curr);
        for (let i = 0; i < temp.length; i++) {
            const el = temp[i];
            
        }
        console.log(temp);
    }
    
    
    return answer;
}

solution([6,9,5,7,4])