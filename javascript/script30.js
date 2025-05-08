const findLargestEl = (arr) => {
  let largestEl = arr[0];
  for (let i = 0; i < arr.length; i++) {
    largestEl = arr[i] > largestEl ? arr[i] : largestEl;
  }
  console.log(largestEl);
};
findLargestEl([11, 2, 34, 4, 5, 6, 7, 8, 9, 10]);

findTheSmallestEL = (arr) => {
  let smallEl = arr[0];
  for (let i = 0; i < arr.length; i++) {
    smallEl = arr[i] < smallEl ? arr[i] : smallEl;
  }
  console.log(smallEl);
};

findTheSmallestEL([11, 2, 34, 4, 5, 6, 7, 8, 9, 10]);

// sum the number
const sumOfNum = (num) => {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  console.log(sum);
};

sumOfNum(12345);

function sumOfNums(num) {
  let r = num.toString();
  let dig = r.split("");
  let sum = dig.reduce((acc, el) => acc + parseInt(el), 0);

  return sum;
}

console.log(sumOfNums(343));

const reverseWord = (string, index) => {
  let w = string.split(" ");
  if (index <= 0 || index > w.length) {
    throw Error("invalid index");
  }

  w[index] = [...w[index]].reverse().join("");

  console.log(w);
};
reverseWord("sachin datir", 1);

const fibo = (num) => {
  let a = 0,
    b = 1;
  if (num > 0) {
    console.log(a);
    console.log(b);
  }
  for (let i = 3; i <= num; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
};
fibo(8);

// /Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Input: nums = [2,2,1]
var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
        nums.splice(i, 1);
        i--;
        break;
      }
    }
  }
  return nums[0];
};
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([2, 2, 1, 8, 1, 0, 4, 4, 8]));

var isPalindrome = function (s) {
  let k = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[s.length - 1 - i]) {
      k++;
    }
  }
  if (k === s.length) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome("racecar"));

const checkIsPalindrome = (str) => {
  let k = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      k = 1;
    }
  }
  if (k == 0) {
    console.log("str is palindrome");
  } else if (k == 1) {
    console.log("str is not palindrome");
  }
};
checkIsPalindrome("racecar");
checkIsPalindrome("raceacar");

let Input = " -042";

if (typeof Input === "string") {
  let str = Input.trim();
  console.log(str);
  let num = parseInt(str);
  console.log(num);
  console.log(typeof num);
}

let input2 = "1337c0d3";
let returnNumber = input2.split("");
let result = returnNumber.filter((el) => {
  return !isNaN(el);
});
console.log(result.join(""));

let str = "sadbutsad";
// ooutput sad
if (str.includes("sabu")) {
  console.log(str.indexOf("sabu"));
} else {
  console.log(-1);
}

let length = "Hello World";

let aa = length.split(" ");
console.log(aa[aa.length - 1].length);

var isNumber = function (s) {
  let regex = /^[+-]?(\d+|\d+\.\d+|\.\d+)([eE][+-]?\d+)?$/;
  return regex.test(s);
};
console.log(isNumber("3.14"));
console.log(isNumber("."));

var largestNumber = function (nums) {
  // Convert each number to a string
  let strs = nums.map(String);

  // Sort using custom comparator: (b + a) vs (a + b)
  strs.sort((a, b) => (b + a).localeCompare(a + b));

  // strs.sort((a,b)=>(b+a).localeCompare(a+b))

  // If the largest number is '0', the whole number is zero
  if (strs[0] === "0") return "0";

  // Join and return the result
  return strs.join("");
};
console.log(largestNumber([5, 0, 9])); //

let nums = [3, 30, 34, 34, 5, 9];
let strs = nums.map(String);

strs.sort((a, b) => (b + a).localeCompare(a + b));
if (strs[0] == 0) return "0";

// return strs.join('')
console.log(strs.join(""));


// return all strings in words that are a substring of another word.
var stringMatching = function (words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[i].includes(words[j])) {
        result.push(words[j]);
      }
    }
  }
  console.log(result);
};

stringMatching(["Sachin", "chin", "datir", "tir", "Sn"]);
