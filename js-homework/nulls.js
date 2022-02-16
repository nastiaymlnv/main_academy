let arr = [1, 0, 2, 3, 0, 4, 5, 0, 0];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        count ++;
    }
}

console.log('nulls in array: ', count);