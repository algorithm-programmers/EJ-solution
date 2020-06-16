/**
 * 올바른 괄호
 * 
 * @param {string} params 
 */
function solution(string) {

    if(string[0] === ")"){
        return false;
    }

    let queue = [];
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        if(element === "("){
            queue.push(element);
        }else{
            const lastElement = queue[queue.length - 1];
            if(lastElement === "("){
                queue.shift();
            }else{
                return false;
            }
        }
    }

    console.log(queue);

    if(queue.length > 0){
        return false;
    }else{
        return true;
    }
}

// solution("()()");
// solution("(())()");
// solution(")()(");
solution("(()(")