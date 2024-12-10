
function mergeSortedArray(arr1, arr2) {
    const arr3 = [];
    let i = j = 0;
    
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i]<arr2[j]) {
            arr3.push(arr1[i]);
            i++;
        } else{
            arr3.push(arr2[j]);
            j++
        }
    }

    while(i < arr1[i]) {
        arr3.push(arr1[i]);
        i++;
    }
    while(j < arr2[j]) {
        arr3.push(arr2[j]);
        j++
    }

    return arr3;
}

function mergeSortedArray2(arr1, arr2) {
    const mergedArray = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];

    let i = 1;
    let j = 1;

    // check inputs
    if(!arr1.length) {
        return arr2;
    }
    if(!arr2.length) {
        return arr1;
    }

    while(array1Item || array2Item) {
        
        if(!array2Item ||array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = arr1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = arr2[j];
            j++;
        }
    }

    return mergedArray;
}

console.log(mergeSortedArray2([0,3,4,31],[4,6,30]));