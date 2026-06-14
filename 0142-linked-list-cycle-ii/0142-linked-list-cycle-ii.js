/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let slow=head
  let fast=head
  while(fast && fast.next){
    slow=slow.next
    fast=fast.next.next
    if(slow===fast){
        let start=head
        let index=0;
        while(start!=slow){
            start=start.next
            slow=slow.next
            index++
        }
        return start
    }
  }  
    return null
};