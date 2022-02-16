let grade = Number(prompt("Enter yout grade: "));

if (grade <= 100 & grade >= 95) {
    console.log("A");
} else if (grade <= 94 & grade >= 85) {
    console.log("B");
} else if (grade <= 84 & grade >= 75) {
    console.log("C");
} else if (grade <= 74 & grade >= 65) {
    console.log("D");
} else if (grade <= 64 & grade >= 60) {
    console.log("E");
} else if (grade <= 59 & grade >= 0) {
    console.log("FX");
}

// let score = "FX";

// switch (score){
//     case "A":
//         console.log('100-95');
//         break;
//     case "B":
//         console.log('85-94');
//         break;
//     case "C":
//         console.log('75-84');
//         break;
//     case "D":
//         console.log('65-74');
//         break;
//     case "E":
//         console.log('60-64');
//         break;
//     default:
//         console.log('0-59 \nYou are loser!');
// }