// return the count off element

const countOfElement = (arr) => {
  let res = {};

  if (typeof arr === "string") {
    let words = arr.split(" ");
    for (const word of words) {
      if (typeof word === "string" && word.trim() !== "") {
        let trimmedWord = word.trim();
        if (res[trimmedWord]) {
          res[trimmedWord]++;
        } else {
          res[trimmedWord] = 1;
        }
      }
    }
  } else if (Array.isArray(arr)) {
    for (const el of arr) {
      if (res[el]) {
        res[el]++;
      } else {
        res[el] = 1;
      }
    }
  }
  console.log(res);
};

countOfElement([12, 32, 12, 34]);
countOfElement("today is sunday sunday is holiday");
// let str ='today is sunday sunday is holiday'
// console.log(str.split(' '))

const changeTheSubstring = (str) => {
  let rr = str.split(" ");
  let last = rr[rr.length - 1];
  console.log(last);
};

changeTheSubstring("today is friday");

const checkPalindrome = (num) => {
  let original = num;
  let reversed = 0;
  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  return original === reversed;
};

checkPalindrome(101);
let numberToCheck = 101;

if (checkPalindrome(numberToCheck)) {
  console.log(`${numberToCheck} is palindrome`);
} else {
  console.log(`${numberToCheck} is not palindrome`);
}

const returnMaxAndSecondMax = (num) => {
  let max = -Infinity;
  let secondMaxNum = -Infinity;
  let foundSecondMax = false;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > max) {
      secondMaxNum = max;
      max = num[i];
    } else if (num[i] > secondMaxNum && num[i] != max) {
      secondMaxNum = num[i];
    }
  }
  console.log(max,secondMaxNum)
};
returnMaxAndSecondMax([12, 43, 12, 56, 66]);


const returnTheHighestOccuranceStr = (arr) =>{
  let res = {}
  for(const el of arr){
    if(res[el]){
      res[el]++
    }else{
      res[el]=1
    }
  }
  let count= 0
  let highestOcc = ''
  for(const word in res){
    if(res[word]>count){
      count = res[word]
      highestOcc = word

    }
  }
  console.log(highestOcc,count)

}
returnTheHighestOccuranceStr(["sachin","prashant","sanket","pankaj","sachin"])
returnTheHighestOccuranceStr([12,34,56,78,23,21,12,13,13,21,23,13])

