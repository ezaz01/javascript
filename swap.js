//1st method
/*
var a=5, b=7;
console.log("Before swap:a=",a," b=",b);
var temp=a;
a=b;
b=temp;
console.log("After swap:a=",a," b=",b);
*/



//2nd method
/*
var a=5, b=7;
a=a+b;
b=a-b;
a=a-b;
console.log("Swap:a=",a," b=",b);
*/


//3rd method
var a=5, b=7;
[a,b] = [b,a];
console.log("Swap:a=",a," b=",b);

