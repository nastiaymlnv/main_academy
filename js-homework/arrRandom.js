const getArray = (range, length) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * (range[1] - range[0])) + range[0]);
    }
    return arr;
}

console.log(getArray([5, 15], 10));