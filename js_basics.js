// var, let, const 
var a = 10; // veriable that will change or non-block-level
let b = 20;  // let offers block-level scoping
const c = 30; // const must be const, mean never ever change its value

// js data type

let i = "usman"; // string
let num = 100; // number
let symbol = Symbol("key"); // special char
let d = BigInt("82390213892183921") // BigInt
let e // undefind
let f = "" // null
let g = {name: "usman", age: 20} // object
let h = [1, 2, 3, 4] // Array

////JavaScript Assignment Operators
// a + b 
// a - b 
// a * b 
// a / b 
// a % b 

//---Arrays  ----> resizeable, mix of datatypes
const arr = [0, 1, 2, 3, 4, "hello", true, {name: "usman", age: 20}];
const myArr = [0, 1, 2, 3, 4, 5, 6, 7];
const newArray = new Array(1,2,3,4);

// Array mathods
myArr.push(6) // add one el in last
//console.log(myArr);
myArr.pop() // remove from last
//console.log(myArr);
myArr.includes(5) // check el is
myArr.indexOf(4) //chech el index no

myArr.join() // convert to string

myArr.unshift(0) //add in the first el
myArr.shift() // remove from first el

// slice ---> copy elements
 const newArr1 = myArr.slice(1, 3);
 //console.log(newArr1);
 //console.log("slice", myArr);
// splice ---> cut elements
const newArr = myArr.splice(1, 3);
//console.log(newArr);
//console.log("splice", myArr);


/////// jS Objects
/// obj singleton
const obj = new Object();

/// object literals
const sym = Symbol("key")
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    [sym]: "mySymble"
  };
const person1 = {
    name: "jogh",
    mName: "dum",
    age1: 90,
    adress: {
      country: 'UK',
      area: 'main'
    }
  };

// print obj value 
// console.log(person.firstName);
// console.log(person["age"]);
// console.log(person[sym]);

//change value
person.firstName = "sam ayaub"
//console.log(person);

//freez obj
//Object.freeze(person);

//add function in obj
person.greeting = function () {
    //console.log('Hello JS user');
}
//console.log(person.greeting());

//add too objects
//1
// const newObj = {person, person1}
// console.log(newObj);
// //2
 const newObj1 = Object.assign({}, person, person1)
 //console.log(newObj1);
// //3 ------> best and simple
 const newObj = {...person, ...person1}
 //console.log(newObj);

 //console.log(newObj1["eyeColor"]);

 ///////obj destracture

 const {firstName: name} = person;
 //console.log(name);

 // +++++++++JS Functions 

//  function myFun() {
//   console.log("Its a simple function");
//  }
//  myFun();

// const myFun = function() {
//   console.log("Its a simple function");
//  }
//  myFun();

const myFun = () => {
  //console.log("Its a arrow function");
 }
 myFun();

 //+++++THIS key word

//  const any = function () {
//   let user = "usman"
//   console.log(this.user);
//  }
//  console.log(this.user);
//  any()
 
//+++++++++++++ JS Control flow, if else, loops etc
// if, else

if (2==2) {
 // console.log("true");
}
if (2==3) {
  console.log("true");
} else {
 // console.log("false");
}

//+++++++loops
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let obj1 = {
  js: "javascript",
  cpp: "c++",
  rb: "rubay",
  swift: "swift"
}
//for each
arr1.forEach( (item, index, arr) => {
 // console.log(`${index} - ${item}, ${arr}`);
} )

// for loop
for (let index = 0; index < arr1.length; index++) {
  const element = arr1[index];
  //console.log(element);
}
//obj
// for (let i = 0; i < obj1.length; i++) {
// console.log(i); ==> empty 
// }

/// for in 
for (const key in arr1) {
  //console.log(key);  ==> give you keys not value
}
// on Object
for (const key in obj1) {
  //console.log(key);  //==> give you keys not value
}
for (const iterator of arr1) {
 // console.log(iterator); ==> give back values direct in array
}

for (const key in obj1) {
  //console.log(key, ':', obj1[key]);
 // console.log(obj1[key]);
}

const coding = [
  {
    name: 'javascript',
    fileType: 'js'
  },
  {
    name: 'paython',
    fileType: 'py'
  },
  {
    name: 'rubay',
    fileType: 'rb'
  },
  {
    name: 'java',
    fileType: 'java'
  },
]

//console.log(coding[0].fileType, coding[2].name);

coding.forEach( (item) => {
  //console.log(`Language name is ${item.name} and file type is ${item.fileType}`);
} )

// map, fillter, reduce

const code = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//map
//code.map( (num) => console.log(num)); // ==> 1234456789
//coding.map((item) => console.log(item.name))
//filter
const newCode = code.filter( (num) => num >=5 && num <= 8 )
//console.log(newCode);
const newVal = coding.filter((item) => item.fileType == 'js')
//console.log(newVal);

//reduce
const reduce = code.reduce( (acc, curntVal) => (acc + curntVal), 0 )
//console.log(reduce);