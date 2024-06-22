//  find the highest occurance string

let str =
  "today is saturday and today we should go to explore the mumbai and mumbai is the biggest city of india, mumbai";
const highestOccurance = (str) => {
  let arr = str.split(" ");
  let res = {};
  for (i of arr) {
    if (res[i]) {
      res[i]++;
    } else {
      res[i] = 1;
    }
  }
  //   console.log(res);

  let highCount = 0;
  let highestOccuranceStr = "";
  for (const word in res) {
    if (res[word] > highCount) {
      highCount = res[word];
      highestOccuranceStr = word;
    }
  }
  console.log(highestOccuranceStr);
};

highestOccurance(str);

// ascnding or descending order from the kth positio

const sortBy = (arr) => {
  let k = 4;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let s = arr[i];
        arr[i] = arr[j];
        arr[j] = s;
      }
    }
  }
  console.log(arr);
};
sortBy([32, 12, 56, 78]);

// string palindrome

const strPalindrome = (str) => {
  let res = str.length;
  let k = 0;
  for (let i = 0; i < res / 2; i++) {
    if (str[i] != str[res - i - 1]) {
      k = 1;
    }
  }

  if (k == 0) {
    console.log(`${str}` + " " + "is palindrome");
  } else if (k == 1) {
    console.log(`${str}` + " " + "is not palindrome");
  }
};
strPalindrome("civic");

// return the similar and single element from the array

const sortBySingleAndDouble = (arr1, arr2) => {
  let similar = [];
  let single = [];
  for(let i =0;i<arr1.length;i++){
    let found = false
    for(let j = 0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
            similar.push(arr1[i])
            found = true
            break
        }
    }
    if(!found){
        single.push(arr1[i])
    }
  }

  for(let j = 0;j<arr2.length;j++){
    if(!arr1.includes(arr2[j])){
        single.push(arr2[j])
    }
  }
  console.log(similar,single)

};

sortBySingleAndDouble([323,4,3,232,6,3,7],[7,2,4])

const fibonnaci =(num)=>{
    let a =0,b=1
    if(num>0){
        console.log(a)
        console.log(b)
    }
    for(let i =3;i<=num;i++){
        let c = a+b
        console.log(c)
        a = b
        b = c
    }
}

fibonnaci(7)

var lengthOfLastWord = function(s) {
    let split = s.split(' ')
    let r = split[split.length-1]
    console.log(r)
    console.log(r.length)
};

lengthOfLastWord('sachin vitthal datir')