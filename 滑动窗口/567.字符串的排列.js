/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let windows = {}
    let need = {}

    //初始化
    for (let i of s1) {
        need[i] = (need[i] || 0) + 1
    }

    let left = 0, right = 0
    let valid = 0
    while (right < s2.length) {
        // 加入字符
        let c = s2[right]
        right++
        //////
        if (c in need) {
            windows[c] = (windows[c] || 0) + 1
            if (windows[c] == need[c]) {
                valid++
            }
        }

        //////

        // 判断收缩
        while (right - left >= s1.length) {
            ////
            //判断是否满足题目需求
            if (valid === Object.keys(need).length) {
                return true
            }
            ////
            let d = s2[left]
            left++
            /////
            if (d in need) {
                if (windows[d] == need[d]) {
                    valid--
                }
                windows[d] = (windows[d] || 0) - 1
            }
            /////
        }
    }
    return false
};

let s1 = "ab", s2 = "eidboaoo"
let res = checkInclusion(s1, s2)
console.log(res);