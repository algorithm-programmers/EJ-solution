/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    function findLen(node){
        if(!node){
            return 0;
        }else{
            return findLen(node.next) + 1;
        }
    }
    
    const len = findLen(head);
    let idx = len - n - 1; // while(idx--) 수행하기 위해서 (-1)을 해준다.
    
    // idx 위치의 노드 찾기 -> curr
    let curr = head;
    if(idx < 0){ // 예외 처리
        return curr.next;
    }else{
        while(idx--){
            curr = curr.next;
        }
    }
    
    // remove at idx position
    curr.next = curr.next.next;
    
    return head;
};