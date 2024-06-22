const strPalindrome = (str) => {
  let aa = str.length;
  let k = 0;
  for (let i = 0; i < aa / 2; i++) {
    if (str[i] != str[aa - i - 1]) {
      k = 1;
    }
  }
  if (k == 0) {
    console.log(`${str} is palindrome`);
  } else if (k == 1) {
    console.log(`${str} is not palindrome`);
  }
};
strPalindrome("sachina");
strPalindrome("civic");

let even = [12, 1, 4, 6, 7];
let g = even.filter((el) => {
  if (el % 2 == 0) {
    console.log(el);
  }
});
console.log(g);

//Calculate count of capitals in the string
const countOfCapitalAndsmall = (str) => {
  let count = 0;
  let capital = "";
  let small = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      count++;
      capital += str[i];
    } else if (str[i] >= "a" && str[i] <= "z") {
      small += str[i];
    }
  }
  console.log(count, capital, small);
};
countOfCapitalAndsmall("SaChinDaTIrR");

var sortBy = function (arr, fn) {
  if (typeof arr[0] === "object") {
    arr.sort((a, b) => a[fn] - b[fn]);
  } else {
    arr.sort((a, b) => a - b);
  }
  console.log(arr);
};
let number = [1, 5, 7, 9, 2, 3];
sortBy(number);

const vowels = (str) => {
  const count = str.match(/[aeiou]/gi) || [];
  console.log(count);
};
vowels("my name is skd uu");

const findVowels = (str) => {
  const vowel = "aeiouAEIOU";
  let count = 0;
  res = "";
  for (let char of str) {
    if (vowel.includes(char)) {
      count++;
      res += char;
    }
  }
  console.log(res)
  return count
};
console.log(findVowels("My name is Sachin"));
