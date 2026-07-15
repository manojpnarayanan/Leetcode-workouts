/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let curr=node
    while(curr.next){
    curr.val=curr.next.val
    if(curr.next.next===null){
        curr.next=null
        break
    }
        curr=curr.next
    }
    
    
};