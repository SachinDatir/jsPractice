// find the even and odd number from array using reduce 
// let arr = [11,17,19,29,12]
// let a1 = arr.reduce((acc,curr)=>{
//     return curr%2==0
//         ?{...acc,'even':('even' in acc?acc['even']+1:1)}
    
//          :{...acc,'odd':('odd' in acc?acc['odd']+1:1)}
    
// },{})
// console.log(a1)

let arr = [12,11,33,55,88,93]
let h1 = arr.reduce((acc,curr)=>{
    return curr%2==0 ?{...acc,'even':('even' in acc?acc['even']+1:1)}
    :{...acc,'odd':('odd' in acc?acc['odd']+1:1)}
},{})
console.log(h1)

let str = [1,2,9,8,7,6,5,0,4,6,7]
// let r = str.split('')
let r = str.reduce((acc,curr)=>{
    return curr%2==0?{...acc,'even':('even' in acc?acc['even']+1:1)}:{...acc,"odd":('odd' in acc?acc['odd']+1:1)}
},{})
console.log(r)

let array = [1,4,6,9,999,111]
// console.log(Number(string.split('')))
let f = array.reduce((acc,curr)=>{
    return curr%2==0?{...acc,'even':('even' in acc?acc['even']+1:1)}:{...acc,'odd':('odd' in acc?acc['odd']+1:1)}
},{})
console.log(f)

// factorial of a number (multiplication of a natural number which less than specific number)
const Facto = (num)=>{
let count = 1
for(let i =num;i>=1;i--){
    count = count *i
}
console.log(count)
}
Facto(4)

// count the repeated word
let word = "I am learning javascript with cypress javascript ,typescript,javascript with appium"
let g = word.split(' ')
// console.log(g)
let c  = 0
for(let i = 0;i<g.length;i++){
    if(g[i].includes('javascript')){
        c++
    }
}
console.log(c)

// /  Extract all num from string and display only unique num
let cc = 'sachia49234587sbfkbsdhmnv09989'
let rr = cc.split('').filter((el)=>{
    return Number(el)
})
.map((el)=>{
    return Number(el)
})
let gg = new Set(rr)
console.log(gg)
// console.log(rr)

// Sorting out 
let names = ['sachin',"pankaj",'sanket','rahul','pranamya',"Anderson","Bprank"]
console.log(names.sort())
for(let i =0;i<names.length;i++){
    for(let j =0;j<names.length;j++){
        if(names[i]<names[j]){
            let g = names[i]
            names[i] = names[j]
            names[j] = g
        }
    }
}
console.log(names)