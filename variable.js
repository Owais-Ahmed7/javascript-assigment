/*
Question # 1 --------------Start--------------
*/
const stringValue = "Nathan Drake";
const booleanValue = true;
const undefinedValue = undefined;
const nullValue = null;
console.log(
  "Question # 1 Answers: ",
  `(${typeof stringValue}: ${stringValue}) \n`,
  `(${typeof booleanValue}: ${booleanValue}) \n`,
  `(${typeof undefinedValue}: ${undefinedValue}) \n`,
  `(${typeof nullValue}: ${nullValue})`
);
/*
Question # 1 --------------End----------------
*/

/*
Question # 2 --------------Start--------------
*/
const firstName = "Owais";
const lastName = "Ahmad";
const maritalStatus = "unmarried";
const country = "Pakistan";
const age = "19";

console.log(
  `Question # 2 Answers: 
  My name is ${firstName} ${lastName}. 
  I am ${age} years old from ${country} 
  and i am ${maritalStatus}.`
);
/*
Question # 2 --------------End----------------
*/

/*
Question # 3 --------------Start--------------
*/
const castName = "Nathan Drake";
console.log(`Question # 3 Answer: ${castName.toUpperCase()}`);
/*
Question # 3 --------------End----------------
*/

/*
Question # 4 --------------Start--------------
*/
const anyString = "Hello i wrote this Script in js";
console.log(
  `Question # 4 Answer: Does it contain word Script: ${
    anyString.includes("Script") ? "Yes" : "No"
  }`
);
/*
Question # 4 --------------End----------------
*/

/*
Question # 5 --------------Start--------------
*/
const anyString5 = "Adam, Gabriel, Esa, Yusuf, Ibrahim, Israfel, Saleh, Masab";
console.log(`Question # 5 Answer: ${anyString5.split(", ")}`);
/*
Question # 5 --------------End----------------
*/

/*
Question # 6 --------------Start--------------
*/
const str = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const arr = str.split(", ");
console.log(`Question # 6 Answer: ${arr}`);
/*
Question # 6 --------------End----------------
*/

/*
Question # 7 --------------Start--------------
*/
const ques7Arr = [
  "JavaScript",
  "React",
  "Node.js",
  "pw skills",
  "React",
  "pw skills",
  "MongoDB",
  "pw skills",
];
const firstIndex = ques7Arr.indexOf("pw skills");
const lastIndex = ques7Arr.lastIndexOf("pw skills");
console.log(
  `Question # 7 Answer: first index ${firstIndex}
  last index ${lastIndex}`
);
/*
Question # 7 --------------End----------------
*/

/*
Question # 8 --------------Start--------------
*/
const anyString4 = " Hello  ";
console.log(
  `Question # 8 Answer: String without trim *${anyString4}* \n String with trim *${anyString4.trim()}*`
);
/*
Question # 8 --------------End----------------
*/

/*
Question # 9 --------------Start--------------
*/

// Example 1: Non-empty string is truthy
const ques9Str = "Hello, world!";
// Example 2: Non-zero number is truthy
const num = 42;
// Example 3: Non-null object is truthy
const obj = { name: "John", age: 30 };

// Example 1: Empty string is falsy
const emptyStr = "";
// Example 2: Zero is falsy
const zero = 0;
// Example 3: Null value is falsy
const nullVal = null;
console.log(`Question # 9 Answers: Three Truthy Statment Examples: 
  ${Boolean(ques9Str)}, 
  ${Boolean(num)}, 
  ${Boolean(obj)}
Three Falsy Statment Examples: 
  ${Boolean(emptyStr)}, 
  ${Boolean(zero)}, 
  ${Boolean(nullVal)}`);
/*
Question # 9 --------------End----------------
*/

/* 
Question # 10 --------------Start--------------
*/
const ques10Var1 = 4 > 3; // Result: true
const ques10Var2 = 4 >= 3; // Result: true
const ques10Var3 = 4 < 3; // Result: false
const ques10Var4 = 4 <= 3; // Result: false
const ques10Var5 = 4 == 4; // Result: true
const ques10Var6 = 4 === 4; // Result: true
const ques10Var7 = 4 != 4; // Result: false
const ques10Var8 = 4 !== 4; // Result: false
const ques10Var9 = 4 != "4"; // Result: false
const ques10Var10 = 4 == "4"; // Result: true
const ques10Var11 = 4 === "4"; // Result: false

const python = "python";
const jargon = "jargon";
let result = "";

if (python.length < jargon.length) {
  result = "The length of 'python' is less than the length of 'jargon'";
} else {
  result =
    "The length of 'python' is greater than or equal to the length of 'jargon'";
}
console.log(
  `Question # 10 Answers: Comparrsion:
  ${ques10Var1}
  ${ques10Var2}
  ${ques10Var3}
  ${ques10Var4}
  ${ques10Var5} 
  ${ques10Var6}
  ${ques10Var7}
  ${ques10Var8}
  ${ques10Var9}
  ${ques10Var10}
  ${ques10Var11}
Comparison Statement: 
  ${result}`
);
/*
Question # 10 --------------End----------------
*/

/*
Question # 11 --------------Start--------------
*/
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const currentDate = date.getDate();
const day = date.getDay();
const hour = date.getHours();
const minutes = date.getMinutes();
const timeElapsed1970 = Math.floor(date.getTime() / 1000);

console.log(`Question # 12 Answer:
 Year is ${year}, Month is ${month} & date is ${currentDate}.
 Day is ${day}, hour is ${hour} & minutes are ${minutes}.
 Time Elapsed since January 1, 1970 is ${timeElapsed1970}`);

/*
Question # 11 --------------End----------------
*/

/*
Question # 12 --------------Start--------------
*/
const date12 = new Date();
// - YYYY-MM-DD HH:mm
const firstDateFormat = `${date12.getFullYear()}-${date12.getMonth()}-${date12.getDate()} ${date12.getHours()}:${date12.getMinutes()}`;
// - DD-MM-YYYY HH:mm
const secondDateFormat = `${date12.getDate()}-${date12.getMonth()}-${date12.getFullYear()} ${date12.getHours()}:${date12.getMinutes()}`;
// - DD/MM/YYYY HH:mm
const thirdDateFormat = `${date12.getFullYear()}/${date12.getMonth()}/${date12.getDate()} ${date12.getHours()}:${date12.getMinutes()}`;

console.log(`Question # 12 Answers:
 Date format(YYYY-MM-DD HH:mm): ${firstDateFormat}
 Date format(DD-MM-YYYY HH:mm): ${secondDateFormat}
 Date format(DD/MM/YYYY HH:mm): ${thirdDateFormat}`);
/*
Question # 12 --------------End----------------
*/

/*
Question # 13 --------------Start--------------
*/
const userAge = ""; //prompt("Enter your Age:");
let response = "";

if (userAge >= 18) {
  response = "You are old enough to drive : )";
} else {
  response = `Wait for the ${18 - userAge} years, You needs to turn 18.`;
}
console.log(`Question # 13 Answer:
 ${response}`);
/*
Question # 13 --------------End----------------
*/

/*
Question # 14 --------------Start--------------
*/
const checkEvenOdd = (number) => {
  const checkReminder = Math.round(number % 2);
  if (checkReminder === 0) return `This Number ${number} is even`;
  else return `This Number ${number} is Odd`;
};
console.log(`Question # 14 Answer:
 ${checkEvenOdd(9.5)},
 ${checkEvenOdd(8)}`);
/*
Question # 14 --------------End----------------
*/

/*
Question # 15 --------------Start--------------
*/

/**
 * @param {Number} marks - Marks are passed as input.
 * @desc Grades are assigned is following manner:- 80-100: A, 70-89: B, 60-69: C, 50-59: D, 0-49: F
 * @returns Grade assigned using provided marks
 */
const assignGrade = (marks) => {
  let gradeAssigned = "";
  if (marks >= 80 && marks <= 100) {
    gradeAssigned = "A";
  } else if (marks >= 70 && marks <= 79) {
    gradeAssigned = "B";
  } else if (marks >= 60 && marks <= 69) {
    gradeAssigned = "C";
  } else if (marks >= 50 && marks <= 59) {
    gradeAssigned = "D";
  } else {
    gradeAssigned = "F";
  }
  return `Your Grade is ${gradeAssigned}`;
};

console.log(`Question # 15 Answer:
 ${assignGrade(77)}`);
/*
Question # 15 --------------End----------------
*/

/*
Question # 16 --------------Start--------------
*/

/**
 * @param {String} month - Month input as string.
 * @desc Checks month for season
 * @returns Season according to month.
 */
const checkSeason = (month) => {
  let season = "";
  const inputMonth = month.trim().toLowerCase();

  switch (inputMonth) {
    case "september":
    case "october":
    case "november":
      return (season = "Season is Autumn");
    case "december":
    case "january":
    case "february":
      return (season = "Season is Winter");
    case "march":
    case "april":
    case "may":
      return (season = "Season is Spring");
    default:
      return (season = "Season is Summer");
  }
};

console.log(`Question # 16 Answer: 
 ${checkSeason("January")}`);
/*
Question # 16 --------------End----------------
*/

/*
Question # 17 --------------Start--------------
*/
function getDaysInMonth(month, year) {
  // The month is zero-indexed in the Date object, so we need to subtract 1 from the month number
  const date = new Date(year, month, 0).getDate();
  return `Number of days in ${year}-${month} is ${date}`;
}

console.log(`Question # 17 Answer:
 ${getDaysInMonth(2, 2023)}`);
/*
Question # 17 --------------End----------------
*/

/*
Question # 18 --------------Start--------------
*/
const daysInMonth = (month, year) => {
  // List of the number of days in each month
  const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // If it's February and a leap year, the number of days is 29
  if (month === 1 && ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
    return 29;
  } else {
    return daysInMonths[month];
  }
}

console.log(`Question # 18 Answer: Days in Month 1, 2024 ${daysInMonth(1, 2024)}`); // Output: 29 (leap year)
/*
Question # 18 --------------End----------------
*/

/*
Question # 20 --------------Start--------------
*/
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

/**
 *
 * @param {String} value - Passed the value as string to be added in start of the array.
 * @returns text response or array
 */
const addItemAtBeginning = (value) => {
  const item = shoppingCart.includes(value);
  if (item) return "Item already exists in Array.";
  return shoppingCart.unshift(item);
};

/**
 *
 * @param {String} value - Passed the value as string to be added in last of the array.
 * @returns text response or array
 */
const addItemAtEnd = (value) => {
  const item = shoppingCart.includes(value);
  if (item) return "Item already exists in Array.";
  return shoppingCart.push(item);
};

/**
 *
 * @param {String} value - Passed value as string to be deleted.
 * @returns An array after element has been deleted.
 */
const removeItem = (value) => {
  shoppingCart.pop(value);
  return shoppingCart;
};

/**
 *
 * @param {String} prevValue - pass the value that you want to update.
 * @param {String} updateValue - pass the value that you want to be updated value.
 * @returns text response of array
 */
const editItem = (prevValue, updateValue) => {
  const item = shoppingCart.includes(prevValue);
  if (!item) return "Item does not exists";
  const idx = shoppingCart.indexOf(prevValue);
  return (shoppingCart[idx] = updateValue);
};
/*
Question # 20 --------------End----------------
*/

/*
Question # 22 --------------Start--------------
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sorted = ages.sort((a, b) => a - b);
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);

const findMedian = (values) => {
  const middleIndex = Math.floor(values.length / 2);
  if (values.length % 2 === 0) {
    const median = values[middleIndex] + values[middleIndex - 1] / 2;
    return median;
  } else {
    const median = values[middleIndex];
    return median;
  }
};

const findAverage = (values) => {
  const sum = values.reduce((total, age) => total + age);
  return sum / values.length;
};

const findRange = (values) => {
  const range = values[values.length - 1] - values[0];
  return range;
};

const diffMin = Math.abs(minAge - findAverage(ages));
const diffMax = Math.abs(maxAge - findAverage(ages));

console.log(`Question # 22 Answer:
 Min: ${minAge}
 Max: ${maxAge}
 Median: ${findMedian(ages)}
 Average: ${findAverage(ages)}
 Range: ${findRange(ages)}
 Compare Min & Average: ${diffMin}
 Compare Max & Average: ${diffMax}`);

/*
Question # 22 --------------End----------------
*/

/*
Question # 23 --------------Start--------------
*/
const checkPrimeNumber = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

console.log(`Question # 23 Answer:
 is 7 Prime Number ${checkPrimeNumber(7) ? "Yes" : "No"}`);
/*
Question # 23 --------------End----------------
*/

/*
Question # 24 --------------Start--------------
*/
const evenNumbers = [];
const oddNumbers = [];

//this will return an array of even and odd numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) evenNumbers.push(i);
  else oddNumbers.push(i);
}

console.log(
  "Question # 24 Answer:",
  "Even Numbers: ",
  evenNumbers,
  "Odd Numbers: ",
  oddNumbers
);
/*
Question # 24 --------------End----------------
*/

/*
Question # 25 --------------Start--------------
*/
/**
 *
 * @param {Number} weight - Pass weight in kilogram.
 * @param {Number} height - Pass height in meter.
 * @returns BMI from the given data.
 */
const calculateBMI = (weight, height) => {
  const bmi = weight / (height * height);
  if (bmi < 18.5) return "Underweight";
  else if (bmi > 18.5 && bmi < 24.5) return "Normal";
  else if (bmi > 25 && bmi < 29.5) return "Overweight";
  else return "Obese, Work on yourself health comes first.";
};

console.log(`Question # 25 Answer:
 My Weigth is 60kg and height is 1.75 meter, So your BMI is ${calculateBMI(
   60,
   1.75
 )}`);
/*
Question # 25 --------------End----------------
*/

/*
Question # 26 --------------Start--------------
*/
/**
 *
 * @param {Number} number - pass the number of whom you want to make the table.
 * @returns table of multiplications of the number upto 10 in vertical manner like TABLE.
 */
const makeTable = (number) => {
  console.log("Question # 26 Answer:");
  for (let i = 1; i <= 10; i++) {
    console.log(` ${number} * ${i} = ${number * i}`);
  }
};
makeTable(9);
/*
Question # 26 --------------End----------------
*/

/*
Question # 27 --------------Start--------------
*/
console.log("Question # 27 Answer:");
for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}
/*
Question # 27 --------------End----------------
*/

/*
Question # 28 --------------Start--------------
*/
const astrag = "*";

const makeTriangle = (value) => {
  console.log("Triangle:");
  for (let i = 0; i < value; i++) {
    let component = astrag;
    let j = i;
    while (j !== 0) {
      component = component + astrag;
      j--;
    }
    console.log(component);
  }
};
makeTriangle(3);

const makeSquare = (value) => {
  console.log("Square:");
  for (let i = 0; i < value; i++) {
    let component = "";
    let j = value;
    while (j !== 0) {
      component = component + astrag;
      j--;
    }
    console.log(component);
  }
};
makeSquare(3);

const makePyramid = (value) => {
  console.log("Pyramid:");
  for (let i = 1; i <= value; i++) {
    let str = "";
    for (let j = 1; j <= value - i; j++) {
      str += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      str += "*";
    }
    console.log(str);
  }
};
makePyramid(3);
/*
Question # 28 --------------End----------------
*/

/*
Question # 29 --------------Start--------------
*/
const fileName = "reports.csv";
console.log(`Question # 29 Answer: ${fileName.split(".").pop()}`);
/*
Question # 29 --------------End----------------
*/

/*
Question # 30 --------------Start--------------
*/

/**
 *
 * @param {Number} operand1 - Pass the first Operand / Number.
 * @param {Number} operand2 - Pass the second Operand / Number.
 * @param {String} operator - Select the operator for the operation like +, -, *, /.
 * @returns value after the math operation.
 */
const calculator = (operand1, operand2, operator) => {
  if (operator === "*") return operand1 * operand2;
  else if (operator === "+") return operand1 + operand2;
  else if (operator === "-") return operand1 - operand2;
  else return operand1 / operand2;
};

console.log(`Question # 30 Answer:
 5 + 5 = ${calculator(5, 5, "+")}
 5 - 5 = ${calculator(5, 5, "-")}
 5 * 5 = ${calculator(5, 5, "*")}
 5 / 5 = ${calculator(5, 5, "/")}`);
/*
Question # 30 --------------End----------------
*/
