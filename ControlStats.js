let num = 80;

if (num > 80) {
  console.log("You acheived excellent score");
} else {
  console.log("You achieved good score");
}

let per = 75;

if (per < 60) {
  console.log("Grade D");
} else if (per >= 60 && per < 70) {
  console.log("Grade C");
} else if (per >= 70 && per < 80) {
  console.log("Grade B");
} else {
  console.log("Grade A");
}

let day = 0;

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  default:
    console.log("Incorrect Value");
}

for (let i = 100; i <= 110; i++) {
  console.log(i);
}

let rollNumbers = [10, 20, 30, 40, 50];
for (let n of rollNumbers) {
  console.log(n);
}

let person = {
  name: "Mahesh",
  age: 30,
  job: "Full stack developer",
  subject: "CS",
};

for (let k in person) {
  console.log(k + ":" + person[k]);
}

for (let i = 100; i <= 110; i++) {
  console.log(i);

  if (i == 107) {
    break;
  }
}

for (let i = 100; i <= 110; i++) {
  console.log(i);

  if (i == 107) {
    continue;
  }
}
