let num = 12345;
let count = 0;

while(num > 0){
    count++;
    num = (num - (num % 10)) / 10;
}

console.log("Digits:", count);