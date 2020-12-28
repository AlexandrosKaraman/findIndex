const nums = [1, 3, 5, 6]
const target = 5

function findInd(nums) {
    const numsIndex = nums.findIndex(num => num >= target)
    return numsIndex
}


console.log(findInd(nums))