const arr = [1,2,3,4];
let product = 1,n=0;
const arr2 = [];

while(n<arr.length){
    for(let i=0;i<arr.length;i++){
        if(n!=i){
            product *= arr[i] 
        }
    }
    arr2.push(product);
    product = 1;
    n++;
}

console.log(arr2)