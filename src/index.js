module.exports = function getZerosCount(number, base) {
let simple = [], exp = [], zeros = [];
let counter = 0, b = base, summ = 0, num = number, mult, ex = 2;

//finding all simple number
    for (let i = 2; i <= b; i++){
    if (b%i == 0) {
    simple.push(i);
    }
        while (b%i == 0){
            b /= i;
            counter++;
            }

        if (counter > 0) {
            exp.push(counter);
            }
        counter = 0;
    }

    //creating mass with numbers
    for (var j = 0; j < simple.length; j++){
            mult = simple[j];

        while (num/mult > 1){
            summ += Math.floor(num/mult);
            mult = Math.pow(simple[j], ex);
            ex++;
        }
        zeros.push(summ);
        summ = 0;
        ex = 2;
    }

    //finding the min length of zeros
    for (let k = 0; k < zeros.length; k++){
        zeros[k] = Math.floor(zeros[k]/exp[k]);
    }

    zeros.sort(function(a, b){return a-b;});
    return zeros[0];

}
