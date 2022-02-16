let str = 'Its a very looooooooooooooooooooooooooooooooooooooong string';

const truncate = (str, maxlength) => {
    if (str.length <= maxlength){
        return str;
    }
    if (str.length > maxlength){
        return str.slice(0, maxlength - 3) + '\u2026';
    }
};

console.log(truncate(str, 20));