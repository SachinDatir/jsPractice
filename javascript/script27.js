// reverse the word
//  "My name is sachin"
const revWord = (str, index) => {
  let words = str.split(" ");
  console.log(words);
  console.log(">>>>>>>>>>>>>>>>>>>>>>>");

  if (index < 0 || index > words.length) {
    throw Error("Invalid index");
  }
  words[index] = [...words[index]].reverse().join("");
  //   console.log(words)

  console.log(words.join(" "));
};
revWord("My name is sachin", 2);

let rr = ["My", "name"];
console.log(rr.join(""));

// sort the array

const sortBy = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (fn ? arr[i][fn] > arr[j][fn] : arr[i] > arr[j]) {
        let s = arr[i];
        arr[i] = arr[j];
        arr[j] = s;
      }
    }
  }
  console.log(arr);
};

// sortBy([12,5,6,2])
sortBy([{ x: 1 }, { x: 0 }, { x: -1 }], "x");
sortBy([4, 7, 9, 2]);

// sort by using sort
function findLargestElement(nestedArray) {
  let largest = nestedArray[0];
  for (let i = 0; i < nestedArray.length; i++) {
    largest = largest > nestedArray[i] ? largest : nestedArray[i];
  }
  return largest;
}

console.log("?????????????????????");
console.log(findLargestElement([-2, -4, -6, -4, -3, -11]));

console.log("?????????????????????");

const toTitleCase = (str) => {
  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
};
console.log(toTitleCase("sachin datir"));

const sortByKey = (arr, key) => {
  return arr.sort((a, b) => a[key] - b[key]);
};
const data = [
  { name: 'John', age: 28 },
  { name: 'Jane', age: 22 },
  { name: 'Alex', age: 25 }
];

// Sorting by 'age' (numeric key)
const sortedByAge = sortByKey(data, 'age');
console.log(sortedByAge);

