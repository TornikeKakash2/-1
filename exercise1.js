// დავალება 1
let string = "string";

// დავალება 2
const number = 23;

// დავალება 3
let boolean = true;

// დავალება 4
let num = 5;

if (num % 2 === 0) {
  console.log("ეს რიცხვი ლუწია");
} else {
  console.log("ეს რიცხვი კენტია");
}

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}

let year;

if (year % 4 === 0 && year % 100 !== 0) {
  console.log("ეს წელი ნაკიანია");
} else {
  console.log("ეს წელი არ არი ნაკიანი");
}

let points;

switch (points) {
  case points > 90:
    console.log("A");
    break;
  case points > 80:
    console.log("B");
    break;
  case points > 70:
    console.log("C");
    break;
  case points > 60:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}

// დავალება 5

let age;

age >= 18
  ? console.log("შეგიძლია ხმის მიცემა")
  : console.log("არ შეგიძლია ხმის მიცემა");
