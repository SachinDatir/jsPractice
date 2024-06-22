let array1 = ["sachin", "pankaj", "madan", "sanket"];
let array2 = ["sachin", "pankaj", "madan", "sanket", "rahul", "pranamya"];
let res = [];
let res1 = [];

for (let i = 0; i < array1.length; i++) {
  let found = false;
  for (let j = 0; j < array2.length; j++) {
    if (array1[i] === array2[j]) {
      res.push(array1[i]);
      found = true;
      break;
    }
  }
  if (!found) {
    res1.push(array1[i]);
  }
}
for (let j = 0; j < array2.length; j++) {
  if (!array1.includes(array2[j])) {
    res1.push(array2[j]);
  }
}

console.log("Similar elements:", res);
console.log("Different elements:", res1);

console.log("****************");

let num1 = [8, 3, 0, 4, 2, 6];
let num2 = [7, 6, 3, 8, 5, 1, 4, 0, 9];

function findSimilarElement(num1, num2) {
  const set2 = new Set(num2);
  const similarElement = num1.filter((num) => set2.has(num));
  return similarElement;
}
const numbers = findSimilarElement(num1, num2);
console.log(numbers);

const sortArray = (num) => {
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (num[i] < num[j]) {
        let s = num[i];
        num[i] = num[j];
        num[j] = s;
      }
    }
  }
  console.log(num);
};
sortArray([8, 6, 3, 0, 1, 7, 5, 1, 5]);
sortArray([
  "pankajBhupeshMore",
  "pandajBhupeshMore",
  "rahulBalasahebGunjal",
  "sanketJagannathDatir", 
  "gauravSharadChavan",
  "pranamyaKailasPangare",
]);
let arr2 = [
  "pankajBhupeshMore",
  "pandajBhupeshMore",
  "rahulBalasahebGunjal",
  "sanketJagannathDatir",
  "gauravSharadChavan",
  "pranamyaKailasPangare",
];
console.log("****%%%%%%%%%%%%%");
sortArray(["sachin", "sabin"]);
let arr3 = ["sachin", "sabin"];

console.log(arr3.sort());

// cuberoot
function cubeRoot(num) {
  for (let i = 0; i ** 3 <= num; i++) {
    if (i ** 3 == num) {
      console.log(i);
    }
  }
}
cubeRoot(343);

function squareRoot(num) {
  for (let i = 0; i ** 2 <= num; i++) {
    if (i ** 2 == num) {
      console.log(i);
    }
  }
}
squareRoot(81);

function square(num) {
  let square = [num].map((num) => num * num)[0];
  console.log(square);
}
square(10);
let number = 5;
let square1 = [number].map((num) => num * num)[0];
console.log("Square:", square1); // Output: Square: 25

// find the odd and even

let arr = [12, 34, 32, 52, 12, 24, 0];
let oddEven = arr.reduce((acc, ele) => {
  if (ele % 2 == 0) {
    return { ...acc, even: "even" in acc ? acc["even"] + 1 : 1 };
  } else {
    return { ...acc, odd: "odd" in acc ? acc["odd"] + 1 : 1 };
  }
}, {});
console.log(oddEven);


// let arrTwo = []
