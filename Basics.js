// variable -> let, var

let firstVar = "Learning JS";
var secondVar = "Learning DOM concept";

//diff var-> access globally, let -> limited access
// constant cannot be changed

const firstConst = "Javascript";

firstVar = "Learning JavaScript";

console.log("first Var value:", firstVar);
console.log("Second Var:", secondVar);
console.log("FirstConst:", firstConst);

let numVar = 20;
let numVar2 = 50.2;
console.log(numVar);
console.log(numVar2);
let booleanVar = "true";
let booleanVar2 = "false";
console.log(booleanVar);
console.log(booleanVar2);

console.log(typeof booleanVar);
console.log(typeof numVar);
console.log(typeof firstVar);

let convertedVar = String(numVar);
console.log(typeof convertedVar);

let strNum = Number("123");

let boolStr = String(booleanVar2);

console.log("boolString", boolStr);

let boolNum = Number(booleanVar2);
console.log(boolNum);

let num1 = 80;

let num2 = 6;

console.log(num1 / num2);
console.log(num1 % num2);

console.log(num1 != num2);

let per = 80;

console.log(per > 80 && per <= 90);

console.log(!(8 > 5));

let res = num1 > num2 ? "Number 1 is great" : "Number 2 is great";

console.log(res);
