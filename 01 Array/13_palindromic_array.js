/*

---> Palindromic Array

Given an array arr[] of positive integers. Return true if all the array elements are palindrome otherwise, return false.

Example1

Input: arr[] = [111, 222, 333, 444, 555]
Output: true

Explanation:
arr[0] = 111, which is a palindrome number.
arr[1] = 222, which is a palindrome number.
arr[2] = 333, which is a palindrome number.
arr[3] = 444, which is a palindrome number.
arr[4] = 555, which is a palindrome number.
As all numbers are palindrome so This will return true.

Example2

Input: arr[] = [121, 131, 20]
Output: false

Explanation: 20 is not a palindrome hence the output is false.
Expected Time Complexity: O(nlogn)
Expected Space Complexity: O(1)

Constraints:
1 <=arr.size<= 20
1 <=arr[i]<= 105

*/


const palinArray = (input) => {

    for (let index = 0; index < input.length; index++) {
        let sum = 0;
        let actualNumber = input[index];
        let num = input[index]
        let rem;
        while(num > 0) {
            rem = num % 10;
            sum = sum * 10 + rem;
            num = Math.floor(num / 10);
        }

        if(actualNumber !== sum) {
            return false
        }
    }
    return true;
    
}

// Time Complexity - O(n * log(max(input)))
// Space Complexity - O(1)

console.log(palinArray([111, 222, 333, 444, 555]));
console.log(palinArray([121, 131, 20]));
