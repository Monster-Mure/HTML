let str = "Javascript";

let strObj = new String("Javascript Learning");

let firstChar = strObj[0];

console.log(firstChar);

console.log(strObj.length);

let lastChar = strObj[strObj.length - 1];

console.log(lastChar);

console.log(strObj.charAt(6));

console.log(strObj.charCodeAt(6));

let strObj2 = " session";

console.log(strObj.concat(strObj2));

console.log(strObj.lastIndexOf("a"));

console.log(strObj.search("Learning"));

console.log(strObj.replace("Learning", "Session"));

console.log(strObj.substring(7, 12));

console.log(strObj.toLowerCase());
console.log(strObj.toUpperCase());

let strNames = "Mahesh, Laura, Akshay, Julia";

let empNames = strNames.split(",");

console.log(empNames);

let orgDept = "    HR DEPT    ";
console.log(orgDept.trim());
