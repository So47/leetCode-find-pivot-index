/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    
    let sum = nums.reduce((a, b) => a + b), leftSum = 0;
    for(let i = 0; i <= nums.length; i++){
        if(leftSum === (sum - leftSum - nums[i])){
            return i;
        } else {
            leftSum +=nums[i];
        }

    }
    return -1;
};