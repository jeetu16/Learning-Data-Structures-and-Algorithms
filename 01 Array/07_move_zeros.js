/*
--> Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

Follow up: Could you minimize the total number of operations done?
*/


let moveZeroes = function(nums) {
    for (let i = 0; i < nums.length-1; i++) {
        if(nums[i] !== 0) {
            continue;
        }
        let temp = 0;
        for (let j = i+1; j < nums.length; j++) {
            if(nums[j] !== 0) {
                temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                break;
            }
        }
    }
    return nums;
};
// Time Complexity - O(n^2)
// Space Complexity - O(1)

const moveZeroes2 = (nums) => {
    let nonZeroIndex = 0;
    for (let currentIntegerIndex = 0; currentIntegerIndex < nums.length; currentIntegerIndex++) {
        let temp = 0;
        if(nums[currentIntegerIndex] !== 0) {
            temp = nums[currentIntegerIndex];
            nums[currentIntegerIndex] = nums[nonZeroIndex];
            nums[nonZeroIndex] = temp;
            nonZeroIndex++;
        }
    }
    return nums
}
// Time Complexity - O(n)
// Space Complexity - O(1)


console.log(moveZeroes2([0,1,0,3,12])); // [1,3,12,0,0]
console.log(moveZeroes2([0,1,0,3,12,0,0,0,34,56,0,5])); // [1,3,12,0,0]
console.log(moveZeroes2([0])); // [0]


