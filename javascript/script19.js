const returnMaxAndSecondMax = (arr) => {
  let max = -Infinity;
  let secondMax = -Infinity;
  for (let el of arr) {
    if (el > max) {
      secondMax = max;
      max = el;
    } else if (el > secondMax && el != max) {
      secondMax = el;
    }
  }
  console.log(max, secondMax);
};
returnMaxAndSecondMax([12, 456, 4, 56, 474, 657, 657, 5]);

const returnMaxGap = (arr) => {
  if (arr.length < 2) {
    return 0;
  }
  arr.sort((a, b) => a - b);
  let maxDiff = 0;
  for (let i = 1; i < arr.length; i++) {
    let diff = arr[i] - arr[i - 1];
    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }
  console.log(maxDiff);
};
returnMaxGap([12, 45, 67, 90]);

const returnTheHighestOcc = (arr) => {
  let res = {};
  for (const el of arr) {
    if (res[el]) {
      res[el]++;
    } else {
      res[el] = 1;
    }
  }
  // console.log(res);
  let highestOcc = "";
  let count = 0;
  for (const word in res) {
    if (res[word] > count) {
      count = res[word];
      highestOcc = word;
    }
  }
  console.log(highestOcc, count);
};
console.log(returnTheHighestOcc([12, 45, 67, 54, 12]));

const vowels = (arr) => {
  const vowel = "aeiouAEIOU";
  let count = 0;
  res = "";
  for (const char of arr) {
    if (vowel.includes(char)) {
      count++;
      res += char;
    }
  }
  console.log(res, count);
};
vowels("My name is SAchin");

const checkStrPalindrome = (str) => {
  let aa = str.length;
  let k = 0;
  for (let i = 0; i < aa / 2; i++) {
    if (str[i] != str[aa - i - 1]) {
      k = 1;
    }
  }
  if (k == 0) {
    console.log("str is palindrome");
  } else if (k == 1) {
    console.log("str is not palindrome");
  }
};

checkStrPalindrome("Sachin");
checkStrPalindrome("civic");

const checkNumPalindrome = (num) => {
  let originalNum = num;
  let reversed = 0
  while(num!=0){
    let digit = num%10
    reversed = reversed*10+digit
    num = Math.floor(num/10)

  }
 return originalNum===reversed
};
console.log(checkNumPalindrome(23))
console.log(checkNumPalindrome(12121))


function convertToTitle(columnNumber) {
  let title = '';
  // String.fromCharCode is a JavaScript method used to create a string 
  // from one or more Unicode character codes. The character codes are specified as 
  // integer values that represent the Unicode code points of the characters.
  while (columnNumber > 0) {
      // Adjust for 1-based indexing
      columnNumber--; 
      // Get the current character (0-indexed)
      let remainder = columnNumber % 26;
      // Convert to ASCII letter (A = 65, B = 66, ..., Z = 90)
      let char = String.fromCharCode(remainder + 65);
      title = char + title;
      columnNumber = Math.floor(columnNumber / 26);
  }
  
  return title;
}

// Example usage:
console.log(convertToTitle(1));   
console.log(convertToTitle(2));   
console.log(convertToTitle(26));  
console.log(convertToTitle(28));  
console.log(convertToTitle(701)); 


