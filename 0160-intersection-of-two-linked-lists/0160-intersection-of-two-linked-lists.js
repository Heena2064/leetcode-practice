/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let A = headA;
    let B = headB;

    while (A !== B) {
        if (A === null) {
            A = headB;
        } else {
            A = A.next;
        }

        if (B === null) {
            B = headA;
        } else {
            B = B.next;
        }

    }
    return A;

};