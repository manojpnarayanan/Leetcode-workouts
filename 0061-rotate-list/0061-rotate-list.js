/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next || k===0) return head;
    let temp=head
    let size=0
    while(temp){
        size++
        temp=temp.next
    }
    k=k%size
    for(let i=0;i<k;i++){
    let curr=head

    while(curr.next && curr.next.next){
        curr=curr.next
    }
    let value=curr.next
    curr.next=null
    value.next=head
    head=value
    }
    return head
};