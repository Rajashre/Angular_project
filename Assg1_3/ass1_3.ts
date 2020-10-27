

function Displayfactor(iNo)
{
    var ans:number
    for(var i:number = 1;i < iNo; i++)
    {
        if(iNo % i == 0)
        {
            console.log(i+" ");       
        }
    }
    return ans;
}
var iret:number
iret=Displayfactor(20)
console.log(iret)
