/*
Given an integer array nums, find the subarray with the largest sum, and return its sum.


Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

function largestSum(input) {
    let maxSum = -Infinity;

    for (let i = 0; i < input.length; i++) {
        sum = 0;
        for (let j = i; j < input.length; j++) {
            sum+=input[j]
            if(maxSum < sum) {
                maxSum = sum;
            }
        } 
    }
    return maxSum;
}

const largestSum2 = (input) => {
    let maxSum = input[0];
    let currMaxSum = input[0];
    for (let index = 1; index < input.length; index++) {
        currMaxSum = Math.max(input[index], input[index] + currMaxSum);
        if(maxSum < currMaxSum) {
            maxSum = currMaxSum;
        }
    }
    return maxSum;
}

console.log(largestSum([-2,1,-3,4,-1,2,1,-5,4])); // 6 [4,-1,2,1]
console.log(largestSum([5,4,-1,7,8])); // 23 [5,4,-1,7,8]
console.log(largestSum([-2,-4])); // -2 [-2]

console.log('--------------------------------------------');


console.log(largestSum2([-2,1,-3,4,-1,2,1,-5,4])); // 6 [4,-1,2,1]
console.log(largestSum2([5,4,-1,7,8])); // 23 [5,4,-1,7,8]
console.log(largestSum2([-2,-4])); // -2 [-2]
