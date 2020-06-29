function solution(nodelist) {
    let rootNode;
    let preorder = [];
    let postorder = [];

    const Node = function (id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.left = null;
        this.right = null;
    }

    const addNode = (id, x, y) => {
        if (!rootNode) {
            rootNode = new Node(id, x, y);
        } else {
            _addNode(id, x, y, rootNode);
        }
    }

    const _addNode = (id, x, y, parentNode) => {
        const side = x < parentNode.x ? 'left' : 'right';

        if (!parentNode[side]) {
            parentNode[side] = new Node(id, x, y);
        } else {
            _addNode(id, x, y, parentNode[side]);
        }
    }

    const makePreorder = node => {
        preorder.push(node.id);
        if (node.left) {
            makePreorder(node.left);
        }
        if (node.right) {
            makePreorder(node.right);
        }
    }

    const makePostorder = node => {
        if (node.left) {
            makePostorder(node.left);
        }
        if (node.right) {
            makePostorder(node.right);
        }
        postorder.push(node.id);
    }

    const newNodeList = nodelist.map(([x, y], idx) => [idx + 1, x, y]);
    newNodeList.sort(([, , ya], [, , yb]) => yb - ya);
    newNodeList.forEach(([id, x, y]) => addNode(id, x, y));

    makePreorder(rootNode);
    makePostorder(rootNode);

    return [preorder, postorder];
}

solution([[5, 3], [11, 5], [13, 3], [3, 5], [6, 1], [1, 3], [8, 6], [7, 2], [2, 2]]);

/*
다른 사람의 풀이 참고.
이전 풀이는 전역 변수를 사용한 부분이 마음에 들지 않았었는데 
배열에 push 하는 간단한 방법이 있었다.
*/