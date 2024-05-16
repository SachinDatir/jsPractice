const reverseNumber = (num) => {
  let reversed = 0;
  while (num != 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  console.log(reversed);
};

reverseNumber(356);

const checkNumPlandrome = (num) => {
  let originalNum = num;
  let reversed = 0;
  while (num !== 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  return originalNum === reversed;
};
if (checkNumPlandrome(12321)) {
  console.log("num is palindrome");
} else {
  console.log("num is not palindrome");
}

// find th targetd element from the array

let arr = [12, 45, 67, 80, 5, 95];
let target = 100;
let res = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      res.push(arr[i], arr[j]);
    }
  }
}
console.log(res);

// return the similar and single element form the arr and return

const element = (arr, arr2) => {
  let doubleEl = [];
  let singleEl = [];
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr[i] === arr2[j]) {
        doubleEl.push(arr[i]);
        found = true;
        break;
      }
    }
    if (!found) {
      singleEl.push(arr[i]);
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (!arr.includes(arr2[j])) {
      singleEl.push(arr2[j]);
    }
  }

  console.log(doubleEl, singleEl);
  // console.log(singleEl)
};

element([12, 34, 56, 78], [11, 24, 34]);

const oppoPyramid = (str) => {
  for (let i = str; i >= 0; i--) {
    let s = "";
    for (let j = str; j >= 0; j--) {
      if (i >= j) {
        s += " *";
      } else if (i <= j) {
        s += " ";
      }
    }
    console.log(s);
  }
};

oppoPyramid(8);

const matrix = (num) => {
  for (let i = num; i >= 0; i--) {
    let s = "";
    for (let j = 0; j <= num; j++) {
      if (j >= i) {
        s += "* ";
      } else {
        s += " ";
      }
    }
    console.log(s);
  }
};
matrix(8);

const sortArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let s = arr[i];
        arr[i] = arr[j];
        arr[j] = s;
      }
    }
  }
  console.log(arr);
};

sortArray([12, 34, 20,100,56, 78]);
