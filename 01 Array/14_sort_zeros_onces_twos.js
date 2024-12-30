
/*

---> Sort 0s, 1s and 2s

Given an array arr[] containing only 0s, 1s, and 2s. Sort the array in ascending order.

Examples:

Input: arr[] = [0, 1, 2, 0, 1, 2]
Output: [0, 0, 1, 1, 2, 2]
Explanation: 0s 1s and 2s are segregated into ascending order.

Input: arr[] = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]
Explanation: 0s 1s and 2s are segregated into ascending order.

Constraints:
1 <= arr.size() <= 10^6
0 <= arr[i] <= 2
*/
const sort012 = (input) => {
    for (let i = 0; i < input.length-1; i++) {
        let temp = 0;
        for (let j = i+1; j < input.length; j++) {
            if(input[i] > input[j]) {
                temp = input[i];
                input[i] = input[j];
                input[j] = temp;
            }
            
        }
    }
    return input;
}
// Time Complexity - O(n^2)
// Space Complexity - O(1)

const sort012II = (input) => {
    let lo = 0;
    let mid = 0;
    let hi = input.length-1;
    while(mid <= hi) {
        let temp = 0;
        if(input[mid] === 0) {
            temp = input[lo];
            input[lo++] = input[mid];
            input[mid++] = temp; 
        } else if(input[mid] === 1) {
            mid++;
        } else {
            temp = input[hi];
            input[hi--] = input[mid];
            input[mid] = temp;
        }
    }
    return input;
}

const sort012III = (input) => {
    let count0 = 0, count1 = 0, count2 = 0;
    for (let index = 0; index < input.length; index++) {
        if(input[index] === 0) {
            count0++
        } else if(input[index] === 1) {
            count1++;
        } else {
            count2++
        }
    }

    for (let index = 0; index < input.length; index++) {
        if(count0 > 0) {
            input[index] = 0;
            count0--;
        } else if (count1 > 0) {
            input[index] = 1;
            count1--;
        } else {
            input[index] = 2;
        }   
    }
    return input;
}

console.log(sort012([0, 1, 2, 0, 1, 2]));
console.log(sort012([1, 0, 1, 2, 0, 2, 0, 1, 0]));
console.log(sort012([0]));

console.log('--------------------------------');


console.log(sort012II([0, 1, 2, 0, 1, 2]));
console.log(sort012II([1, 0, 1, 2, 0, 2, 0, 1, 0]));
console.log(sort012II([0]));

console.log('--------------------------------');


console.log(sort012III([0, 1, 2, 0, 1, 2]));
console.log(sort012III([1, 0, 1, 2, 0, 2, 0, 1, 0]));
console.log(sort012III([0]));