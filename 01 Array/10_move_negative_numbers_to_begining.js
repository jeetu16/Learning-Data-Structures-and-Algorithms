/*

An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.

Examples : 

Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
Output: -12 -13 -5 -7 -3 -6 11 6 5



Note: Order of elements is not important here.

*/

const moveNegativesToBegining = (input) => {
    for (let i = 0; i < input.length-1; i++) {
        let temp = 0;
        for (let j = i+1; j < input.length; j++) {
            if(input[j] < 0) {
                temp = input[i];
                input[i] = input[j];
                input[j] = temp;
            }
        }
    }
    return input;
}
// Time Complexity = O(n^2)
// Space Complexity = O(1)


const moveNegativesToBegining2 = (input) => {
    let negativeIndex = 0;
    for (let index = 0; index < input.length; index++) {
        let temp = 0;
        if(input[index] < 0 ) {
            temp = input[index];
            input[index] = input[negativeIndex];
            input[negativeIndex] = temp;
            negativeIndex++;
        }
    }
    return input
}
// Time Complexity = O(n)
// Space Complexity = O(1)



console.log(moveNegativesToBegining([-1, 2, -3, 4, 5, 6, -7, 8, 9]));
console.log(moveNegativesToBegining([-12, 11, -13, -5, 6, -7, 5, -3, -6]));

console.log('----------------------------------');


console.log(moveNegativesToBegining2([-1, 2, -3, 4, 5, 6, -7, 8, 9]));
console.log(moveNegativesToBegining2([-12, 11, -13, -5, 6, -7, 5, -3, -6]));
