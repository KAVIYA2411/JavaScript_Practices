let num = 1124;
let sum = 0;
let product = 1;

while(num > 0){
    let digit = num % 10;
    sum = sum + digit;
    product = product * digit;
    num = (num - digit) / 10;
}

if(sum === product){
    console.log("Spy Number");
}else{
    console.log("Not Spy");
}