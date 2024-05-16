function checkPalindrome(num){
// let original = num
let reversed  = 0

while(num!==0){
    let a = num%10
    reversed = reversed *10+a
    num = Math.floor(num/10)
}
// return original ===reversed
return reversed


}
let num = 123211
console.log(checkPalindrome(num))