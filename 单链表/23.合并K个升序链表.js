// var mergeKLists = function (lists) {
//     let map = new Map()
//     lists.forEach(head => {
//         while (head) {
//             if (map.has(head.val)) {
//                 let temp = map.get(head.val)
//                 temp[1].next = head
//                 temp[1] = temp[1].next
//                 head = head.next
//             } else {
//                 map.set(head.val, [head, head])
//                 head = head.next
//             }
//         }

//     });

//     let newLists = [...map]
//     if (!newLists.length) return null
//     newLists.sort((a, b) => a[0] - b[0])
//     newLists.reduce((a, b) => {
//         a[1][1].next = b[1][0]
//         return b
//     })
//     return newLists[0][0]
// }

var mergeKLists = function (lists) {
    // 遍历所有节点将节点值提取到数组中
    const len = lists.length
    if (len == 0) return null
    if (len == 1) return lists[0]
    let arr = []
    for (let i = 0; i < len; i++) {
        let temp = lists[i]
        while (temp) {
            arr.push(temp.val)
            temp = temp.next
        }
    }

    //数组排序
    arr.sort((a, b) => a - b)

    //遍历数组将数组内容重新转化为链表
    //创建一个新链表
    let heap = new ListNode()
    let cur = heap
    for (let i = 0, len = arr.length; i < len; i++) {
        let node = new ListNode(arr[i])
        cur.next = node
        cur = cur.next
    }
    return heap.next
}