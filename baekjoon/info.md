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

# 출력

```
console.log()
```
