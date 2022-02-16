let formula = '';
let result;

function reader(symbol){
    formula += symbol;
    if (formula.length == 1 && formula === '='){
        formula = document.getElementById('input').value + '=';
        console.log('formula: ', formula);
        document.getElementById("input").value = '';
        operator_definer(formula);
    } else if (symbol == '='){
        operator_definer(formula);
    } else if (symbol == ' '){
        document.getElementById("input").value = '';
    } else {
        document.getElementById("input").value = formula;
    }
}

function operator_definer(str){
    let plus = str.indexOf('+');
    let minus = str.indexOf('-');
    let mul = str.indexOf('*');
    let div = str.indexOf('/');
    let deg = str.indexOf('^');
    calculate(str, plus, minus, mul, div, deg);
}

function calculate(sample, plus, minus, mul, div, deg){
    let num1, num2;
    if (plus !== -1) {
        num1 = sample.slice(0, plus);
        num2 = sample.slice(plus + 1, sample.length - 1);
        result = Number(num1) + Number(num2);
    } else if (minus !== -1) {
        num1 = sample.slice(0, minus);
        num2 = sample.slice(minus + 1, sample.length - 1);
        result = Number(num1) - Number(num2);
    } else if (mul !== -1) {
        num1 = sample.slice(0, mul);
        num2 = sample.slice(mul + 1, sample.length - 1);
        result = Number(num1) * Number(num2);
    } else if (div !== -1) {
        num1 = sample.slice(0, div);
        num2 = sample.slice(div + 1, sample.length - 1);
        result = Number(num1) / Number(num2);
    } else if (deg !== -1) {
        num1 = sample.slice(0, deg);
        num2 = sample.slice(deg + 1, sample.length - 1);
        result = Math.pow(Number(num1), Number(num2));
    }
    document.getElementById("input").value = result;
    formula = '';
}
