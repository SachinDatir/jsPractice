let name = "Sachin Vitthal Datir"
let a   = name.split(' ')
let result = ''
console.log(a)
for(let i = 0;i<a.length-1;i++){
  result+= a[i].split('')[0]+'.'
}
console.log(result,a[a.length-1])
// console.log(result,a[2])

// longest string 
let names = ["sachin Datir",'rahul','sanket','pranamya pangare','pankaja munde']
let r = names.reduce((acc,el)=>{
    if(el.length>acc.length){
        return el
    }
    else{
        return acc
    }
})
console.log(r)

let fullName = "Sachin Vitthal Datir"
let aa = fullName.split(' ')
// console.log(aa)
let bb  = aa.reduce((acc,el)=>{
    if(el.length>acc.length) return el; else return acc
})
console.log(bb)

// return small 
let cc  = aa.reduce((acc,el)=>{
    if(el.length>acc.length) return acc; else return el
})
console.log(cc)

let signName = ''
for(let i =0;i<aa.length;i++){
    signName+=aa[i].split('')[0]+'.'
}
console.log(signName,aa[aa.length-1])

