// expand the array of arrays

let arr1 = [1, [2, [3, [4]]]];
let arr2 = [1, [2], [3, [[4]]], [5, 6]];
let expandedArray = [];

const expand = (arr) => {
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])) {
            expand(arr[i]);
        } else {
            expandedArray.push(arr[i]);
        }
    }
    return expandedArray;
}

console.log(expand(arr1)); // 1, 2, 3, 4
console.log(expand(arr2)); // 1, 2, 3, 4, 5, 6