/*
----> Kth Smallest

Given an array arr[] and an integer k where k is smaller than the size of the array, the task is to find the kth smallest element in the given array.

Follow up: Don't solve it using the inbuilt sort function.

Examples :

Input: arr[] = [7, 10, 4, 3, 20, 15], k = 3
Output:  7
Explanation: 3rd smallest element in the given array is 7.

Input: arr[] = [2, 3, 1, 20, 15], k = 4 
Output: 15
Explanation: 4th smallest element in the given array is 15.

Expected Time Complexity: O(n+(max_element) )
Expected Auxiliary Space: O(max_element)

Constraints:
1 <= arr.size <= 106
1<= arr[i] <= 106
1 <= k <= n

*/


const kthSmallest = (arr, k) => {
    let temp = []
    let j = 0;
    let ans = 0;
    for(let i = 0; i < arr.length; i++) {
        temp[arr[i]] = arr[i]
    }
    
    for(let i = 0; i < temp.length; i++) {
        if(temp[i] !== undefined && j < k) {
            j++
        }
        if(j >= k) {
            ans = i;
            break;
        }
    }
    return temp[ans];
}

console.log(kthSmallest([5,4,3,2,6,15], 6));


