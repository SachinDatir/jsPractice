// find the largest element

const findLargestElement = (arr) => {
  let largestEl = arr[0];
  for (let i = 0; i < arr.length; i++) {
    largestEl = arr[i] > largestEl ? arr[i] : largestEl;
  }
  return largestEl;
};
let arr = [1, 4, 8, 9, 3, 2, 5, 98, 0, 7, 6];
console.log(findLargestElement(arr));

// find the smallest element
const findSmallestEl = (arr) => {
  let smallestEl = arr[0];
  for (let el in arr) {
    smallestEl = arr[el] < smallestEl ? arr[el] : smallestEl;
  }
  console.log(smallestEl)
};
findSmallestEl([0,-0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]);

const findEvenOdd=(arr)=>{
    let even = arr.filter((n)=>n%2==0)
    let odd  =arr.filter((n)=>n%2!=0)
    let res={
        even:{
            count:even.length,
            numbers:even
        },
        odd:{
            count:odd.length,
            numbers:odd
        }
    }
    console.log(res)
}
findEvenOdd([1,2,3,4,5,6,7,8,9,10,11])

//  reverse tje array
const reverseArray=(arr)=>{
    let newArr =[]
    for(let i = arr.length-1;i>=0;i--){
        newArr.push(arr[i])
    }
    console.log(newArr)
}
reverseArray([90.8,86]) 

const array = ["pankaj","sanket","sachin","rahul","nitin"]
let a  = array.length 
for(let i =0,j=a-1;i<=j;i++,j--){
  let n = array[i]
  array[i] =array[j]
  array[j] =n
  
}
console.log(array)

