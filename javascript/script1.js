// reverse the number
const reverseNum = (num) => {
  let reversed = 0;
  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  console.log(reversed);
};
reverseNum(101031);

const checkNumPalindrome = (num) => {
  let originalNum = num;
  let reversed = 0;
  while (num !== 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  return originalNum === reversed;
};

let num = 1232;
console.log(checkNumPalindrome(num));

if (checkNumPalindrome(num)) {
  console.log(`${num} is palindrome`);
} else {
  console.log(`${num} is not palindrome`);
}

// another way to reverse the number
// let number = 9146753015

const palidrome = (num) => {
  let a = 0,
    b = 1;
  for (let i = 2; i < num; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
};
palidrome(7);

// reverse the array
let arr = ["pankaj", "rahul", "sanket", "gaurav", "pranamya"];
let a = arr.length;
for (let i = 0, j = a - 1; i <= j; i++, j--) {
  let c = arr[i];
  arr[i] = arr[j];
  arr[j] = c;
}
console.log(arr);
// sort the array by ascendding or descending
let arr1 = [
  "pankajMore",
  "rahulGunjal",
  "sanketDatir",
  "gauravChavan",
  "pranamyaPangare",
];
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[i] > arr1[j]) {
      let b = arr1[i];
      arr1[i] = arr1[j];
      arr1[j] = b;
    }
  }
}
console.log(arr1);

// find the count of each element
let str = "MyyyNNameeIsSSachin";
let b = str.split("");
console.log(b);
let obj = {};
for (i of b) {
  if (obj[i]) {
    obj[i]++;
  } else {
    obj[i] = 1;
  }
}
console.log(obj);
