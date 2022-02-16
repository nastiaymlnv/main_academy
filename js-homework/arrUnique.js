const unique = (array) => {
    let set = new Set(array);
    return [...set];
}

const data = [1, 2, 1, 2, 3];
console.log(unique(data));

// const unique = (array) => {
//     let res = [];
//     for (let item of array) {
//         if (!res.includes(item)) {
//         res.push(item);
//         }
//     }
//     return res;
// }

// const data = [1, 2, 1, 2, 3];
// console.log(unique(data));