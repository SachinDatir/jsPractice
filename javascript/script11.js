let str =
  "today is saturday and today we should go to explore the mumbai and mumbai is the biggest city of india, mumbai";
const highestOccurance = (str) => {
  let arr = str.split(" ");
  let res = {};
  for (i of arr) {
    if (res[i]) {
      res[i]++;
    } else {
      res[i] = 1;
    }
  }
  console.log(res);
};
highestOccurance(str);

// Int array1. 8,6,3,0,1,7,5,1,5. wap to find the sorting order /Ascending order logic for this...

let arr = [8, 6, 3, 0, 1, 7, 5, 1, 5];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      let c = arr[i];
      arr[i] = arr[j];
      arr[j] = c;
    }
  }
}
console.log(arr);

const stringPalindrome = (str) => {
  let res = str.length;
  let k = 0;
  for (let i = 0; i < res / 2; i++) {
    if (str[i] != str[res - i - 1]) {
      k = 1;
    }
  }

  if (k == 0) {
    console.log(`${str}` + " " + "is palindrome");
  } else if (k == 1) {
    console.log(`${str}` + " " + "is not palindrome");
  }
};

stringPalindrome("sachin");

// check given number is prime or not
const prime = (num) => {
  let k = 0;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      k == 1;
    }
  }
  if (k == 0) {
    console.log("Given number is prime");
  } else if (k == 1) {
    console.log("Given number is not prime");
  }
};
prime(5);

// ReverseTheString
let namee = "Welcome to ganore";
let reversed = "";
for (let i = 0; i < namee.length; i++) {
  reversed = namee[i] + reversed;
}
console.log(reversed);

let array = [1, 0, 0, 9, 2, 0];
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[i] < array[j]) {
      let f = array[i];
      array[i] = array[j];
      array[j] = f;
    }
  }
}
console.log(array.join('-'))

let r = 'Sachin datir'
let s = "Sachin tendulkar"
let rr =r.split(' ')
let ss = s.split(' ')
let setTwo = new Set(ss)
let filter = rr.filter((el)=>setTwo.has(el))
console.log(filter)