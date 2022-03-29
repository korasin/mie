function sum(a,b){
    return a + b
}
function sub(c,d){
    return c - d
}
function divide(m,f){
    return m / f
}
function mult(p,q){
    return p * q
}
if (function sum(a,b){
    console.log(a+b)
});else if(function sub(c,d){
    console.log(c-d)
});else if(function mult(p,q){
    console.log(p*q)
});else(function divide(m,f){
    console.log(m/f)
});
console.log(sum(2,3));
console.log(sub(4,2));
console.log(mult(6,8));
console.log(divide(4,5));