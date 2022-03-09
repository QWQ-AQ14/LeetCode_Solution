var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        // @ts-ignore
        let mid = parseInt(left + ((right - left) / 2))
        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        }
    }
    return -1
};
let nums = [-1, 0, 3, 5, 9, 12], target = 9
console.log(search(nums, target));