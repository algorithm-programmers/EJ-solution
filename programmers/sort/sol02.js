/**
 * 가장 큰 수
 *
 * @param {Array} numbers 정수 배열
 */
function solution(numbers) {
  let answer = "";

  // 앞자리가 큰 순서대로 구하기
  const filteredNumber = numbers
    .map(num => num + "")
    .sort((a, b) => {
      const num1 = a + b,
        num2 = b + a;
      return num2 - num1;
    })
    .join("");

  // 000 일 경우에 0 만 리턴한다
  answer = filteredNumber[0] === "0" ? "0" : filteredNumber;

  return answer;
}

solution([6, 10, 2]);
// solution([0, 0, 0]);
