

function firstRecurringCharacter(arr) {
    let chars = {};
    for (let i = 0; i < arr.length; i++) {
        if(chars[arr[i]]) {
            return arr[i];
        } else {
            chars[arr[i]] = 1;
        } 
    }

    return undefined
}
// Time Complexity - O(n)
// Space Complexity - O(n)


console.log(firstRecurringCharacter([1,2,5,3,4,3,8]));
console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]));
