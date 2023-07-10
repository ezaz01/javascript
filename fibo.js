/*
function fibonacci(n)
{
    var fibo = [0,1];
    for (var i = 2; i <=n; i++)
    {
        fibo[i]=fibo[i-1] +fibo[i-2];
    }
    return fibo;
}
const res=fibonacci(10);

console.log(res);
*/

function fibonacci(n)
{
    if(n==0)
    {
        return 0;
    }
    if(n==1)
    {
        return 1;
    }
    else
    {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
const res=fibonacci(10);

console.log(res);