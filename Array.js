let salarEmp = [70000, 25000, 35000];

console.log(salarEmp.length);

salarEmp.push(20000, 40000);

console.log("New Array is:", salarEmp);

// pop -> To remove the last element of the array

let popValue = salarEmp.pop();

console.log("New Array is:", salarEmp);

// push -> To remove the first element of the array

let shiftValue = salarEmp.push();

console.log("New Array is:", salarEmp);

let newSalEmp = [90000, 95000];

let mergedArray = salarEmp.concat(newSalEmp);

console.log("merged Array", mergedArray);

// convert an array in to string

let joinString = mergedArray.join(" | ");

console.log(joinString);

console.log(typeof joinString);

let sliceArray = mergedArray.slice(2, 4);

console.log(sliceArray);

mergedArray.splice(2, 0, 95000);

console.log("merged array is", mergedArray);

mergedArray.splice(3, 1);

console.log("merged array is", mergedArray);

mergedArray.splice(4, 2, 87000, 66000);

console.log("merged array is", mergedArray);

for (i = 0; i < mergedArray.length; i++) {
  console.log(mergedArray[i]);
}

mergedArray.forEach((element) => {
  console.log(element);
});

let hikedSal = mergedArray.map((element) => element + 0.05 * element);

console.log(hikedSal);

let highSal = mergedArray.filter((element) => element > 75000);

console.log(highSal);

let total = hikedSal.reduce((acc, currVal) => acc + currVal, 0);

console.log(total);

let empNames = ["Laura", "Mahesh", "Akshay", "Julia"];

let newArray = [120, 90, 78, 345, 230, 180];

console.log(empNames.sort());

let ascOrder = newArray.slice().sort((a, b) => a - b);

console.log(ascOrder);

let descOrder = newArray.slice().sort((a, b) => b - a);

console.log(descOrder);

console.log(empNames.reverse());

console.log(newArray);

let searchElem = newArray.find((element) => element === 90);

console.log(searchElem);

let inclElem = newArray.includes(120);

console.log(inclElem);

console.log(newArray);

let indexElem = newArray.indexOf(90);

console.log(indexElem);
