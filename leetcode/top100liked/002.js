/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const node = new ListNode();
    const head = node;
    let current = head;
    let carry = 0;
    
    while(l1 || l2 || carry){
        console.log(l1, l2);
        
        current.next = new ListNode();
        current = current.next;
        
        let sum = (l1? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        
        carry = (sum >= 10) ? 1 : 0;
        current.val = sum % 10;
        
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    return head.next;
};

addTwoNumbers([2, 4, 3], [5, 6, 4]);
addTwoNumbers([0, 1], [0, 1, 2]);
addTwoNumbers([], [0, 1]);
addTwoNumbers([9, 9], [1]);