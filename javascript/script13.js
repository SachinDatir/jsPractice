let vegetables = ["Carrot", "Potato", "Tomato", "Pepper"];
let a = vegetables.slice(0, 2);
console.log(a);
console.log(vegetables);
// The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//  This method modifies the original array.

let num = [12, 9, 78, 56];
let b = num.splice(2, 3);
console.log(b);
console.log(num);

console.log("21" + "21" - ("1" + "2"));

// palindrome

const checkNumPalindrome = (num) => {
  let original = num;
  let reversed = 0;

  while (num != 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }
  return original === reversed;
};
let c = 12321;
if (checkNumPalindrome(c)) {
  console.log("Num is palindrome");
} else {
  console.log("num is not palindrome");
}

// check string palindrome

const checkStrPalndrome = (str) => {
  let aa = str.length;
  let k = 0;
  for (let i = 0; i < aa / 2; i++) {
    if (str[i] != str[aa - i - 1]) {
      k = 1;
    }
  }
  if (k == 0) {
    console.log("str is palindrome");
  } else {
    console.log("str is not palindrome");
  }
};
checkStrPalndrome("sachin");
checkStrPalndrome("civic");

const squareRoot = (num) => {
  for (let i = 1; i ** 2 <= num; i++) {
    if (i ** 2 == num) {
      console.log(i);
    }
  }
};
squareRoot(81);

const cubeRoot = (num) => {
  for (let i = 0; i ** 3 <= num; i++) {
    if (i ** 3 == num) {
      console.log(i);
    }
  }
};
cubeRoot(343);

const square = (num) => {
  let square = [num].map((num) => num * num)[0];
  console.log(square);
};

square(8);

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
oddEven([12, 5, 7, 89, 5]);

const fibonnaci = (num) => {
  let a = 0,
    b = 1;
  if (num > 0) {
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
fibonnaci(5);

// find the length of any word
const findTheLenghtOgWord = (word) => {
  let split = word.split(" ");
  let res = split[split.length - 2];
  console.log(res);
};
findTheLenghtOgWord("Sachin Vitthal Datir");
// Pyramid

const pyramid = (num) => {
  for (let i = num; i >= 0; i--) {
    let s = "";
    for (let j = 0; j <= num; j++) {
      if (j >= i) {
        s += "* ";
      } else {
        s += " ";
      }
    }
    console.log(s);
  }
};
pyramid(8);

//Take one no and return the no of digit from that no
const returnTheNoOfDigit = (num) => {
  let result = []
newN = num.toString().length

// for (let i = 0; i < newN.length; i++) {
//     result.push(newN.charAt(i))
// }
console.log(newN)


};
returnTheNoOfDigit(7896)
