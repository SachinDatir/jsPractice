// transfer all the 0toright side
// let arr = [1,4,0,0,2,0,7,9,10]
// let count = 0
// for(let i =0;i<arr.length;i++){
//     if(arr[i]){
//         [arr[i],arr[count++]]  = [arr[count],arr[i]] 
//     }
// }
// console.log(arr)

// REVERSE ARRAY
let arr = [12, 13, 14, 15, 16, 17, 18, 19, 20];

let a = arr.length
for(let i =0,j=a-1;i<=j;i++,j--){
    let n = arr[i]
    arr[i] = arr[j]
    arr[j] =n
}
console.log(arr)

for(let i = 0,j=a-1;i<=j;i++,j--){
    arr[i],arr[j] = arr[j],arr[i]
}
// console.log(arr)

// Transfer all 0 into right side
let numArr = [4,0,46,0,10,0,3,45,6]
let count = 0
for(let i = 0;i<numArr.length;i++){
    if(!numArr[i]){
        [numArr[i],numArr[count++]] =[numArr[count],numArr[i]]
    }
}
console.log(numArr)

// Transfer all array into right side another way
let z = []
let y =[]
for(let i= 0;i<numArr.length;i++){
    if(numArr[i]!=0){
        z.push(numArr[i])
    }
    else{
        y.push(numArr[i])
    }
}
console.log(z.concat(y))