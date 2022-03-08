/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let window = {}
    let need = {}

    // /初始化
    for (let i of p) {
        need[i] = (need[i] || 0) + 1
    }
    // console.log(need);
    let left = 0, right = 0
    let valid = 0
    let resArr = []
    while (right < s.length) {
        let c = s[right]
        right++

        ////
        if (c in need) {
            window[c] = (window[c] || 0) + 1
            if (window[c] == need[c]) {
                valid++
            }
        }
        ////


        //缩小窗口
        while (right - left >= p.length) {
            ////
            if (valid == Object.keys(need).length) {
                resArr.push(left)
            }

            ////
            let d = s[left]
            left++
            ////
            if (d in need) {

                if (window[d] == need[d]) {
                    valid--
                }
                window[d] = (window[d] || 0) - 1
            }
            ///

        }
    }
    return resArr
};

let s = "cbaebabacd", p = "abc"
findAnagrams(s, p)