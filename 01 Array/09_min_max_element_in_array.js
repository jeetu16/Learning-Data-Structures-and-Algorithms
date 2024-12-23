/*

--> Maximum and Minimum Element in an Array

Given an integer array nums of size n, find the maximum and minimum elements in the array and return them as a pair.


Write a function findMinMax that takes in an integer array nums and returns a pair of integers containing the maximum and minimum elements.


You can assume that nums will always have at least one element.


Input:


An integer array nums of size n (1 ≤ n ≤ 10^4) where each element is an integer (-10^9 ≤ nums[i] ≤ 10^9).
Output:


Return an integer array containing two elements: the maximum element followed by the minimum element from nums.
Example 1:


Input: nums = [4, 2, 5, 1, 6, 3]
Output: [6, 1]
Explanation: The maximum element is 6, and the minimum element is 1.
Example 2:


Input: nums = [1, 5, 7, 2, 9, 3]
Output: [9, 1]
Explanation: The maximum element is 9, and the minimum element is 1.

*/

const minMaxEleInArray = (input) => {
    let min = input[0];
    let max = input[0];

    for (let i = 1; i < input.length; i++) {
        if(input[i] < min) {
            min =  input[i]
        }
        if (input[i] > max ) {
            max = input[i]
        } 
    }

    return[min, max];
}
// Time Complexity - O(n)
// Space Complexity - O(1)


const minMaxEleInArray2 = (input) => {
    input.sort((a,b) => a - b);
    let min = input[0];
    let max = input[input.length-1];

    return [min, max];
}
// Time Complexity - O(n log n)
// Space Complexity - O(1)



console.log(minMaxEleInArray([3, 5, 4, 1, 9]));
console.log(minMaxEleInArray([22, 14, 8, 17, 35, 3]));
console.log(minMaxEleInArray([-9, 8]));
console.log(minMaxEleInArray([22]));

console.log('-----------------------');

console.log(minMaxEleInArray2([3, 5, 4, 1, 9]));
console.log(minMaxEleInArray2([22, 14, 8, 17, 35, 3]));
console.log(minMaxEleInArray2([-9, 8]));
console.log(minMaxEleInArray2([22]));
