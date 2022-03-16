var reverseBetween = function (head, left, right) {
    let success = new ListNode()
    var reverseN = function (head, right) {
        if (right == 1) {
            success = head.next
            return head
        }
        let last = reverseN(head.next, right - 1)
        head.next.next = head
        head.next = success
        return last

    }
    if (left == 1) {
        return reverseN(head, right)
    }
    head.next = reverseBetween(head.next, left - 1, right - 1)
    return head
};