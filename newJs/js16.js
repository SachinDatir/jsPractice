// check for rime number
const primeCheck=(num)=>{
    let count = 0
    for(let i =2;i<num;i++){
        if(num%i==0){
            count =1
            break
        }
    }
    if(count==0){
        console.log(`${num} is prime number`)
    }
    else if(count ==1){
        console.log(`${num} is not a prime number`)
    }
}
primeCheck(4)
primeCheck(11)
primeCheck(19)

// Fibonacci series

const fibonnaci=(num)=>{
let a  = 0,b=1
for(let i = 3;i<=num;i++){
    let c = a+b
    console.log(c)
    a = b
    b = c

}
}
fibonnaci(8)