const cubeRoot = (num) => {
  for (let i = 0; i ** 3 <= num; i++) {
    if (i ** 3 == num) {
      console.log(i);
    }
  }
};

cubeRoot(81);

const squareRoot = (num) => {
  for (let i = 0; i ** 2 <= num; i++) {
    if (i ** 2 == num) {
      console.log(i);
    }
  }
};

squareRoot(81);

const square = (num) => {
  let sqr = [num].map((num) => num * num)[0];
  console.log(sqr);
};
square(4);

// return count of element from the array
let arr = ["sachin", "pankaj", "rahul", "skd", "sanket", "pranamya", "sachin"];
let res = {};
for (i of arr) {
  if (res[i]) {
    res[i]++;
  } else {
    res[i] = 1;
  }
}
console.log(res);

const countOfElement = (arr) => {
  let res = {};
  for (i of arr) {
    if (res[i]) {
      res[i]++;
    } else {
      res[i] = 1;
    }
  }
  return res;
};

let num = countOfElement([23, 56, 89, 43, 12, 43]);
let num2 = countOfElement(["sskd", "dd", "hh", "hh", "sskd"]);
console.log(num, num2);

console.log("10" + "1");

const oddEven = (arr) => {
  let r = arr.reduce((acc, el) => {
    if (el % 2 == 0) {
      return { ...acc, even: "even" in acc ? acc["even"] + 1 : 1 };
    } else {
      return { ...acc, odd: "odd" in acc ? acc["odd"] + 1 : 1 };
    }
  }, {});
  console.log(r);
};
oddEven([7, 5, 4, 2, 1]);

const findOddEven = (arr) => {
  let r = arr.reduce((acc, el) => {
    if (el % 2 == 0) {
      return { ...acc, even: "even" in acc ? acc["even"] + 1 : 1 };
    } else {
      return { ...acc, odd: "odd" in acc ? acc["odd"] + 1 : 1 };
    }
  }, {});
  console.log(r);
};

findOddEven([3, 4, 9, 8, 5, 1, 2]);

// find the count of each number from the arr

const findTheCountOfEle = (arr) => {
  let res = {};
  for (i of arr) {
    if (res[i]) {
      res[i]++;
    } else {
      res[i] = 1;
    }
  }
  return res;
};

let g = findTheCountOfEle([12, 45, 67, 3, 12]);
console.log(g);


// find the two number which sum is equal to targeted element
const sumOfelement = (arr, target) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        res.push(arr[i],arr[j])
      }
    }
  }
  console.log(res)
};

sumOfelement([3,4,7,8,6,5,2],7)

// find the highest occurance string from the str
let str = 'Mumbaumbai'
let e = str.split('')
let f = e.filter((el,i)=>{
return e.indexOf(el)==i
})
console.log(f)
console.log(new Set(e))

function highest (string){
    const words = string.split(" ");
    let result ={}
    for(i of words){
        if(result[i]){
            result[i]++
        }
        else{
            result[i]=1
        }
    }
    console.log(result)
    
    let maxCount = 0;
    let mostCommonWord = "";
    
    for (const word in result) {
      if (result[word] > maxCount) {
        maxCount = result[word];
        mostCommonWord = word;
      }
    }
    
    return mostCommonWord;
}



// Example usage:
// const str = "the quick brown fox jumps over the lazy dog the";
let string = 'Mumbai city is the financial capital of india and also capital of maharashtra mi mi mi'

console.log(highest(string));


