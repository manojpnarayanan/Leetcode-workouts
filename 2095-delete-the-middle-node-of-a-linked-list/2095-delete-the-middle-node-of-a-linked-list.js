/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(!head || head.next ===null){
        return null
    }
    let curr=head
    let length=0;
    while(curr){
        length++
        curr=curr.next
    }
    console.log(length);
    let mid=Math.floor(length/2);
    curr=head
    for(let i=0;i<mid-1;i++){
        curr=curr.next
    }
    curr.next=curr.next.next
    return head
};