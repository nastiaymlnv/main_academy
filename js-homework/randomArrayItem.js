// повернення випадкового елементу масиву

let arr = [24, 45, 22, 35, 43];

const randomElement = (arr) => {
    let index = Math.floor(Math.random() * 5);
    return arr[index];
}

console.log(randomElement(arr));