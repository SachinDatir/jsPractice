// Star pattern
for(let i =0;i<=5;i++){
    let s = ''
    for(let j =0;j<=i;j++){
        s+='* '
    }
    console.log(s)
}

console.log('*************$$*************')

for(let i =5;i>=1;i--){
    let s = ''
    for(let j = 1;j<= 5;j++){
        if(j >= i){
            s+='*'
        } else if(j<=i){
            s+=' '
        }
    }
    console.log(s)
}


const str =(str)=>{
    let b = {}
    let j = str.split("")
    // let r = parseFloat(j)
    // for(const i in j{
    // if(b[i]){
    // b++
    // }
    // else{
    // b=1
    // }
    // })

    for(const i in j){
        if(b[i]){
            b[i]++
        }
        else{
            b[i]=1
        }
    }
    console.log(b)
}
    str("sachin")

// Check number is palidrome or not
const checkPalindrome=(num)=>{
    let originalNumber = num
    let reversedNumber = 0

   
    while (num > 0) {
        const digit = num % 10;
        reversedNumber = reversedNumber * 10 + digit;
        num = Math.floor(num / 10);
    }
    const digit = num % 10;
        reversedNumber = reversedNumber * 10 + digit;
        num = Math.floor(num / 10);

    return originalNumber === reversedNumber;
}

const numberToCheck = 12321
if(checkPalindrome(numberToCheck)){
    console.log(`${numberToCheck} is palindrome`)
}
else{
    console.log(`${numberToCheck} is not palindrome`)
}
// console.log(checkPalindrome(numberToCheck))

// Found odd and even using reduce function

const revNum=(num)=>{
// let originalNum = num
let reverseNum = 0
while(num!=0){
    let digit = num %10
    reverseNum = reverseNum*10+digit
    num = Math.floor(num/10)
}
return reverseNum
}

let num = 1234
console.log(revNum(num))

// Vowels count
const Name = "My name is sachinA"
let count = (Name.match(/[aeiou]/gi)||[]).length;
console.log(count)

// Sign name a.a aaa
let myName = "Sachin Vitthal Datir"
let a = myName.split(' ')
let signName = ''
for(let i =0 ;i<a.length;i++){
signName+=a[i].split('')[0]+'. '
}
console.log(signName+a[a.length-1])
