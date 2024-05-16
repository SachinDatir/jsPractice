// // let arr = [12,13,14,15,16,17,18,19,20]
// // let a = arr.length
// for(let i = 0,j=n-1;i<=j;i++,j--){
//     arr[i] + arr[j] = arr[i] + arr[j];
// }

let arr = [12, 13, 14, 15, 16, 17, 18, 19, 20];
let a = arr.length;

for (let i = 0, j = a - 1; i <= j; i++, j--) {
//   arr[i] + arr[j] = arr[i] + arr[j];
let n = arr[i]
arr[i]  = arr[j]
arr[j]  = n
}
console.log(arr)

// Another way to reverse the array 
for(let i = 0,j=a-1;i<=j;i++,j--){
    arr[i],arr[j] = arr[j],arr[i]
}
console.log(arr)

// Count the each number of letter from array

let numbers = [12,34,56,12,3,4,3,4]
let b = new Map()
for(let i = 0;i<=numbers.length;i++){
    if(b.has(numbers[i])){
        b.get(numbers[i],b.set(numbers[i]+1))
    }else{
        b.set(numbers[i],1)
    }
}

// console.log(b)
 

const z = (num)=>{
    let n = {}
    for(i of num ){
      if(n[i]){
          n[i]++
      }
      else{
          n[i]=1
      }
    }
    console.log(n)
}
console.log(z([12,32,12,45,43,34,5,6,5,34]))
