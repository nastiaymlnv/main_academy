class MyString {

    reverse(string) {
        return Array.from(string).reverse().join('');
    }

    ucFirst(string) {
        return string[0].toUpperCase() + string.slice(1, string.length);
    }

    ucWords(string) {
        let modifiedString = string[0].toUpperCase();
        for (let i = 1; i < string.length; i++) {
            if (string[i] === ' ') {
                modifiedString += ' ';
                modifiedString += string[i + 1].toUpperCase();
            }
            else if (string[i - 1] !== ' ') {
                modifiedString += string[i];
            }
        }
        return modifiedString;
    }
}

let str = new MyString();

console.log(str.reverse('abcde')); // edcba
console.log(str.ucFirst('abcde')); // Abcde
console.log(str.ucWords('abcde abcde abcde')); // Abcde Abcde Abcde