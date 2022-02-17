// merge two arrays without duplicating elements

let arr1 = [5, 2, 1, -10, 8];
let arr2 = [5, 2, 1, -9, 3, 7];

const union = (a, b) => {
    let set = new Set([...a, ...b]);
    return [...set];
}

console.log(union(arr1, arr2));
// expected [-10, 8, 5, 2, 1, -9, 3, 7]
// actual [5, 2, 1, -10, 8, -9, 3, 7]