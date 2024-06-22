// asyc await example in js
// async function fetchData(){
//     return new promise((resolve)=>{
//      setTimeout(()=>{
//      resolve('data fetched successfully')
//      },2000)
//     })
//    }
   
//    async function processData(){
//      const result = await fetchData()
//      console.log(result)
//    }
//    processData()

// Check number is palindromeor not
function isPalindrome(num){
  let originalNum = num
  let reversed = 0

  while(num>0){
    let digit = num%10
    reversed = reversed*10+digit 
    num = Math.floor(num/10)
  }
  return originalNum ===reversed
} 
console.log(isPalindrome(12321))

// reverse the number
let num = 12345
let a = num.toString().split('')
// console.log(a)
let b = a.reverse().join('')
// console.log(parseFloat(b))

// another way 
let rev  = 0
// let num = 121212
while(num!==0){
  let digit = num%10
  rev = rev*10+digit
  num = Math.floor(num/10)
}
console.log(rev)

// Reverse the string 
let str = "Sachin Datir"
let revStr = ''
for(let i =0;i<str.length;i++){
  revStr = str[i]+revStr
}
console.log(revStr)

// rev line only
console.log(str.split(' ').reverse().join(' '))
// reverse array 
let arr = ["Sachin","panakaj","rahul",'sanket','pranamya']
let c = arr.length
for(let i =0,j=c-1;i<=j;i++,j--){
  let g = arr[i]
  arr[i] =arr[j]
  arr[j] = g
}
console.log(arr)


let numbers = [3,4,5,6,7,2,3,5,6,9,0,1,0]
let result = {}
for(i of numbers){
  if(result[i]){
result[i]++
  }else{
    result[i]=1
  }
}
console.log(result)

// find the odd-even from the array using ternery operator
let oddEven = numbers.reduce((acc,ele)=>{
  return ele%2==0?{...acc,"even":("even" in acc?acc['even']+1:1)}:
  {...acc,"odd":('odd' in acc?acc['odd']+1:1)}
},{})
console.log(oddEven)

// find the odd-even using if else condition
let f = numbers.reduce((acc,ele)=>{{
  if(ele%2==0){
    return{...acc,'even':('even' in acc?acc['even']+1:1)}
  }
  else{
    return{...acc,'odd':('odd' in acc?acc['odd']+1:1)}
  }
}},{})
console.log(f)

//  square 
// function squareRoot(num){
// for(let i =num;i>num;i--)
// }
const vowels = "My name is Sachin DaAtiri";
const count = (vowels.match(/[aeiou]/gi) || []);
console.log(count.toString());

