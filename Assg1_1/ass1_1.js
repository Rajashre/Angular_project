var first = 23;
var second = 89;
var third = 6;
console.log(Maximum(first, second, third));
function Maximum(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) {
            return num1;
        }
        else {
            return num3;
        }
    }
    else {
        if (num2 > num3) {
            return num2;
        }
        else {
            return num3;
        }
    }
}
