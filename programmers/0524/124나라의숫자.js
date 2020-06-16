/**
 * 124 나라의 숫자
 * 1,2,4 숫자만 사용하는 나라
 * 
 * @param {number} n 자연수
 */
function solution(n) {
    // 1 2 4, 11 12 14, 21 22 24, 41 42 44 ...
    // 2^0 2^1 2^2 
    
    let answer = '';
    while(n > 0){
        let remainer = n % 3;
        n = parseInt(n / 3);

        if(remainer === 0){
            n -= 1;
            remainer = 4;
        }

        answer = remainer + answer;
    }
    
    console.log(answer);

    return answer;
}

// solution(1);    //1
// solution(2);    //2
// solution(3);    //4
// solution(4);    //11
solution(11);   // 42
// solution(13);   // 111



/**
 * idx  num
 * 0    1
 * 1    2
 * 2    4
 * 3    11
 * 4    12
 * 5    14
 * 6    21
 * 7    22
 * 8    24
 * 9    31
 * 10   32
 * 34
 * 41
 * 42
 * 44
 * 111
 * 112
 * 114
 * 121
 * 122
 * 124
 */

 
 // index 1부터 모든 경우의 수 구하려고 했으나 실패