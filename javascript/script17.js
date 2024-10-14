// find the odd even

var reduce = function (accum, curr) {
  return accum + curr * curr;
};

reduce(12, 12);

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("sachin"));
console.log(isPalindrome("civic"));

const prime = (num) => {
  let count = 0;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      count = 1;
    }
  }
  if (count == 0) {
    console.log(`${num} is prime`);
  } else if (count == 1) {
    console.log(`${num} is not prime`);
  }
};
prime(7);
prime(8);

//   return square of thr number

const getSquare = (num) => {
  let res = num.map((el) => el * el)[0];
  return res;
};

console.log(getSquare([12]));

for (let i = 5; i >= 0; i--) {
  let s = "";
  for (let j = 0; j <= 5; j++) {
    if (i >= j) {
      s += " ";
    } else if (i <= j) {
      s += "* ";
    }
  }
  console.log(s);
}
console.log("^^^^^^^^^^^^^^^^^^");

for (let i = 5; i >= 0; i--) {
  let s = "";
  for (let j = 5; j >= 0; j--) {
    if (j >= i) {
      s += " ";
    } else if (i >= j) {
      s += "* ";
    }
  }
  console.log(s);
}

const oddEven = (num) => {
  let res = num.reduce((acc, el) => {
    if (el % 2 == 0) {
      return { ...acc, even: "even" in acc ? acc["even"] + 1 : 1 };
    } else {
      return { ...acc, odd: "odd" in acc ? acc["odd"] + 1 : 1 };
    }
  }, {});
  console.log(res);
};
oddEven([12, 45, 67, 89]);

const fibonacci = (num) => {
  let a = 0,
    b = 1;
  if (num > a) {
    console.log(a);
    console.log(b);
  }
  for (let i = 3; i <= num; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
};
fibonacci(5)


const sortMaxAndSecondMax=(arr)=>{
  let max = -Infinity
  let secondMax = -Infinity
  for(el of arr){
    if(el>max){
      secondMax =max
      max = el
    }else if(el>secondMax && el!==max){
      secondMax = el
    }
  }
  console.log(max,secondMax)
}

sortMaxAndSecondMax([11,4,66,32,67])


// promise

const checkPromise =(num,num1,res)=>{
let a= num
let b = num1
return new Promise((resolve, reject) => {
  if(a+b==res){
    resolve('sum is similar')
  }else{
    reject('sum is not similar')
  }
})
}

checkPromise(2,1,1).then((res)=>{
  console.log(res)
}).catch((res)=>{
  console.log(res)
})


