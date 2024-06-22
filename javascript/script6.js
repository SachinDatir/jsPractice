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




let strOne = "Sachin datir"
let strTwo = "Sachin gaikwad"

// const similarStr=(strOne,strTwo)=>{
// let a = strOne.split(' ')
// let b = strTwo.split(' ')
// let similar = []
// let single = []
// for(let i =0;i<a.length;i++){
// let found = false
// for(let j =0;j<b.length;j++){
// if(a[i]==b[i]){
// similar.push(a[i])
// found = true
// break
// }
// }
// if(!found){
// single.push(a[i])
// }
// }
// for(let j =0;j<strTwo.length;j++){
// if(!strOne.includes(strTwo[i])
// similar.push(strTwo[i])
// }

// console.log(similar)
// console.log(single)
// }

// similarStr(strOne,strTwo)


// abc.com

// button .click()

// describe('Validate the new page',()=>{

// it('Click on button and validate the new page',()=>{
// cy.visit('https://abc.com')
// cy.get('#button').invoke('removeAttr','target')
// cy.get('#button').click()
// cy.url().should('contain','newPagePath')
// cy.
// })


// it('Click on button and validate the new page',()=>{
// cy.visit('https://abc.com')
// cy.get('#firstName').clear().type('something')
// cy.get('#lastName').should('be.visible')
// cy.get('#firstName').clear()
// cy.get('#lastName').should('not.exist')
// })
// })

// let a = "sachinsac"
// let b = a.split('')
// let res = {}
// for(const i of b){
// if(res[i]){
// res[i]++
// }else{
// res[i]=1
// }
// }
// console.log(res)

const returnSimilar=(strOne,strTwo)=>{
  let a = strOne.split(' ')
  let b = strTwo.split(' ')
  let set2 = new Set(b)
  let getSimilar = a.filter((num)=>set2.has(num))
  console.log(String(getSimilar))

}

returnSimilar(strOne,strTwo)

const arrSort=(arr)=>{
  for(let i = 0;i<arr.length;i++){
    for(let j = 0;j<arr.length;j++){
      if(arr[i]<arr[j]){
        let a = arr[i]
        arr[i] =arr[j]
        arr[j]=a
      }
    }
  }
  console.log(arr.join('-'))
}
arrSort([1, 0, 0, 1, 2, 0])



