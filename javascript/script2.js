let nums = [2, 7, 11, 15, 3, 6];
let target = 9;
let res = [];
for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      res.push([nums[i], nums[j], i, j]);
    }
  }
}
console.log(res);

let str = "i like to code and test";
let b = str.split(" ");
let g = b[b.length - 1];
console.log(g.length);

// nums.map((index,ele)=>{
// if(ele[i])
// })

// s =  “i like to code and test”
// s = "I love programming"
// let a = s.split('')
// let b
// for(let i = 0;i<a.length;i++){
//  let r = a[i].slice(0,5)
//  b.push(r)
// }

// console.log(b.length)

const sachin = () => {
  let a = 1;
  let b = 2;
  return new Promise((resolve, reject) => {
    let c = a + b;
    if (c === 3) {
      resolve("Sum is equal to 3");
    } else {
      reject("Sum is not equal to 3");
    }
  });
};

// sachin()
//     .then(message => {
//         console.log(message);
//     })
//     .catch(error => {
//         console.error(error);
//     });

// square root
let num = 49;
for (let i = 1; i * 2 < num; i++) {
  if (i * 2 == num) {
    console.log(i);
  }
}

let j = 9;
let f = 0;
for (let i = 0; i < j; i++) {
  f += j;
}
console.log(f);

// swap the number
let y = 60;
let z = 30;
[z, y] = [y, z];
console.log(z);

// remove all the  the undefined value from the obj
let obj = [
  {
    sachin: undefined,
    pankaj: "mumbai",
    rahul: "Sngamner",
    sanket: "pune",
    pranamya: "kopar",
  },
  {
    pune: "MH",
    Hyd: undefined,
    bangluru: "KN",
    chennai: "TN",
  },
];
obj.forEach((element) => {
  for (let keys in element) {
    if (element[keys] === undefined) {
      delete element[keys];
    }
  }
});
console.log(obj);

// find the element which sum is equal to the target ele
let arr = [3, 5, 8, 12];
let trgt = 4;
let result = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] - arr[j] == trgt) {
      result.push([i, j]);
    }
  }
}
console.log(result);
let a = arr.length;
for (let i = 0, j = a - 1; i <= j; i++, j--) {
  let r = arr[i];
  arr[i] = arr[j];
  arr[j] = r;
}

console.log(arr);

let name = "Sachin Datir";
let ss = name.split(" ");
let sigName = "";
for (let i = 0; i < ss.length; i++) {
  sigName += ss[i].split("")[0] + ".";
}
console.log(sigName + ss[ss.length - 1]);

let arr1 = [8, 6, 3, 0, 1, 7, 5, 1, 5];
// console.log(arr1.sort())
let res1 = {};

for (i of arr1) {
  if (res1[i]) {
    res1[i]++;
  } else {
    res1[i] = 1;
  }
}
console.log(res1);
