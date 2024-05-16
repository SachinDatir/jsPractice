const matrix = (num) => {
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
// matrix(5);
// opposite pyramid

const oppPyramid = (num) => {
  for (let i = num; i >= 0; i--) {
    let s = "";
    for (let j = 0; j <= num; j++) {
      if (i >= j) {
        s += " ";
      } else if(i>=j){
        s += "* ";
      }
    }
    console.log(s);
  }
};

oppPyramid(6)

// Find the even and odd from the array

function oddEven(arr){
let result = arr.reduce((acc,el)=>{
  if(el%2==0){
   return {...acc,"even":('even' in acc?acc['even']+1:1)}
  }
  else{
    return {...acc,'odd':('odd' in acc?acc['odd']+1:1)}
  }
},{})
console.log(result)

}
console.log(oddEven([90,345,567,45,2,3,456]))


// return siliar and unique element from array

let arrOne = [3, 7, 9, 12, 33, 6];
let arrTwo = [3, 7, 9, 12, 33, 0, 8];
function findSimilarElement(arrOne, arrTwo) {
  let similar = [];
  let unique = [];
  for (let i = 0; i < arrOne.length; i++) {
  let found= false
    for (let j = 0; j < arrTwo.length; j++) {
      if (arrOne[i] === arrTwo[j]) {
        similar.push(arrOne[i]);
        found = true
        break
      }
    }
    if(!found){
      unique.push(arrOne[i])
    }
  }
  for (let j = 0; j < arrTwo.length; j++) {
    if (!arrOne.includes(arrTwo[j])) {
      unique.push(arrTwo[j]);
    }
  }
  console.log(similar)
  console.log(unique)
}
findSimilarElement(arrOne,arrTwo)


function bySet(arr1, arr2){
  let set2 = new Set(arr2)
  let findSimilar = arr1.filter((num)=>set2.has(num))
  // return findSimilar
  console.log(findSimilar)
}
bySet([9,1,4,6,7,3,0,1,5],[9,6,6,5,1,8,7,5,3,5])

// Capitalize first name of string
let str = 'today is wednesday'
let res = str.split(' ')
console.log(res)
let result = []
for(const el of res){
  result.push(el.replace(el[0],el[0].toUpperCase()))
}
console.log(result.join(' '))