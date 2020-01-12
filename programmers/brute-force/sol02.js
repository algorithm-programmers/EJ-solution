function isPrime(n){
    let count = 0;
    for(let i = 1; i <= n; i++){
        if(n%i === 0){
            count ++;
        }
    }
    return count === 2 ? true : false;
}

// console.log(isPrime(177));

const permutator = (inputArr) => {
    let result = [];
  
    const permute = (arr, m = "") => {
        if (arr.length === 0) {
            // console.log('m ===>', parseInt(m), arr.length);
            if(isPrime(parseInt(m))){
                result.push(parseInt(m))
            }
        } else {
            arr.forEach((item, i) => {
                const curr = arr.slice();
                const next = curr.splice(i, 1);
                const number = arr.join("")
                if(isPrime(number)){
                    result.push(parseInt(number))
                }
                // console.log(arr, arr.length, curr);
                permute(curr.slice(), m + next)
            })
        }
   }
  
   permute(inputArr)
  
   return Array.from(new Set(result));
}

function solution(numbers){
    const numArr = numbers.split("");
    const primeArr = permutator(numArr);
    console.log('result =>', primeArr);
    return primeArr.length;
}

solution("177")

// numbers 로 구할 수 있는 조합을 구하기 - 순열