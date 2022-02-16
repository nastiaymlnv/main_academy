// сума паралельних елементів двох масивів

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6];

const sumOfArrays = (a, b) => {
    let arrayOfSums = [];
    const maxminArr = [];

    (a.length > b.length) ? maxminArr.push(a, b) : maxminArr.push(b, a);
    maxminArr[0].map((item, index) => {
        (maxminArr[1][index]) ? arrayOfSums.push(item + maxminArr[1][index]) : arrayOfSums.push(item);
    })

    return arrayOfSums;
}

console.log(sumOfArrays(arr1, arr2)); // [5, 7, 9, 4, 5]