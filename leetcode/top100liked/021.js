/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let list = new ListNode(-1, null),
        mergedHead = list;
    
    while(l1 && l2){
        if(l1.val > l2.val){
            mergedHead.next = l2;
            l2 = l2.next;
        }else{
            mergedHead.next = l1;
            l1 = l1.next;
        }
        mergedHead = mergedHead.next;
        // console.log(mergedHead);
    }
    mergedHead.next = l1 || l2; // 마지막 노드 처리
    
    // console.log('-------')
    // console.log(list);
    return list.next;
};