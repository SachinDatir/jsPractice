// Count of capital from the string

const CountOfCapitals = (str) => {
  // let res = (str.match(/[aeiou]/gi||[]))
  // console.log(res.length)
  let vowels = "aeiouAEIOU";
  let count = 0;
  let capital = [];
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  console.log(count, capital);
};
CountOfCapitals("sachinDaA");

console.log("5" + 2 + 3);
console.log(2 + 3 + "5");

let myName = "sachin datir";
console.log(myName.split(" ").reverse().join(" "));

let rev = "";

for (let i = 0; i < myName.length; i++) {
  rev = myName[i] + rev;
}
console.log(rev);

function reverseWords(str) {
  let result = "";
  let word = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      // If a space is found, add the current word to the result in front of previous words
      result = " " + word + result;
      word = ""; // Reset the word
    } else {
      // Build the current word
      word += str[i];
    }
  }
  // Add the last word (since it won't be followed by a space)
  result = word + result;

  // Remove leading space from the result
  if (result[0] === " ") {
    result = result.slice(1);
  }

  return result;
}

// Example usage
let input = "sachin datir";
console.log(reverseWords(input)); // Output: "datir sachin"
let letVariable;
if (true) {
  var varVariable = "I am a var variable";
  letVariable = "I am let variable";
}
console.log(varVariable);
console.log(letVariable);

// console.log([9]===["9"])

const checkPromise = (a, b) => {
  // let a = 1
  // let b =2
  return new Promise((resolve, reject) => {
    let c = a + b;
    if (c == 9) {
      resolve("sum is equal to 9");
    } else {
      reject("sum is not equal");
    }
  });
};
// checkPromise(3, 6)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// return the maximum and second maximum from the array
const returnMaximumAndSecondMax = (arr) => {
  let maxNum = -Infinity;
  let secondMaxNum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      secondMaxNum = maxNum;
      maxNum = arr[i];
    } else if (arr[i] > secondMaxNum && arr[i] !== maxNum) {
      secondMaxNum = arr[i];
    }
  }
  if (secondMaxNum === -Infinity) {
    secondMaxNum = null;
  }
  console.log(maxNum, secondMaxNum);
};
returnMaximumAndSecondMax([-12]);
