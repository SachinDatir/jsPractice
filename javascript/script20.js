const largestNumber = (num) => {
  return num.reduce((acc, el) => {
    if (el > acc) {
      return el;
    } else {
      return acc;
    }
  }, 0);
};
console.log(largestNumber([34, 5, 75, 77, 446, 54, 56]));

const smallestNumber = (num) => {
  let rr = num.split(" ");
  return rr.reduce((acc, el) => {
    if (acc.length < el.length) {
      return acc;
    } else {
      return el;
    }
  }, 0);
};
console.log(smallestNumber("jh,ju ooihoh oiuhiuguf uygufu7f8if iug"));

// return only numbers

let str = "fhskgheiu70fe9hey76try36v3tovhkjgwty8ty345vbt87t38";
let res = str
  .split("")
  .filter((el) => {
    return Number(el);
  })
  .map((el) => {
    return Number(el);
  });
console.log(res.join());

const pyramid = (num) => {
  for (let i = num; i >= 0; i--) {
    let s = "";
    for (let j = 0; j <= num; j++) {
      if (i >= j) {
        s += " *";
      } else if(i<=j){
        s += " ";
      }
    }
    console.log(s);
  }
};
pyramid(8);


//sort Array

const sortBy  =(arr)=>{
for(let i =0;i<arr.length;i++){
  for(let j =0;j<arr.length;j++){
    if(arr[i]>arr[j]){
      let a = arr[i]
      arr[i] = arr[j]
      arr[j] =a
    }
  }
}
console.log(arr)
}
sortBy([23,45,32,12])