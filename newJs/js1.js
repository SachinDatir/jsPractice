//  reverse num 
let num = 581999
let s = ''
while (num > 0) {
    let r = num % 10
    s += r
    let x = Math.floor(num / 10)
    num = x
}
let a = Number(s)
console.log(a)

//  check the string is palindrome or not
function palindrome(str) {
    let n = str.length
    let k = 0
    for (let i = 0; i < n / 2; i++) {
        if (str[i] != str[n - i - 1]) {
            k = 1
        }
    }
    if (k == 0) {
        console.log(`${str} is in palindrome`)
    }
    else if (k == 1) {
        console.log(`${str} is not in palindrome`)
    }
}
palindrome('Sachin')
palindrome('civic')


//  return num from string
let str = '12@135ad13WQT6HJ9If7.8!^9s$%*'
let result = ''
for (let i = 0; i < str.length; i++) {
    if (Number(str[i])) {
        result += str[i]
    }
}
let Res = Number(result)
console.log(Res)

//  another way
let z = str.split('').filter((el) => {
    return Number(el)
}).map((el) => {
    return Number(el)
})
console.log(z)

//  return letters from string
let str1 = '12@135ad13WQT6HJ9If7.8!^9s$%*'
let cap = ''
let small = ''
for (let i = 0; i < str1.length; i++) {
    if (str1[i] >= 'a' && str1[i] <= 'z') {
        small += str1[i]
    }
    else if (str1[i] >= 'A' && str1[i] <= 'Z') {
        cap += str1[i]
    }
}
console.log(small)
console.log(cap)


let str2 = 'zzzzttteeeqqaao'
let split = str2.split('')
console.log(split)

let r = split.filter((el,i)=>{
    return split.indexOf(el)==i
})
console.log(r)
//  node js1.js