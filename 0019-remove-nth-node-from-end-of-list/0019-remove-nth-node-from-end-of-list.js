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
var removeNthFromEnd = function (head, n) {
    let current = head;
    let length = 0;

    while (current !== null) {
        length++;
        current = current.next;
    }

    if (n === length) {
        return head.next;
    }

    let steps = length - n - 1;

    current = head;

    for (i = 0; i < steps; i++) {
        current = current.next;
    }


    current.next = current.next.next;

    return head;

};