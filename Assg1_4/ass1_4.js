function ChkPrime(num) {
    var i;
    var num;
    for (i = 2; i < num; i++) {
        if (num % 2 == 0)
            return false;
    }
    return true;
}
console.log(ChkPrime(71));
