function isEqual(firstArray, secondArray) {
    let count = 0;

    if (firstArray.length === secondArray.length) {
        firstArray.forEach( (item, index) => {
            if (item === secondArray[index]) {
                count++;
            }
        })
    }

    if (firstArray.length === count) {
        return true;
    }
    return false;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2));
console.log(isEqual(arr1, arr3));
console.log(isEqual(arr1, arr4));