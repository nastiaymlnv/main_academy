// counting the same elements of the array

const countIdentic = (arr) => {
    let map = new Map();
    let counter = 0;

    for(let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], (map.get(arr[i]) + 1));
            if (map.get(arr[i]) === 2) counter++;
        }
        else {
            map.set(arr[i], 1);
        }
    }

    return counter;
}

console.log(countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8])); // 4
console.log(countIdentic([15, 14, 13, 19, 13, 14, 14, 14, 7, 9, 9])); // 3