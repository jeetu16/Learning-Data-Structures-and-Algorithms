/*
--> Contains Duplicate

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/


let containsDuplicate = function(nums) {
    
    let isDuplicate = false;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return isDuplicate;
};
// Time Complexity - O(n^2)
// Space Complexity - O(1)

let containsDuplicate2 = function(nums) {
    
    let isDuplicate = false;
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if(map[nums[i]]) {
            return true;
        } else {
            map[nums[i]] = 1;
        } 
    }
    return isDuplicate;
};
// Time Complexity - O(n)
// Space Complexity - O(n)

console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true

console.log(containsDuplicate2([1,2,3,1])); // true
console.log(containsDuplicate2([1,2,3,4])); // false
console.log(containsDuplicate2([1,1,1,3,3,4,3,2,4,2])); // true