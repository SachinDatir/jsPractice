// uppecase the first char

const toUppercase = (str) => {
  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
};
console.log(toUppercase("sachin datir"));


const toSum =(n)=>{
  let r = n.toString()
  let digit = r.split('')
  let sum = digit.reduce((acc,el)=>acc+parseInt(el),0)
  console.log(sum)
}
toSum(92)

const toSum2 = (n)=>{
  let sum = 0
  while(n>0){
    sum+=n%10
    n = Math.floor(n/10)
  }
  console.log(sum)
}
toSum2(567)

const arr1 = [1, 3, 2, 4, 8,9];
const arr2 = [2, 9,4, 1, 8, 3];

// Combine both arrays and sort them
const combinedArr = [...arr1, ...arr2].sort((a, b) => a - b);

console.log(combinedArr);  // Output: [1, 1, 2, 2, 3, 3, 4, 4]


// sort the arr
const arrOne=[1,2,5,6,7]
const arrTwo=[3,4,7,9,1,5]

const combine = [...arrOne,...arrTwo].sort((a,b)=>a-b)
console.log(combine)

let num = 12345
let reversed = 0
while(num>0){
  let dig = num%10
  reversed = reversed*10+dig
  num = Math.floor(num/10)
  // console.log(reversed)/
}
console.log(reversed)