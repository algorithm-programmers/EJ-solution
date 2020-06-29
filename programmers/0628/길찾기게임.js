/**
 * 길 찾기 게임
 * 같은 레벨 = 같은 y 좌표
 * 
 * @param {number[][]} nodeinfo 
 */
let idx = 0;

function solution(nodeinfo) {

    const length = nodeinfo.length;

    // {no, x, y, left, right} 노드 객체 리스트
    let newNodeinfo = nodeinfo.map((node, idx) => {
        return { no: idx + 1, x: node[0], y: node[1], left: null, right: null }
    });

    // y 좌표 기준으로 정렬. 같은 레벨에선 x가 작은 값이 먼저.
    newNodeinfo.sort((a, b) => {
        if (a.y === b.y) {
            return a.x - b.x;
        }
        return b.y - a.y;
    });

    const rootNode = newNodeinfo[0];
    for (let i = 1; i < length; i++) {
        addNode(rootNode, newNodeinfo[i]);
    }

    // console.log(newNodeinfo);

    const preorder = makePreorder([], rootNode);
    idx = 0;
    const postorder = makePostorder([], rootNode);

    const result = [preorder, postorder];

    console.log(result);

    return result;
}

// 트리 노드 추가
function addNode(parent, child) {
    if (parent.x > child.x) {
        // left
        if (!parent.left) {
            parent.left = child;
        } else {
            addNode(parent.left, child);
        }
    } else {
        // right
        if (!parent.right) {
            parent.right = child;
        } else {
            addNode(parent.right, child);
        }
    }
}

// 전위 순회
function makePreorder(orderArr, parentNode) {
    if (parentNode) {
        // console.log('preorder', idx, orderArr, parentNode.no);

        orderArr[idx++] = parentNode.no;
        makePreorder(orderArr, parentNode.left);
        makePreorder(orderArr, parentNode.right);
        return orderArr;
    }
}

// 후위 순회
function makePostorder(orderArr, parentNode) {
    if (parentNode) {
        makePostorder(orderArr, parentNode.left);
        makePostorder(orderArr, parentNode.right);
        orderArr[idx++] = parentNode.no;
        return orderArr;
    }
}

solution([[5, 3], [11, 5], [13, 3], [3, 5], [6, 1], [1, 3], [8, 6], [7, 2], [2, 2]])