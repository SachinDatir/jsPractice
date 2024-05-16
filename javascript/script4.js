let str = "56568768%^^%&^&AAvfsgfueAAAFDFHGYFYuugjg897865jgudu";
let res = str
  .split("")
  .filter((el) => {
    return Number(el);
  })
  .map((el) => {
    return Number(el);
  });
console.log(res.join());

// another way to filter the numnbers
let res1 = "";
for (let i = 0; i < str.length; i++) {
  if (Number(str[i])) {
    res1 += str[i];
  }
}
console.log(parseInt(res1));

let small = "";
let cap = "";
str.split("").forEach((el) => {
  if (el >= "a" && el <= "z") {
    small += el;
  } else if (el >= "A" && el <= "Z") {
    cap += el;
  }
});
// console.log(a)
console.log(small);
console.log(cap);

let array = [12, 24, 36, 48, 60];
let f = array.reduce((acc, el) => {
  return acc + el;
});
console.log(f);

let numbers = [5, 8, 3, 12, 6, -1];

let min = numbers.reduce((accumulator, currentValue) => {
  return Math.min(accumulator, currentValue);
}, Infinity); // Initialize the accumulator with positive infinity

console.log("Minimum value:", min); 

// return sililar element and single element from two array

let arr1 = [1, 4, 8, 3, 8, 4, 2];
let arr2 = [1, 4, 3, 8, 4, 2, 9, 54, 7, 33];
let doubleEl = [];
let singleEl = [];
for (let i = 0; i < arr1.length; i++) {
  let found = false;
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      doubleEl.push(arr1[i]);
      found = true;
      break;
    }
  }
  if (!found) {
    singleEl.push(arr1[i]);
  }
}
for (let j = 0; j < arr2.length; j++) {
  if (!arr1.includes(arr2[j])) {
    singleEl.push(arr2[j]);
  }
}
console.log(doubleEl);
console.log(singleEl);

var filter = function (arr, fn) {
  arr.filter((el) => {
    if (el >= 10) {
      console.log(el);
    }
  });
};
filter([6, 10, 12, 45, 67]);

var sortBy = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][fn] > arr[j][fn]) {
        let a = arr[i];
        arr[i] = arr[j];
        arr[j] = a;
      }
    }
  }
  console.log(arr);
};
// sortBy([5, 4, 1, 2, -3])
let sortArr = [{ x: 1 }, { x: 0 }, { x: -1 }];
// sortBy(sortArr,'x')

var sortByObject = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][fn] > arr[j][fn]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
};

var data = [{ x: 1 }, { x: 0 }, { x: -1 }];
// sortByObject(data, 'x'); // Output: [{"x": -1}, {"x": 0}, {"x": 1}]

const sortBySort = (arr, fn) => {
  if (typeof arr[0] === "object") {
    arr.sort((a, b) => a[fn] - b[fn]);
  } else {
    arr.sort((a, b) => a - b);
  }

  console.log(arr);
};
sortBySort([{ y: 1 }, { y: 0 }, { y: -3 }], "y");
let number = [1, 5, 7, 9, 2, 3];
sortBySort(number);

var sortBy2 = function (arr, fn) {
  if (typeof arr[0] === "object") {
    arr.sort((a, b) => a[fn] - b[fn]);
  } else {
    arr.sort((a, b) => a - b);
  }
  console.log(arr);
};

// Sorting an array of numbers
var number1 = [3, 1, 2];
sortBy2(number1); // Output: [1, 2, 3]

// Sorting an array of strings
var strings = ["banana", "apple", "cherry"];
sortBy2(strings); // Output: ['apple', 'banana', 'cherry']
