const countries = require("./countries");
const webTechnologies = require("./tech");

/*
Question # 19 --------------Start--------------
*/
console.log("Popular Web Technologies:");
console.log(webTechnologies);
console.log("Countries List:");
console.log(countries);
/*
Question # 19 --------------End--------------
*/

/*
Question # 21 --------------Start--------------
*/
if (countries.includes("Ethiopia")) {
  const countryIndex = countries.indexOf("Ethiopia");
  const country = countries[countryIndex];
  console.log(`Question # 21 Answer:
   ${country.toUpperCase()}`);
} else {
  countries.push('Ethiopia');
}
/*
Question # 21 --------------End--------------
*/
