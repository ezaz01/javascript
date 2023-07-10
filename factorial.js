/*
function fact(n){
    var factorial =1;
    for(var i=1;i<=n;i++)
    {
        factorial=factorial*i;
        //console.log(fact);
    }
    return factorial;
}

var result=fact(5);
console.log(result);
*/

//factorial recursive
function fact(n){
    if (n==0){
        return 1;
    }
    else
    {
        return n*fact(n-1);
    }
}

var result=fact(5);
console.log(result);
