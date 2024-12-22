/*

Given an array arr[], the task is to reverse the array. Reversing an array means rearranging the elements such that the first element becomes the last, the second element becomes second last and so on.

Examples:

Input: arr[] = {1, 4, 3, 2, 6, 5}  
Output: {5, 6, 2, 3, 4, 1}
Explanation: The first element 1 moves to last position, the second element 4 moves to second-last and so on.


Input: arr[] = {4, 5, 1, 2} 
Output: {2, 1, 5, 4}
Explanation: The first element 4 moves to last position, the second element 5 moves to second last and so on.

*/

const reverseArray = (input) => {
    let temp = [];
    for (let end = input.length-1; end >= 0; end--) {
        temp.push(input[end]);
    }
    return temp
}


const reverseArray2 = (input) => {
    let temp = 0;
    for (let start = 0, end = input.length-1; start < end; start++, end--) {
        temp = input[start];
        input[start] = input[end];
        input[end] = temp;
    }
    return input;
}

console.log(reverseArray([1, 4, 3, 2, 6, 5]));
console.log(reverseArray([4, 5, 1, 2]));
console.log(reverseArray([4]));
console.log(reverseArray([4,6]));

console.log('--------------------');


console.log(reverseArray2([1, 4, 3, 2, 6, 5]));
console.log(reverseArray2([4, 5, 1, 2]));
console.log(reverseArray2([4]));
console.log(reverseArray2([4,6]));
