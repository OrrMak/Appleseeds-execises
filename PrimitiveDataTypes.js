
// This is a single-line comment
/*
This is a multi-line comment.
It can span multiple lines.
*/


// 3 - Primitive Types.md
const MyNane="Orr";

const Num1=1;
const Num2=2;
const sum=Num1+Num2;
console.log(`The sum is: ${sum}`);

const Bool=true;

let myUnVar;
console.log(myUnVar);

let MyNullVar=null;
console.log(MyNullVar);

// 4 - Variable Naming.md
const weatherParis="tocold";
const isLogged=true;
const emailOrderForm="whatEevr@gmail.com";
const TotlaScore=0;

// 7 - Understanding let, const, and var.md
var Num=7;
let name="string";
const isSigned=true;

let reAssign="Orr";
console.log(reAssign);
reAssign="Orr123";
console.log(reAssign);


const constAssign="Orr";
console.log(constAssign);
reAssign="Orr123";
console.log(constAssign);

// 6 - Template Literals.md
const orrName="Orr";
const orrAge=30;
console.log(`My name is ${orrName} and I am ${orrAge} years old..`)

const length=5;
const width=3;
const area=length*width;
console.log(`The area if a rectangle with length of ${length} anf width of ${width} is ${area}`);

const today="Monday";
const task1="Work";
const task2="Study";
const task3="workout";
console.log(`On ${today}, I will ${task1},${task2},${task3}..`)

const numPets=2;
console.log(`I would like to have at list ${numPets} pets`);

const triHeight=4;
const triBase=6;
const triArea=triHeight*triBase;
console.log(`The area of a triangle with the base ${triBase} and height ${triHeight} is ${triArea}`);

// 2 - typeof Operator.md
const num=10;
const str="Hello";
const bool=true;
console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);

const firstVar=42;
const secondVar="42";
console.log(typeof firstVar);
console.log(typeof secondVar);

// const noValue;
const emptyValue=null;
console.log(typeof noValue);
console.log(typeof emptyValue);

// console.log(noValue);
console.log(emptyValue);

// const num2=10;
const str2="Hello";
const bool2=true;
// console.log(`The value of num2 is ${num2} and it's type is ${typeof num2}`);
console.log(`The value of str2 is ${str2} and it's type is ${typeof str2}`);
console.log(`The value of bool2 is ${bool2} and it's type is ${typeof bool2}`);

// 5 - String concatenation.md

const intro1="My name is Orr";
const intro2="and I am 30 years old";
const intro=intro1+" "+intro2;
console.log(intro);

const fav1="orange";
const fav2="the sympsons";
const fav3="tofu";
const fav=`My favorite color is ${fav1}, I love the movie ${fav2}, and I enjoy eating ${fav3}`
console.log(fav);

const a=3;
const b=4;
const result=a+b;
console.log(`The sum of a and b is ${result}`)

const currentDay="Monday";
console.log(`Today is ${currentDay}`)

// 8 - Basic Arithmetic.md
const num1=8;
const num2=15;
const add=num1+num2;
console.log(add);

const aa=30;
const bb=12;
const sub=aa-bb;
console.log(sub);

const x=7;
const y=3;
const multi=aa*bb;
console.log(multi);

const dividend=20;
const divisor=4;
const div=dividend/divisor;
console.log(div);

const remainder=dividend%divisor;
console.log(remainder);

const number1=15;
const number2=25;
const number3=10;
console.log((number1+number2+number3)/3);

// 7. Even or Odd Detector: 



//if
/* Check age and height
If age < 15 - print cannot enter
If age > 15 and height < 110 - print go on kids ride
If age > 15 and he	igt > 110 - print go on rollercoster
If sonOfManager = true, print - do whatever*/

const age,height,msg;
const sonOfManager;

if(age<15){
    console.log("cannot enter");
}
else if (age>15 && height<110){
    console.log("go on kids ride");
}
else if (age>15 && height>110){
    console.log("go on rollercoster");
}






