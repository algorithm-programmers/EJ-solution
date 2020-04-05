/**
 * 소수 찾기
 *
 * @param {string} numbers 임의의 숫자
 */
function solution(numbers) {
  let answer = 0;

  const numberArr = numbers.split("");
  let tmpArr = new Set();
  combi(numberArr, "");

  function combi(arr, str) {
    if (str.length > 0) {
      str = Number(str);
      if (!tmpArr.has(str)) {
        tmpArr.add(str);
        if (isPrime(str)) {
          answer++;
        }
      }
    }

    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        let copy = arr.slice(0);   // 복사
        copy.splice(i, 1);
        combi(copy, str + arr[i]);
      }
    }
  }

  console.log(answer);

  return answer;
}

function isPrime(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count === 2 ? true : false;
}

// solution("17");
// solution("177");
// solution("71");
solution("011");
// solution("13");
