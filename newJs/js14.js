//  reverse the number
//  1st way
let num = 9146753015
let a = num.toString()
let b = a.split('').reverse().join('')
console.log(parseInt(b))

//  2nd way
function reverseNum(num){
let reversed = 0
while(num!==0){
    let digit = num %10
    reversed = reversed*10+digit
    num = Math.floor(num/10)
}
return reversed
}
let n = 9665187535
let d = reverseNum(n)
console.log(typeof(d))

//  check number is palindrome or not
function isPalindrome(num){
    let original =num
    let reversed =0

    while(num>0){
        let digit = num%10
        reversed = reversed*10+digit
        num = Math.floor(num/10)
    }
    return original ===reversed
}
let check = 12321
console.log(isPalindrome(check))

let reverseStr = "Today is sunday"
let r = reverseStr.split(' ').reverse().join(' ')
console.log(r)
let rev  =''
for(let i = 0;i<reverseStr.length;i++){
    rev= reverseStr[i] + rev
}
console.log(rev)

// reverse array
let arr = ["Mumbai","Pune","Nashik","Nagpur"]
let f = arr.length
for(let i = 0, j = f-1; i <= j;i++,j--){
let e = arr[i]
arr[i] = arr[j]
arr[j] = e
}
console.log(arr)
