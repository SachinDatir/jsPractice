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
  }
  else if(Array.isArray(arr)){
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

const changeTheSubstring=(str)=>{
  let rr = str.split(' ')
  let last = rr[rr.length-1]
  console.log(last)
}

changeTheSubstring('today is friday')