let arr = [2, 5, 18, 11, 23, 6, -40, 1, 4];
let max = arr[0];
let position;

const findPos = (number) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === number){
            position = i;
            return i;
        }
    }
    return null;
};

const maxElem = () => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

console.log(`Index of 5: ${findPos(5)}`);
console.log(`Index of 10: ${findPos(10)}`);
console.log(`Max: ${maxElem()}`);