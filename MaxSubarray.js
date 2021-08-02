//Find maximum sub array 


var maxSubArray = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i-1] > 0) {
            nums[i] += nums[i-1];
        }
    }
    return Math.max(...nums)

};

let nums = [-2,1,-3,4,-1,2,1,-5,4];   // 6
console.log(maxSubArray(nums))