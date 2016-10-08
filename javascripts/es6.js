// console.log("es6");
//const and let are ways of defining variables
//const -- can only be defined one time
// const a= 8;
// console.log("a", a);
// // const outputDiv = $("#outputDiv");

// //let is very similar to var, only used in the block that it is defined in
// let b = 8;
// console.log("b", b);
// b = 12;
// console.log("b2", b);


// function varTest () {
//   var x = 1;
//   if(true) {
//     var x =2;
//     console.log("inside if statement", x);
//   }
//   console.log("outside if statement", x);
// }

// function letTest () {
//   let y = 1;
//   if(true) {
//     let y =2;
//     console.log("inside if statement", y);
//   }
//   console.log("outside if statement", y);
// }

// varTest();
// letTest();

//arrow functions
// var sum = function (){
//   let a = 1, b = 2;
//   return a + b;
// }
// console.log("hardcorded sum in ES5:", sum());

// var sum2 = () => {
//   let a = 1, b = 2;
//   return a + b;
// }
// console.log("hardcorded sum in ES6:", sum2());

// var reflect = function(value) {
//   return value;
// }
// console.log("reflect in ES5", reflect("ES5"));

// let reflect2 = (value) => {
//   return value;
// }
// console.log("reflect in ES6", reflect2("ES6"));

// var realSum = function(num1, num2) {
//   return num1 + num2;
// }
// console.log("real sum ES5", realSum(2, 3))

// let realSum2 = (num1, num2) => num1 + num2;
// console.log("real sum ES6", realSum2(2,3));

//string templates
// let m = "biteme";
// console.log('m', m);
// let r  = `hello my name is ${m}`;
// console.log("r",r)

//object literal property shorthand
let wow ="Hi there", es6="ES6",numNum=()=>{console.log('howdy')}
let myOldObject = {
  wow: wow,
  es6: es6,
  numNum: numNum
}
console.log(myOldObject);

let myNewObject = {
  wow, es6, numNum
}
console.log(myNewObject);




//method properties
var es5Obj = {
  foo: function(){console.log('foo')},
  bar: function(){console.log('bar')}
}
console.log("ES5 object:",es5Obj);

var es6Obj = {
  foo(){console.log('foo')},
  bar(){console.log('bar')}
}
console.log("ES6 object:",es6Obj);

























