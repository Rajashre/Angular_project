function Displayfactor(iNo) {
    var ans;
    for (var i = 1; i < iNo; i++) {
        if (iNo % i == 0) {
            console.log(i + " ");
        }
    }
    return ans;
}
var iret;
iret = Displayfactor(20);
console.log(iret);
