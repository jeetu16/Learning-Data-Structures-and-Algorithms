/*

Rotate Array by One
Difficulty: BasicAccuracy: 69.6%Submissions: 291K+Points: 1
Given an array arr, rotate the array by one position in clock-wise direction.

Examples:

Input: arr = [1, 2, 3, 4, 5]
Output: [5, 1, 2, 3, 4]
Explanation: If we rotate arr by one position in clockwise 5 come to the front and remaining those are shifted to the end.

Input: arr = [9, 8, 7, 6, 4, 2, 1, 3]
Output: [3, 9, 8, 7, 6, 4, 2, 1]
Explanation: After rotating clock-wise 3 comes in first position.

Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)

Constraints:
1<=arr.size()<=105
0<=arr[i]<=105



*/

const rotate = (input) => {

    let temp = input[input.length-1];
    let currentElement = 0;
    for (let index = 0; index < input.length; index++) {
        currentElement = input[index];
        input[index] = temp;
        temp = currentElement; 
    }

    return input;
}
// Time Complexity - O(n)
// Space Complexity - O(1)

const rotate2 = (input) => {

    let temp = input[input.length-1];
    for (let index = input.length-1; index > 0; index--) {
        input[index] = input[index-1];
    }
    input[0] = temp;

    return input;
}

// Time Complexity - O(n)
// Space Complexity - O(1)

console.log(rotate([1, 2, 3, 4, 5])); // [5, 1, 2, 3, 4]
console.log(rotate([9, 8, 7, 6, 4, 2, 1, 3])); // [3, 9, 8, 7, 6, 4, 2, 1]

console.log('-----------------------------------');


console.log(rotate2([1, 2, 3, 4, 5])); // [5, 1, 2, 3, 4]
console.log(rotate2([9, 8, 7, 6, 4, 2, 1, 3])); // [3, 9, 8, 7, 6, 4, 2, 1]


