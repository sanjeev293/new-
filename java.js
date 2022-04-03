function my(num) {
  console.log((num * 3) / 8);
}

my(10);

function comparsion() {
  // global is local variable
  var global = "rajeev";
  console.log(global);
}

// global and local variable in same function local > global

var global = "sanjeev";

function presidence() {
  var global = "messi";
  return global;
}

console.log(presidence());
// will print local variable

console.log(global);
// will print local variable

// hoisting variable in which variable and function are declared on the top of scope

hositingVariable = 3;

console.log(hositingVariable);

var hositingVariable;

hoistedVariable();

function hoistedVariable() {
  x = 33;
  console.log(x);
  var x;
  // var y;
}
// end of hositing variable 

// impilict type corecion converting one data type to another 

var firstName =3;
var lastName ="3";

var full = firstName + lastName

console.log(full);

// passed by value and passed by reference 

// passed by reference 

var obj = {name:"sittu",surname:"ranjan"};

var obj2 =obj ;
console.log(obj2)

// immediate invoked function 

// (function(){ 
//   // Do something;
// })();

// call method 
// This method invokes a method (function) by specifying the owner object.

function callMethod(){

 return "hello " + this.name5;

}

var callInvokes ={name5:"nigam"};

console.log(callMethod.call(callInvokes))

// call method accepts arguments 

function say(message){
  return this.name6 + " is " + message
}
var see ={name6:"bappe"};

console.log(say.call(see,"awesome"));

// bind method in which it will return a function by using this keyword

var detailsPerson={
  display:function(registrationNumber,brandName){
  return this.name7 + " " + " bike deatils is " + registrationNumber + brandName;
  }
}
var person1 ={name7:"rajeev Sir"}

var done = detailsPerson.display.bind(person1,"MP-04 NQ-2133 "," bullet ");

console.log(done())

// callback function gets executed once another function get executed  

function divide(sum){
  console.log(Math.floor(sum/2))
}

function operationOnSum(num1,num2,operation){
 var sum = num1+num2;
 operation(sum);
}

operationOnSum(3,4,divide);

// rest operator 

function addAllArgs(...args){
  let sumOfArgs = 0;
  let i = 0;
  while(i < args.length){
    sumOfArgs += args[i];
    i++;
  }
  return sumOfArgs;
}

addAllArgs(6,8,10,11,15);