function fibonacci(iNo:number):number
 {
    var next:number;
    var first:number=0;
    var second:number=1;
   
    while(1)
    {
        if(next == iNo)
            break;

            next=first+second;
            first=second;
            second=next;
            
            console.log("fibonacci series:"+next)  
    }
    return 0;
 }
var iret:number;
iret=fibonacci(21)
//console.log("fibonacci series:"+iret)