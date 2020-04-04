/**
 * 소수 찾기
 * 
 * @param {string} numbers 임의의 숫자
 */
function solution(numbers) {
  var answer = 0;

  let tmpArr = [];
  const numberArr = numbers.split("");
  for (let i = 1; i < numberArr.length; i++) {
    makeNumberArr(numberArr, 0, i, tmpArr);
  }

  console.log(tmpArr);
  answer = tmpArr.length;

  return answer;
}

// solution("17");
solution("177");
// solution("011");

function makeNumberArr(numArr, depth, purposeNum, tmpArr) {
  console.log(numArr, '/depth =>', depth, '/purpose =>', purposeNum, tmpArr);

  if (depth === purposeNum) {
    // 끝

    let strBuiler = [];
    for (let i = 0; i < purposeNum; i++) {
        strBuiler.push(numArr[i]);
    }
    strBuiler = Number(strBuiler.join(""));
    if(isPrime(strBuiler) && tmpArr.indexOf(strBuiler) === -1){
        tmpArr.push(strBuiler)
    }

    const numberStr = Number(numArr.join(""));
    if (isPrime(numberStr) && tmpArr.indexOf(numberStr) === -1) {
      tmpArr.push(numberStr);
    }

    return;
  }

  for (let i = depth; i < numArr.length; i++) {
    swap(numArr, i, depth);
    makeNumberArr(numArr, depth + 1, purposeNum, tmpArr);
    swap(numArr, i, depth); //  배열을 원래 상태로 돌린다.
  }
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
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
