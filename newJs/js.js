// Program 1
// removing dulpicates from array
let arr = [11, 22, 33, 44, 55, 77, 22, 33]
let a = arr.filter((el, index) => {
    return arr.indexOf(el) == index
})
console.log(a)
// using set method
let set = new Set(arr)
console.log(set)

//  find the max and min from given arr
let arr1 = [123, 45, 67, 98, 23, 76, -1]
let a2 = arr1.reduce((acc, el) => {
    if (el > acc) {
        return el
    } else {
        return acc
    }
})
console.log(a2)
//  find the minimum
let a3 = arr1.reduce((acc, el) => {
    if (el > acc) {
        return acc
    } else {
        return el
    }
})
console.log(a3)

//  reverse the string
let str = "Happy new year"
let rev = ""
for (let i = 0; i < str.length; i++) {
    rev = str[i] + rev
}
console.log(rev)

//  reverse string by words
var str1 = "Happy new year"
var a4 = str1.split(' ').reverse().join(' ')
console.log(a4)

//  find the largest word from the string
let str2 = "find the largest word from the string"
let b = str2.split(' ').reduce((acc, el) => {
    if (el.length > acc.length) {
        return el
    }
    else {
        return acc
    }
})
console.log(b)

// find the largest word from the arr
let str3 = ['sangamner', 'sangameshwar', 'amrutvahini']
let b1 = str3.reduce((acc, el) => {
    if (el.length > acc.length) {
        return el
    }
    else {
        return acc
    }
})
console.log(b1)

//  remove space in between and return r=string
let str4 = "Mins kole"
let Respace = ""
for (let i = 0; i < str4.length; i++) {
    if (str4[i] !== " ") {
        Respace = Respace + str4[i]
    }
}
console.log(Respace)

//  find the vowels in the string
let song = "Tu isq isq sa mere rooh me aake bsja"
let count = 0
for (let i = 0; i < song.length; i++) {
    if (song[i] == 'a' || song[i] == 'e' || song[i] == 'i' || song[i] == '' || song[i] == 'u') {
        count = count + 1

    }
}
console.log(count)

//  prime numbers
function Prime(N) {
    let count = 0
    for (let i = 2; i < N; i++) {
        if (i % N == 0) {
            count = 1
            break
        }
    }
    if (count == 0) {
        console.log(N, "is prime number")
    }
    else if (count == 1) {
        console.log(N, "is prime not number")
    }
}
Prime(3)

function Fibonacci(N) {
    let a = 0, b = 1
    for (let i = 3; i <= N; i++) {
        let c = a + b
        console.log(c)
        a = b
        b = c
    }

}
Fibonacci(8)

//  factorial of any number
function Facto(N) {
    let c = 1
    for (let i = N; i >= 1; i--) {
        c = c * i
    }
    console.log(c)
}
Facto(4)


function FACTO(n) {
    let c = 1
    for (let i = n; i > 1; i--) {
        c = c * i
    }
    console.log(c)
}
FACTO(5)

//  Reverse the array
let array = ['Pune', 'Nashik', 'Nagpur', 'Satara', 'rajur', 'kolhapur']
let A = array.length - 1
for (let i = 0, j = A; i < a / 2, j >= A / 2; i++, j--) {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}
console.log(array)

//  Transfer all num into right side
let arr2 = [1, 4, 0, 2, 0, 9]
let newA = []
let secA = []
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] != 0) {
        secA.push(arr2[i])
    } else {
        newA.push(arr2[i])
    }
}
console.log(secA.concat(newA))

//  count the repeated word
let word = 'i am learning javascript and javascript with cypress automation tool'
let Wcount = word.split(' ')
let count1 = 0
for (let i = 0; i < Wcount.length; i++) {
    if (Wcount[i].includes('javascript')) {
        count1++
    }
}
console.log(count1)

//  Extract all num from string and display only unique num
let strr = 'Sachin123#brainvision12345'
let Cnum = strr.split('').filter((el) => {
    return Number(el)
}).map((el) => {
    return Number(el)
})
let set1 = new Set(Cnum)
console.log(set1)

// check if given substring is present in other string by using function
function substring(str1, str2) {
    if (str1.includes(str2)) {
        console.log("substring is present")
    } else {
        console.log('substring is not present')
    }
}

substring('Sachin123#brainvision', 'bion')

//sorting by +ve and -ve
let arrr = [12, 54, 67, 54, 23, 42, 11, -1, -57, -9, -7]
let Pve = []
let Nve = []
for (let i = 0; i < arrr.length; i++) {
    if (arrr[i] > 0) {
        Pve.push(arrr[i])
    }
    else if (arrr[i] < 0) {
        Nve.push(arrr[i])
    }
}
console.log(Pve, Nve)


let arr3 = ['pune', 'akole', 'sangamner', 'mumbai', 'delhi']
let rev1 = []
for (let i = arr3.length; i > 0; i--) {
    rev1.push(arr3[i])
}
console.log(rev1)


let num = [12, 45, 65, 34, -1, -3, -6]
let Pve1 = []
let Nve1 = []
let Q = num.filter((el) => {
    if (el > 0) {
        Pve1.push(el)
    }
    else if (el < 0) {
        Nve1.push(el)
    }
})
console.log(Pve1, Nve1)

//  sorting out 
let x1 = ['aky', 'ary', 'hey', 'all', 'hello', 'hand']
console.log(x1.sort())

for (let i = 0; i < x1.length; i++) {
    for (let j = 0; j < x1.length; j++) {
        if (x1[i] < x1[j]) {
            let t = x1[i]
            x1[i] = x1[j]
            x1[j] = t
        }
    }
}
console.log(x1)


// check if the array is sorted or not

let n = x1.length - 1
let s = 0
for (let i = 0; i < n; i++) {
    if (x1[i] > x1[i - 1]) {
        s = 1
    }
}
if (s == 1) {
    console.log('not sorted')
}
else if (s == 0) {
    console.log('sorted')
}

// check if the array is sorted or not(decreasing or increasing order in same function)
function sorted(x) {
    let a = x.length - 1
    let s = 0
    let s1 = 0
    for (let i = 0; i < a; i++) {
        if (x[i] > x[i - 1]) {
            s = 1
        }
        if (x[i] < x[i - 1]) {
            s1 = 1
        }
    }
    if (s == 0 || s1 == 0) {
        console.log('sorted')
    }
    else {
        console.log('not sorted')
    }
}
sorted([5, 4, 3, 6, 1])
sorted([12, 34, 56, 78, 90])

//  prathsmesh batch find the max and min from the array
function MaxMini(N) {
    let max = N[0]
    let min = N[0]
    for (let i = 0; i < N.length; i++) {
        if (max <= N[i]) {
            max = N[i]
        }
        else if (min >= N[i]) {
            min = N[i]
        }
    }
    console.log(max, min)
}
MaxMini([89, 54, 67, 87, 543, 2414, 6635, 5355, 33336, 53, 35])
MaxMini(['sangamner', 'kolhapur', 'hinjwadie', 'koregaon', 'akole'])


//  find the pair of element in array with sum is equal to given number
let Num = [3, 5, 4, 2, 6]
let N = 9
let ii = undefined
let jj = undefined
for (let i = 0; i < Num.length; i++) {
    for (let j = 0; j != i, j < Num.length; j++) {
        if (Num[i] + Num[j] == N) {
            ii = i
            jj = j
            break
        }
    }
}
console.log(ii)
console.log(jj)

//Can a given array be made strictly increasing or not(based on current elements)
let arr4 = [12, 45, 65, 67, 11, 1]
let set2 = new Set(arr4)
if (set2.size == arr4.length) {
    console.log("made strictly increasing")
}
else {
    console.log('Not made strictly increasing')
}

//  check the string is palindrome or not 
let string = "sachin"
let q = string.length
let k = 0
for (let i = 0; i < q / 2; i++) {
    if (string[i] != string[n - i - 1]) {
        k = 1
    }
}
if (k == 0) {
    console.log('string is palindrome')
}
else if (k == 1) {
    console.log('not palindrome')
}

function strPalindrome(str) {
    let n = str.length
    let z = 0
    for (let i = 0; i < n / 2; i++) {
        if (str[i] != str[n - i - 1]) {
            z = 1
        }
    }
    if (z == 0) {
        console.log('str is palindrome')
    }
    else if (z == 1) {
        console.log('str is not palindrome')
    }
}
strPalindrome('civic')
strPalindrome("sachin")


//  Reverse a num 

let Nu = 4543
let v = ''
while (Nu > 0) {
    let r = Nu % 10
    v += r
    let x = Math.floor(Nu / 10)
    Nu = x
}
let f = Number(v)
console.log(f)

//  find the square root of any number
let num1 = 81
for (let i = 1; i ** 2 <= num1; i++) {
    if (i ** 2 == num1) {
        console.log(i)
    }
}

//  using function 
function square(n) {
    for (let i = 0; i ** 2 <= n; i++) {
        if (i ** 2 == n) {

        }
    }

}
square(49)


//  find the cube root of number by using function
function cubeRoot(N) {
    for (let i = 0; i ** 3 <= N; i++) {
        if (i ** 3 == N) {
            console.log(i)
        }
    }
}
cubeRoot(343)

function squareRoot(N) {
    for (let i = 0; i ** 2 <= N; i++) {
        if (i ** 2 == N) {
            console.log(i)
        }
    }
}
squareRoot(36)

//  