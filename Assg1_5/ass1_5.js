function fibonacci(iNo) {
    var next;
    var first = 0;
    var second = 1;
    while (1) {
        if (next == iNo)
            break;
        next = first + second;
        first = second;
        second = next;
        console.log("fibonacci series:" + next);
    }
    return 0;
}
var iret;
iret = fibonacci(21);
//console.log("fibonacci series:"+iret)
