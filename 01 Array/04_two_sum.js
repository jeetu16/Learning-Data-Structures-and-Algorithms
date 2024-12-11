
function TwoSum1(arr, target) { 
    // check input
    if(arr.length === 2) {
        return [0,1];
    }

    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i]+arr[j] === target) {
                return [i, j]
            }
        }
    }
}
// Time Complexity - O(n^2)
// Space Complexity - O(1)

function TwoSum2(arr, target) {
    const map = {}

    // check input
    if(arr.length === 2) {
        return [0,1];
    }

    for(let i = 0; i < arr.length; i++) {
        if(map[target - arr[i]] !== undefined) {
            return [i, map[target-arr[i]]].sort((a,b) => a-b);
        } else {
            map[arr[i]] = i;
        }
    }
}
// Time Complexity - O(n)
// Space Complexity - O(n)


console.log(TwoSum1([2,10,7,11,15], 21));
console.log(TwoSum2([2,10,7,11,15], 21));
