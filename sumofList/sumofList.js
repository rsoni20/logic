// Write three functions that compute the sum of the numbers in a list: using a for-loop, a while-loop and recursion. (Subject to availability of these constructs in your language of choice.)
var list = [12, 33, 23, 445, 556, 345, 3455, 345];
function operation() {
    var summation = summ(list);
    console.log(summation);
    console.log(wh(list));
}
function summ(sum) {
    var summation = 0;
    for (var counter = 0; counter < sum.length; counter++) {
        summation += sum[counter];
    }
    return summation;
}
function wh(suma) {
    var i = 0;
    var whsum = 0;
    while (i < suma.length) {
        whsum += suma[i];
        i++;
    }
    return whsum;
}
