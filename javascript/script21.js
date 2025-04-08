const oddEven = (...num) => {
  let res = num.reduce((acc, el) => {
    if (el % 2 === 0) {
      return { ...acc, even: "even" in acc ? acc.even + 1 : 1 };
    } else {
      return { ...acc, odd: "odd" in acc ? acc.odd + 1 : 1 };
    }
  }, {});
  console.log(res);
};

let arr = [2, 4, 6, 8, 1, 3, 5, 7];
oddEven(...arr);

const evenOdd = (arr) => {
  let evenNum = arr.filter((el) => el % 2 == 0);
  let odd = arr.filter((el) => el % 2 !== 0);
  return {
    even: {
      count: evenNum.length,
      numbers: evenNum,
    },
    odd: { count: odd.length, numbers: odd },
  };
};
console.log(evenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 11]));

const maxElement = (el) => {
  let a = el[0];

  for (let i = 0; i < el.length; i++) {
    a = a < el[i] ? a : el[i];
  }
  console.log(a);
};
maxElement([2, 4, 7, 6, 4, 3, -1]);

const maxEl = (el) => {
  let a = el[0];

  for (let i = 1; i < el.length; i++) {
    a = a < el[i] ? a : el[i];
  }
  console.log(a);
};
maxEl([-2, -4, -6, -4, -3, -11]);

// return prime number

const primeNumber = (n) => {
  let k = 0;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      k = 1;
    }
  }
  if (k == 0) {
    console.log(`given number is prime`);
  } else if (k == 1) {
    console.log("given number is not a prime number");
  }
};
primeNumber(8);

const sortVowels = (str) => {
  let vowels = "aeiou";
  let count = 0;
  let res = "";
  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
      res += char;
    }
  }
  console.log(count, res);
};
sortVowels("My name is sachin belongs to Mh");
