/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let window = {}
    let left = 0, right = 0
    let res = 0 //记录结果
    while (right < s.length) {
        let c = s[right]
        right++
        // 窗口数据更新
        window[c] = (window[c] || 0) + 1
        // 判断左侧窗口是否要收缩
        while (window[c] > 1) {
            let d = s[left]
            left++
            window[d] = (window[d] || 0) - 1
        }
        res = Math.max(res, right - left)
    }
    return res
};
let s = "abcabcbb"
console.log(lengthOfLongestSubstring(s));