
function isPrime(n)
{
    for (var i=2; i<n; i++)
    {
        if (n%i==0)
        {
            
            return "not prime";
            break;
        }
        else
        {
            return "prime";
        }
    }
}
var result = isPrime(101);
console.log(result);