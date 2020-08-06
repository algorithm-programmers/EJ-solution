const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];

rl.on('line', (line) => {
    arr.push(line.split(" ").map(el => parseInt(el)));

}).on('close', () => {
    const deleteNodeNum = arr[2][0];
    solution(arr[1], deleteNodeNum);

    process.exit();
});

/**
 * 트리
 * 
 * @param {number} arr 각 노드의 부모 리스트
 * @param {number} deleteNodeNum 지울 노드의 번호
 */
function solution(arr, deleteNodeNum) {
    let tree = arr.map((el, idx) => {
        return { value: idx, parent: el };
    })
    
    // console.log(tree);

    deleteNode(deleteNodeNum);

    function deleteNode(num) {
        let deleteNodeList = [];
        tree = tree.filter(el => {
            const { value, parent } = el;
            if (value === num || parent === num) {
                deleteNodeList.push(value);
            } else {
                return true;
            }
        })

        // console.log(deleteNodeList);
        deleteNodeList.forEach(el => {
            deleteNode(el);
        });
    }

    const parents = tree.map(el => el.parent);
    const values = tree.map(el => el.value);

    // console.log(parents);
    // console.log(values);
    
    const leaves = values.filter(el => !parents.includes(el));
    console.log(leaves.length);
}