let num = 581999
let s = ''
while (num > 0) {
    let r = num % 10
    s += r
    let x = Math.floor(num / 10)
    num = x
}
let a = Number(s)
console.log(a)

let str = "56568768%^^%&^&AAvfsgfueAAAFDFHGYFYuugjg897865jgudu"
let b  = str.split('').filter((el)=>{
return Number(el)
}).map((el)=>{
    return Number(el)
})
console.log(typeof(b.join()))
console.log(b.join())

let result = ''
for(let i = 0 ;i<str.length;i++){
    if(Number(str[i])){
      result+=str[i]
    }
}
console.log(result)
console.log(typeof(result))

// filter the capital and small letters
let small = ''
for(let i=0;i<str.length;i++){
    if(str[i]>='a'&&str[i]<="z"){
    small+=str[i]
    }
}
console.log(small)