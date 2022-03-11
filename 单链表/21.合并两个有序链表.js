var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode()
    let p = dummy
    let p1 = list1, p2 = list2

    while (p1 != null && p2 != null) {
        if (p1.val < p2.val) {
            p.next = p1
            p1 = p1.next
        } else {
            p.next = p2
            p2 = p2.next
        }
        p = p.next
    }
    //如果p1还有剩
    if (p1 != null) {
        p.next = p1
    }
    //如果p2还有剩
    if (p2 != null) {
        p.next = p2
    }

    return dummy.next

};