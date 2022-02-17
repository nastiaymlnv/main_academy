// the sum of the parallel elements of the two arrays

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6];

const sumOfArrays = (a, b) => {
    const biggerArr = (a.length > b.length) ? a : b;

    let arrayOfSums = biggerArr.map((item, index) => {
        if (a[index] === undefined) a[index] = 0;
        if (b[index] === undefined) b[index] = 0;
        return a[index] + b[index];
    })

    return arrayOfSums;
}

console.log(sumOfArrays(arr1, arr2)); // [5, 7, 9, 4, 5]