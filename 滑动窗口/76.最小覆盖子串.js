/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let windows = {}
    let need = {}
    // 初始化need
    for (let i of t) {
        // console.log(need[i]);
        need[i] = (need[i] || 0) + 1
    }

    let left = 0, right = 0
    let valid = 0
    //记录最小覆盖子串的起始索引和长度
    let start = 0, len = Number.MAX_VALUE
    while (right < s.length) {
        let c = s[right]
        right++
        // 对象中的某个值是否存在
        if (c in need) {
            windows[c] = (windows[c] || 0) + 1
            if (windows[c] == need[c]) {
                valid++
            }
        }

        //判断左侧窗口是否要收缩
        while (valid === Object.keys(need).length) {
            if (right - left < len) {
                start = left
                len = right - left
            }
            let d = s[left]
            left++
            // 更新窗口数据
            if (d in need) {
                if (windows[d] == need[d]) {
                    valid--
                }
                windows[d]--
            }
        }
    }
    return len == Number.MAX_VALUE ? "" : s.substr(start, len)

};