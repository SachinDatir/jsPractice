// return odd and even

const oddEven = (num) => {
  let even = num.filter((el) => el % 2 == 0);
  let odd = num.filter((el) => el % 2 != 0);

  return {
    even: {
      count: even.length,
      numbers: even,
    },
    odd: {
      count: odd.length,
      numbers: odd,
    },
  };
};
let numbers = oddEven([2, 4, 5, 7, 8, 4, 3, 2]);
console.log(numbers);

//find the maximum element

const maxElement = (el) => {
  let a = el[0];
  for (let i = 1; i < el.length; i++) {
    a = a > el[i] ? a : el[i];
  }
  console.log(a);
};
maxElement([3, 4, 6, 67, 35, 93, 5, 7, 65, 35, 546]);

let str = "5656#$8768%^^%&^&AAvfsgfueAAAFDFHGYFYuugjg897865jgudu";
let res = "";
for (let i = 0; i < str.length; i++) {
  if (Number(str[i])) {
    res += str[i];
  }
}
console.log(res);

let array = [12, 24, 36, 48, 60];
let f = array.reduce((acc, el) => {
  return acc + el;
});
console.log(f);

async function sumPromise(prom1, prom2) {
  const [val1, val2] = await Promise.all([prom1, prom2]);
  return val1 + val2;
}

let promise1 = Promise.resolve(10);
let promise2 = Promise.reject("Error");

// sumPromise(promise1, promise2)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function createPromise(val, shouldReject = false) {
//   return new Promise((resolve, reject) => {
//     if (shouldReject) {
//       reject(val);
//     } else {
//       resolve(val);
//     }
//   });
// }

// async function addition(prom1,prom2){
//   const [val1, val2] = await Promise.all([prom1, prom2]);
//   if (typeof val1 !== "number" || typeof val2 !== "number") {
//     throw new error('both promises must be numbers');
//   }
//   return val1 + val2;

// }

// createPromise(5,4).then((res)=>{
//   console.log(res)
// }).catch((error)=>{
//   console.log(error)
// })

function createPromise(value, shouldReject = false) {
  return new Promise((resolve, reject) => {
      if (shouldReject) {
          reject(value);
      } else {
          resolve(value);
      }
  });
}

async function sumPromises(promise1, promise2) {
  const [value1, value2] = await Promise.all([promise1, promise2]);
  if (typeof value1 !== "number" || typeof value2 !== "number") {
    throw new Error("Both promises must resolve to numbers");
  }
  return value1 + value2;
}

// Dynamic example
const dynamicValue1 = 5;
const dynamicValue2 = "Error!";
const shouldReject1 = false; // First promise resolves
const shouldReject2 = true;  // Second promise rejects

const prom1 = createPromise(dynamicValue1, shouldReject1);
const prom2 = createPromise(dynamicValue2, shouldReject2);

sumPromises(prom1, prom2)
  .then((sum) => console.log("Sum:", sum))
  .catch((error) => console.error("Error:", error));
