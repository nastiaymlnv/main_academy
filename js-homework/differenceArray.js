// The difference between the two arrays

let arr1 = [1, 2, 'a'];
let arr2 = [1, 2, 3, 4, 'b'];

const union = (a, b) => {
    let differenceArr = [];

    if (a.length >= b.length) {
        a.forEach((item, index) => {
            if (!b.includes(item)) {
                (typeof b[index] !== 'undefined') ? differenceArr.push(b[index], item) : differenceArr.push(item);
            }
        })
    }
    else {
        b.forEach((item, index) => {
            if (!a.includes(item)) {
                (typeof a[index] !== 'undefined') ? differenceArr.push(a[index], item) : differenceArr.push(item);
            }
        })
    }

    return differenceArr;
}

console.log(union(arr1, arr2)); // [a, 3, 4, b]