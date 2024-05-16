let arr = [12,34,56,78,90] 
let a = arr.reduce((acc,curr)=>{ return curr%2==0 ? {...acc,'even':('even' in acc ? acc['even']+1:1)}: {...acc,'odd':('odd' in acc?acc['odd']+1:1)} },{})
//  console.log(a)


 let arr1 = [11,22,33,44,55,17,34,35,78,80]
 let b = arr1.reduce((acc,curr)=>{
    if(curr%2==0){
        return{...acc,'even':('even' in acc?acc['even']+1:1)}
    }
    else{return {...acc,'odd':('odd' in acc?acc['odd']+1:1)}}
 },{})
 console.log(b)

//  :{...acc,'odd':('odd' in acc?acc['odd']+1:1)}


let removeDup = function(s) {
    let r = s.split('')
    let f = r.filter((el,index)=>{
        return r.indexOf(el)===index 
    })
    console.log(f)
};
removeDup("abcabcbb")
// console.log(a1)
// let j1 = []
//     let a1 = "abcabcbb".split('')
//    j1.push(a1)
//    console.log(...j1)

// return length of lomgest substring from array or str



