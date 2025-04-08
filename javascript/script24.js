function reverseSpecificWord(str, index) {
  let words = str.split(" ");

  if (index < 0 || index >= words.length) {
    throw new Error("invalid index");
  }

  words[index] = [...words[index]].reverse().join("");
  return words.join(" ");
}
let input = "Sachin Vitthal Datir";
console.log(reverseSpecificWord(input, 2));

let strOne = "Sachin datir";
let strTwo = "Sachin gaikwad";

const similarStr = (strOne, strTwo) => {
  let a = strOne.split(" ");
  let b = strTwo.split(" ");
  let similar = [];
  let single = [];
  for (let i = 0; i < a.length; i++) {
    let found = false;
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[i]) {
        similar.push(a[i]);
        found = true;
        break;
      }
    }
    if (!found) {
      single.push(a[i]);
    }
  }
  for (let j = 0; j < b.length; j++) {
    if (!a.includes(b[j])) {
      single.push(b[j]);
    }
  }

  console.log(similar);
  console.log(single);
};

similarStr(strOne, strTwo);

const highestOcc = (arr) => {
  let res = {};
  for (const i of arr) {
    if (res[i]) {
      res[i]++;
    } else {
      res[i] = 1;
    }
  }
  console.log(res);

  let highocc = 0;
  let highOccNum;
  for (const num in res) {
    if (res[num] > highocc) {
      highocc = res[num];
      highOccNum = parseInt(num);
    }
  }
  console.log(highOccNum, highocc);
  console.log(typeof highOccNum);
};

highestOcc([12, 34, 56, 78, 9, 12]);

const strPalindrome = (str) => {
  let ss = str.length;
  let k = 0;
  for (let i = 0; i < ss / 2; i++) {
    if (str[i] != str[ss - i - 1]) {
      k = 1;
    }
  }

  if ((k = 1)) {
    console.log(`${str} is palindrome`);
  } else if (k == 0) {
    console.log(`${str} is not palindrome`);
  }
};
strPalindrome("Sachin");

const sortArray = (arr) => {
  // let rr = arr.split('')
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let s = arr[i];
        arr[i] = arr[j];
        arr[j] = s;
      }
    }
    console.log(arr);
  }
};
sortArray([12, 45, 6, 7, 89, 32, 14]);

const sortNum = (num) => {
  let rr = num.toString().split(""); // Convert number to string and split it into an array
  for (let i = 0; i < rr.length; i++) {
    for (let j = 0; j < rr.length; j++) {
      if (rr[i] > rr[j]) {
        let s = rr[i];
        rr[i] = rr[j];
        rr[j] = s;
      }
    }
  }
  console.log(parseFloat(rr.join("")));
};

sortNum(123456);

const maxAndSecMax = (arr) => {
  let max = -Infinity;
  let SecMax = -Infinity;
  for (let num of arr) {
    if (num > max) {
      max = num;
      SecMax = max;
    } else if (num > SecMax && el != max) {
      SecMax = el;
    }
  }
  console.log(max, SecMax);
};

maxAndSecMax([12, 34, 5, 6, 2, 2, 76, 3]);

//checck number palindrom

const checkPalindrome = (num) => {
  let reversed = 0;
  let originalNum = num;
  while (num != 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  return originalNum === reversed;
};
console.log(checkPalindrome(1231));
console.log(checkPalindrome(12121));

// check string palindrome

// const checkStrPalindrome = (str) => {
//   let a = str.length;
//   let k = 0;
//   for (let i = 0; i < a / 2; i++) {
//     if (str[i] != str[a - i - 1]) {
//       k = 1;
//     }
//   }
//   if (k == 0) {
//     console.log(`given ${str} is palindrome`);
//   } else if (k == 1) {  
//     console.log(`given ${str} is not palindrome`);
//   }
// };


checkPalindrome('sachin')

const strPalindrome1 = (str) => {
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

strPalindrome1('sachin')