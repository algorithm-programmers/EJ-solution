/**
 * 이중우선순위큐
 * 
 * @param {Array} operations 
 */
function solution(operations) {
    let answer = [];

    let queue = [];
    operations.map(op => {
        const opArr = op.split(" ");
        const type = opArr[0];
        const number = parseInt(opArr[1]);

        if(type === "I"){
            queue.push(number);
        }else if(type === "D"){
            
            let target = 0;
            if(number > 0){
                target = Math.max(...queue);

                // 공통 부분 삭제
                // const max = Math.max(...queue);
                // const maxIdx = queue.indexOf(max);
                // queue.splice(maxIdx, 1);
                
            }else{
                target = Math.min(...queue);

                // const min = Math.min(...queue);
                // const minIdx = queue.indexOf(min);
                // queue.splice(minIdx, 1);

            }

            const targetIdx = queue.indexOf(target);
            queue.splice(targetIdx, 1);
        }
    });

    if(!queue.length){
        answer = [0, 0]
    }else{
        const maxQueue = Math.max(...queue);
        const minQueue = Math.min(...queue);
        answer = [maxQueue, minQueue]
    }

    console.log(answer);

    return answer;
}

solution(["I 16","D 1"]);
solution(["I 7","I 5","I -5","D -1"]);
// solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])