module.exports = function getZerosCount(number, base) {
  var counter = 0, b,  n;
    for (var i = base - 1; i > 1; i--){
        if (base%i == 0) {
            n = i;
            break;
        }
        if (base%i != 0) {
            n = base;
        }

    }

    b = n;
    while (number >= n){
        counter += Math.floor(number/n);
        n = n*b;
    }
  return  counter;
}
