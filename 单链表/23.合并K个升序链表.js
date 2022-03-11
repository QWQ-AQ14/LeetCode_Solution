var mergeKLists = function (lists) {
    let map = new Map()
    lists.forEach(head => {
        while (head) {
            if (map.has(head.val)) {
                let temp = map.get(head.val)
                temp[1].next = head
                temp[1] = temp[1].next
                head = head.next
            } else {
                map.set(head.val, [head, head])
                head = head.next
            }
        }

    });

    let newLists = [...map]
    if (!newLists.length) return null
    newLists.sort((a, b) => a[0] - b[0])
    newLists.reduce((a, b) => {
        a[1][1].next = b[1][0]
        return b
    })
    return newLists[0][0]
}