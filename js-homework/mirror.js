// rotate the array relative to the center

let str = 'abba';
let newstr = '';
let middle, left_side, right_side;

const sidesLen = () => {
    left_side = middle - 1;
    right_side = str.length - 1;
}

const leftSide = () => {
    while (left_side >= 0) {
        newstr += str[left_side];
        left_side--;
    }
    return newstr;
}

if (str.length % 2 !== 0) {
    middle = Math.trunc(str.length / 2);
    sidesLen();
    leftSide();
    newstr += str[middle];

    while (right_side > middle) {
        newstr += str[right_side];
        right_side--;
    }
    console.log(newstr);
}
else {
    middle = str.length / 2;
    sidesLen();
    leftSide();

    while (right_side >= middle) {
        newstr += str[right_side];
        right_side--;
    }
    console.log(newstr);
}
