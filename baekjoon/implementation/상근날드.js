const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let data = [];

rl.on('line', (line) => {
    data.push(parseInt(line));

}).on('close', () => {
    const burgers = data.slice(0, 3);
    const coke = data[3];
    const soda = data[4];
    solution(burgers, coke, soda);

    process.exit();
});

/**
 * 상근날드
 * 햄버거와 음료를 하나씩 골라, 세트로 구매하면, 가격의 합계에서 50원을 뺀 가격이 된다.
 * 가장 싼 세트 메뉴의 가격을 출력한다.
 * 
 * @param {number[]} burgers 버거의 가격 (상덕버거, 중덕버거, 하덕버거 순)
 * @param {number} coke 콜라의 가격
 * @param {number} soda 사이다의 가격
 */
function solution(burgers, coke, soda) {
    let cheaperPrice = 4000;
    burgers.map(burger => {
        cheaperPrice = Math.min(burger + coke, burger + soda, cheaperPrice);
    });

    console.log(cheaperPrice - 50);
}