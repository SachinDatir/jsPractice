// filter the duplicate and remove
let str = "abcaabbcd";
let a = str.split("");
let res = a.filter((el, index) => {
  return a.indexOf(el) == index;
});
console.log(res);

//
let string = "My name Skd";
let result = string.split(" ");
console.log(result[result.length - 1]);

const fibonacci = (num) => {
  let a = 0,
    b = 1;
  if (num > a) {
    console.log(a);
    console.log(b);
  }
  for (let i = 2; i < num; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
};
fibonacci(7);

// check the element is palidroe

const palidromme = (num) => {
  let originalNum = num;
  let reversed = 0;
  while (num != 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return originalNum === reversed;
};

checkFor = 123211;
if (palidromme(checkFor)) {
  console.log("yes");
} else {
  console.log("false");
}

// revrse the number
function reverseNumber(num) {
  let reversed = 0;
  while (num !== 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  return reversed;
}

console.log(reverseNumber(1230));
// another way to revere the number
function revNumber(num) {
  let numStr = num.toString();
  let reverseStr = numStr.split("").reverse().join("");
  let reversed = parseInt(reverseStr);
  return reversed;
}
console.log(revNumber(1340));
(arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
]),
  (arr2 = [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 },
  ]);

// console.log(arr1.concat(arr2))

let sqaures = [2, 9];
let square = sqaures.map((num) => num * num);
// console.log(square)

// function square(num){
//     let square = [num].map(num=>num*num)[0]
//     console.log(square)
// }
// square([4])

// check string is palindrome or not

const strPalindrome = (str) => {
  let a = str.length;
  let k = 0;
  for (let i = 0; i < a / 2; i++) {
    if (str[i] != str[a - i - 1]) {
      k = 1;
    }
  }
  if (k == 0) {
    console.log(`${str} is palindrome`);
  } else if (k == 1) {
    console.log(`${str} is not palindrome`);
  }
};

strPalindrome("sachin");
strPalindrome("civic");

function fibo(m) {
    let a = 0, b = 1
    if(m>0){
        console.log(a)
        console.log(b)
    }
    for (let i = 3; i <= m; i++) {
        c = a + b
        console.log(c)
        a = b
        b = c
    }
}

fibo(8)

const returnLongestSubstring = (str)=>{
    let arr = str.split(' ')
    // console.log(arr)
    let res = arr.reduce((acc,el)=>{
      if(el.length>acc.length){
          return el
      }
      else{
          return acc
      }
    })
    console.log(res)
  }
  
  returnLongestSubstring("Today's match is El-classico of the IndianPrimiourleague")