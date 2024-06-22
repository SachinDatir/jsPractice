let str7 = "I love Maharashtrachi Hasya Jatra";
const capAndSmall = (str) => {
  let arr = str.split("");
  // console.log(arr)
  let small = [];
  let smallCount = 0;
  let cap = [];
  let capCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= "a" && arr[i] <= "z") {
      small.push(arr[i]);
      smallCount++;
    } else if (arr[i] >= "A" && arr[i] <= "Z") {
      cap.push(arr[i]);
      capCount++;
    }
  }
  console.log(small, smallCount, cap, capCount);
};

capAndSmall(str7);

const Pyramid = (num) => {
  for (let i = num; i >= 0; i--) {
    let s = "";
    for (let j = 0; j <= num; j++) {
      if (i >= j) {
        s += " ";
      } else if (i<=j) {
        s += "* ";
      }
    }
    console.log(s);
  }
};
Pyramid(8);


const oppPyramid = (num) => {
    for (let i = num; i >= 0; i--) {
      let s = "";
      for (let j = 0; j <= num; j++) {
        if (i >= j) {
          s += "* ";
        } else if(i<=j){
          s += " ";
        }
      }
      console.log(s);
    }
  };
  oppPyramid(8)

  console.log(1 + "1" - 1);


  const maxAndSecondMax =(arr)=>{
    let max = -Infinity
    let secondMax = -Infinity
    for(const el of arr){
        if(el>max){
            secondMax = max
            max = el
        }
        else if(el>secondMax && el!==max){
            secondMax = el
        }
    }
    console.log(max,secondMax)
  }
  maxAndSecondMax([12,45,64,-100])