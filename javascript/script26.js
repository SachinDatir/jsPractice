// rev the array

function revArray(arr) {
  let aa = arr.length;
  for (let i = 0, j = aa - 1; i <= j; i++, j--) {
    let a = arr[i];
    arr[i] = arr[j];
    arr[j] = a;
  }
  console.log(arr);
}

revArray(["sachin", "datir"]);

function sortByNum(num) {
  let res = num.toString().split("");
  console.log(res);
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res.length; j++) {
      if (res[i] > res[j]) {
        let ss = res[i];
        res[i] = res[j];
        res[j] = ss;
      }
    }
  }
  console.log(parseFloat(res.join("")));
}

sortByNum(1234);

let rr = ["sachin", "datir"];
console.log([...rr]);

const reverseSpecificWord = (str, index) => {
  let words = str.split(" ");
  if (index < 0 || index >= words.length) {
    throw Error("invalid index");
  }
  words[index] = [...words[index]].reverse().join("");
  return words.join(" ");
};

console.log(reverseSpecificWord("My name is sachin", 2));

const groupBy = (arr, fn) => {
  const res = {};
  for (const item of arr) {
    const key = fn(item);
    console.log(key);
    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(item);
  }
  return res;
};

let users = ["eight", "nine", "four", "seven", "fiftyFive"];
console.log(groupBy(users, (item) => item.length));

// lexical scope

var a = 10;

const scope = () => {
  let r = 20;
  console.log(a + r);
};

scope()