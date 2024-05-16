function returnTarget(target, arr) {
  let resPlus = [];
  let resMinus = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        resPlus.push(arr[i], arr[j]);
      } else if (arr[i] - arr[j] === target) {
        resMinus.push(arr[i], arr[j]);
      }
    }
  }
  console.log(resPlus, resMinus);
}
returnTarget(10, [15, 4, 5, 6, 4]);

//  return number of each element from the array

function returnCountOfElement(arr) {
  let res = {};
  for (i of arr) {
    if (res[i]) {
      res[i]++;
    } else {
      res[i] = 1;
    }
  }
  console.log(res);
}

returnCountOfElement([12, 3, 4, 5, 3, 12]);

function reverseNumber(num) {
  let reversed = 0;
  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  return reversed;
}
let numToReverse = reverseNumber(321);
console.log(numToReverse);

const oppoPyramid = (num) => {
  for (let i = num; i >= 0; i--) {
    let s = "";
    for (let j = num; j >= 0; j--) {
      if (i >= j) {
        s += " *";
      } else if (i <= j) {
        s += " ";
      }
    }
    console.log(s);
  }
};
oppoPyramid(7);
console.log(1 + "1" - 1);
