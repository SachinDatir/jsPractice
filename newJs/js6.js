let str = "Sachin datir"
const [firstName,lastName] = str.split(' ')
console.log(firstName)
const newName = ["Mr.",firstName,lastName.toUpperCase()].join(' ')
console.log(newName)


// Capitalize first letter of a string 

const capitalizeName = (name)=>{
    const names = name.split(' ')
    const nameUpper = []
    for(const el of names){
        nameUpper.push(el[0].toUpperCase()+el.slice(1))
    }
    console.log(nameUpper.join(' '))
}
capitalizeName("my name is sachin")


// Another way Capitalize first letter of a string 

const Capitalize=(names)=>{
    const name = names.split(' ')
    const nameUpper = []
  for(const el of name){
    nameUpper.push(el.replace(el[0],el[0].toUpperCase()))
  }
  console.log(nameUpper.join(' '))

}
Capitalize('today is sunday')


// Padding
console.log('Sachin'.padStart(25,"n").padEnd(30,"-"))

const maskCreditCard=(num)=>{
    let str = num +''
    console.log(str)
    let last = str.slice(-4)
    return last.padStart(str.length,"*")
}
console.log(maskCreditCard(123456654321))


const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

  for(const el of flights.split("+")){
    const [type,from,to,time] =el.split(';')
  const outPut = `${type.startsWith('_Delayed')?'⭕':' '}${type.replaceAll('_',' ')} ${from.slice(0,3).toUpperCase()}${to.slice(0,3).toUpperCase()}${time.replace(':','h')}`.padStart(36)
  console.log(outPut)
  }