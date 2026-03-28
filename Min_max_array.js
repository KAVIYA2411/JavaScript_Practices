// Inbuild function using spreed operator
let num = [1,2,3,4,5,6,9];
function minMax(num){
    return {
       min: Math.min(...num),
       max : Math.max(...num)
    }
    
}
console.log(minMax(num))


//min max manually
let arr = [1,20,6,7,8,10]

let min = arr[0];
let max = arr[0];

for(let i = 2``; i < arr.length; i++){
    if(arr[i] < min){
        min = arr[i];
    }
    if(arr[i] > max){
        max = arr[i];
    }
}

console.log("Min:", min);
console.log("Max:", max);