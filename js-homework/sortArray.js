// sort the array in descending order

let numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];

const compareNumbers = (arr) => {
    return arr.sort((a, b) => b - a);
}

console.log(compareNumbers(numbers)); // 8, 7, 6, 5, 3, 3, 2, 1, -4