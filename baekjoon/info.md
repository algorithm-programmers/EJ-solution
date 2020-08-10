# 입력

#### 한 줄 입력

```
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", function(line) {
  console.log(line);
  rl.close();
}).on("close", function() {
  process.exit();
});
```

#### 공백 구분 입력

```
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map((el) => parseInt(el));
}).on('close', function () {
    console.log(input[0] + input[1]);
    process.exit();
});
```

#### 여러 줄 입력

```
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line)
}).on('close', function () {
    console.log(input);
    process.exit();
});
```

#### 백준 사이트 입출력 방법
> https://www.acmicpc.net/help/language

```
var fs = require("fs")

// 문자 하나
var input = fs.readFileSync("/dev/stdin").toString()

// 한 칸 띄어쓰기로 구분
// input[0], input[1] 배열에서 꺼내쓰면 된다.
var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")

// 줄바꿈으로 구분
var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")

// 만약 인풋값이 숫자라면
var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(function(a) {
    return +a
  })
```

# 출력

```
console.log()
```
