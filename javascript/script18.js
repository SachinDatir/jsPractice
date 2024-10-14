const pyramid = (num) => {
  for (let i = num; i >= 0; i--) {
    let s = "";
    for (let j = 0; j <= num; j++) {
      if (i >= j) {
        s += " ";
      } else if (i <= j) {
        s += "* ";
      }
    }
    console.log(s);
  }
};
pyramid(7);

const oppoPyramid = (num) => {
  for (let i = num; i >= 0; i--) {
    let s = "";
    for (let j = num; j >= 0; j--) {
      if (i >= j) {
        s += "* ";
      } else if (j >= i) {
        s += " ";
      }
    }
    console.log(s);
  }
};

oppoPyramid(7);

// sort array with asceding or deceding order

const sortBy = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let c = arr[i];
        arr[i] = arr[j];
        arr[j] = c;
      }
    }
  }
  console.log(arr);
};

sortBy([12, 45, 67, 89]);

// check string palindrome

const checkStrPalindrome = (str) => {
  let aa = str.length;
  let k = 0;
  for (let i = 0; i < aa / 2; i++) {
    if (str[i] != str[aa - i - 1]) {
      k = 1;
    }
  }
  if (k == 0) {
    console.log("string is palindrome");
  } else if (k == 1) {
    console.log("string is not palindrome");
  }
};

checkStrPalindrome("sachin");

// check odd even

const checkOddEven = (arr) => {
  let res = arr.reduce((acc, el) => {
    if (el % 2 == 0) {
      return { ...acc, even: "even" in acc ? acc["even"] + 1 : 1 };
    } else {
      return { ...acc, odd: "odd" in acc ? acc["odd"] + 1 : 1 };
    }
  }, {});
  console.log(res);
};
checkOddEven([12, 4, 7, 2]);

const maxAndSecondMax = (arr) => {
  let max = -Infinity;
  let secondMax = -Infinity;
  for (const el of arr) {
    if (el > max) {
      secondMax = max;
      max = el;
    } else if (el != max && el > secondMax) {
      secondMax = el;
    }
  }
  console.log(max, secondMax);
};

maxAndSecondMax([12, -34, -68, -334, -665]);

const maximumGap = (arr) => {
  if (arr.length < 2) {
    return 0;
  }
  arr.sort((a, b) => a - b);
  let maxDiff = 0;
  for (let i = 1; i < arr.length; i++) {
    let diff = arr[i] - arr[i - 1];
    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }
  return maxDiff
};
let a =maximumGap([2,4,9,12,9])
let b =maximumGap([2,2])
console.log(a,b)

