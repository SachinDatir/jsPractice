const changeInputAtIndex = (input, index, newWord) => {
  let arr = Array.isArray(input) ? input : input.trim().split(" ");
  // console.log(arr)
  if (index >= 0 && index < arr.length) {
    arr[index] = newWord;
  } else {
    console.log("index is out of range");
  }
  const result = Array.isArray(input) ? arr : arr.join(" ");
  //  console.log(result)
  return result;
};

let days = ["sachin", "pankaj", "sanket", "rahul"];
console.log(changeInputAtIndex(days, 0, "skd"));
let str = "today is a beautiful day";
let updatedStr = changeInputAtIndex(str, 2, "wonderful");
console.log(typeof updatedStr);
console.log(changeInputAtIndex(str, 3, "nice"));

let array1 = [8, 3, 0, 4, 2, 6];
let array2 = [7, 6, 3, 8, 5, 1, 4, 0, 9];
let similar = [];
let unmatched = [];
for (let i = 0; i < array1.length; i++) {
  let found = false;
  for (let j = 0; j < array2.length; j++) {
    if (array1[i] == array2[j]) {
      similar.push(array1[i]);
      found = true;
      break;
    }
  }
  if (!found) {
    unmatched.push(array1[i]);
  }
}
for (let j = 0; j < array2.length; j++) {
  if (!array1.includes(array2[j])) {
    unmatched.push(array2[j]);
  }
}
console.log(similar, unmatched);

const sortBySingleAndDouble = (arr1, arr2) => {
  let similar = [];
  let single = [];
  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        similar.push(arr1[i]);
        found = true;
        break;
      }
    }
    if (!found) {
      single.push(arr1[i]);
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (!arr1.includes(arr2[j])) {
      single.push(arr2[j]);
    }
  }
  console.log(similar, single);
};

//   sortBySingleAndDouble([323,4,3,232,6,3,7],[7,2,4])

// updated way to do this

const sortTheElement = (arr1, arr2) => {
  let similar = arr1.filter((el) => arr2.includes(el));
  let unmatched = [
    ...arr1.filter((el) => !arr2.includes(el)),
    ...arr2.filter((el) => !arr1.includes(el)),
  ];
  console.log(similar);
  console.log(unmatched);
};
sortTheElement([1, 2, 3, 4], [4, 1, 10, 32]);

let str1 = "today is friday";
let res = str1.split(" ");
let result = res[res.length - 1];
let reversed = "";
for (let i = 0; i < result.length; i++) {
  reversed = result[i] + reversed;
}
console.log(reversed);
console.log(res[0]);
let cc = res[0] + " " + res[1] + " " + reversed;
console.log(cc);

const reverseSpecificWord = (str, index) => {
  let words = str.split(" ");
  if (index < 0 || index >= words.length){
    throw new Error("invalid index");
    
  }
    words[index] = [...words[index]].reverse().join("");
    console.log(...words[1])
  return words.join(" ");
  
};
console.log(reverseSpecificWord("my name is skd", 1));

