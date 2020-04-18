/**
 * N으로 표현
 *
 * @param {number} N 사칙연산에 이용할 숫자
 * @param {number} number 연산하여 구할 숫자
 */
function solution(N, number) {
  const cache = new Array(9).fill(0).map((el) => new Set());
  for (let i = 1; i < 9; i++) {
    cache[i].add("1".repeat(i) * N);
    for (let j = 0; j < i; j++) {
        for(const arg1 of cache[j]){
            for(const arg2 of cache[i-j]){
                cache[i].add(arg1 + arg2);
                cache[i].add(arg1 - arg2);
                cache[i].add(arg1 * arg2);
                cache[i].add(arg1 / arg2 >> 0);
            }
        }
    }
    if(cache[i].has(number)){
        return i;
    }
  }
  return -1;
}

console.log(solution(5, 12));   //  4
// solution(2, 11);
