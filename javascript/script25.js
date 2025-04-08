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

//return the maximum element from the

const returnMaxEl = (arr) => {
  let a = arr[0];
  for (let i = 0; i < arr.length; i++) {
    a = a > arr[i] ? a : arr[i];
  }
  console.log(a);
};
returnMaxEl([-3, -5, -7, -1]);

const returnMinEl = (arr) => {
  let a = arr[0];
  for (let i = 0; i < arr.length; i++) {
    a = a < arr[i] ? a : arr[i];
  }
  console.log(a);
};
returnMinEl([-3, -5, -7, -1]);

//return the second max

const secMaxEl = (arr) => {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (el of arr) {
    if (el > max) {
      secondMax = max;
      max = el;
    } else if (el > secondMax && el != max) {
      secondMax = el;
    }
  }

  console.log(max);
  console.log(secondMax);
};
secMaxEl([3, 5, 7, 8, 9, 12]);

console.log(Math.abs(0.2 + 0.1 == 0.3));
function areEqual(a, b, tolerance = Number.EPSILON) {
  return Math.abs(a - b) < tolerance;
}

console.log(areEqual(0.2 + 0.1, 0.3)); // Outputs: true

const sortByNum = (num) => {
  let res = num.toString().split("");
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res.length; j++) {
      if (res[i] > res[j]) {
        let r = res[i];
        res[i] = res[j];
        res[j] = r;
      }
    }
  }
  console.log(parseFloat(res.join("")));
};
sortByNum(1234);

const primeNum = (num) => {
  let k = 0;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      k = 1;
    }
  }
  if (k == 0) {
    console.log("given number is prime");
  } else if (k == 1) {
    console.log("given number is not prime");
  }
};
primeNum(3);
primeNum(8);
primeNum(6);

//remove the dulicates

const removeDup = (arr) => {
  let res = arr.filter((el, index) => {
    return arr.indexOf(el) == index;
  });
  console.log(res);
};
removeDup([12, 12, 45, 67, 89, 45, 1]);

let r = "Sachin datir";
let s = "Sachin tendulkar";
let rr = r.split(" ");
let ss = s.split(" ");
let setTwo = new Set(ss);
let filter = rr.filter((el) => setTwo.has(el));
console.log(filter);

//highest occ

const filterEl = (str) => {
  let arr = str.split(" ");
  let res = {};
  for (const el of arr) {
    if (res[el]) {
      res[el]++;
    } else {
      res[el] = 1;
    }
  }
  console.log(res);

  let highOcc = 0;
  let highoccStr = "";
  for (const word in res) {
    if (res[word] > highOcc) {
      highOcc = res[word];
      highoccStr = word;
    }
  }
  console.log(highOcc, highoccStr);

  if (Array.isArray(str)) {
    for (const el of str) {
      if (res[el]) {
        res[el]++;
      } else {
        res[el] = 1;
      }
    }
  }
  console.log(res);
};

filterEl("Sachin datir Sachin DATIR");
filterEl("today is sunday sunday is holiday");

const fibonacci = (num) => {
  let a = 0,
    b = 1;
  if (num > 0) {
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
fibonacci(8);

const palindrome = (num) => {
  let original = num;
  let reversed = 0;
  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  return original === reversed;
};
console.log(palindrome(123));
console.log(palindrome(12121));

//reverse the array

const revArray = (arr) => {
  let rr = arr.length;
  for (let i = 0, j = rr - 1; i <= j; i++,j--) {
    let n = arr[i]
    arr[i] = arr[j]
    arr[j] = n
  }
  console.log(arr)
};
revArray([1,3,4,6,7])


