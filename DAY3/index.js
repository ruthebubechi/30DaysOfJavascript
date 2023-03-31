//Question 1
//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = "Ruth";
console.log(typeof firstName);
const lastName = "Chukwu";
console.log(typeof lastName);
const country = "Nigerian";
console.log(typeof country);
const city = "Abuja";
console.log(typeof city);
const age = 25;
console.log(typeof age);
const isMarried = false;
console.log(typeof isMarried);
const year = 2023;
console.log(typeof year);

//Question 2
//Check if type of '10' is equal to 10
const numberString = "10";
const numberInt = 10;
console.log(numberString === numberInt);
//const changeNumToInt = +number;
//console.log(changeNumToInt);

//Question 3
//Check if parseInt('9.8') is equal to 10
const numberT = "9.8";
const convertNumToInt = +numberT;
console.log(numberT === convertNumToInt);
// console.log(Math.ceil(convertNumToInt));

//Question 4
//Boolean value is either true or false.

//Write three JavaScript statement which provide truthy value.
console.log(3 === 3);
console.log(5 > 1);
console.log(0 == "");

//Write three JavaScript statement which provide falsy value.
console.log(9 === "9");
console.log(5 > 10);
console.log(0 === "");

//Question 5
//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

const checkOne = 4 > 3;
console.log(checkOne);

const checkTwo = 4 >= 3;
console.log(checkTwo);

const checkThree = 4 < 3;
console.log(checkThree);

const checkFour = 4 <= 3;
console.log(checkFour);

const checkFive = 4 == 4;
console.log(checkFive);

const checkSix = 4 === 4;
console.log(checkSix);

const checkSeven = 4 != 4;
console.log(checkSeven);

const checkEight = 4 !== 4;
console.log(checkEight);

const checkNine = 4 != "4";
console.log(checkNine);

const checkTen = 4 == "4";
console.log(checkTen);

const checkEleven = 4 === "4";
console.log(checkEleven);

// Find the length of python and jargon and make a falsy comparison statement.
const checkLength = "python".length !== "jargon".length;
console.log(checkLength);

//Question 6
//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
const checkResultOne = 4 > 3 && 10 < 12;
console.log(checkResultOne);

const checkResultTwo = 4 > 3 && 10 > 12;
console.log(checkResultTwo);

const checkResultThree = 4 > 3 || 10 < 12;
console.log(checkResultThree);

const checkResultFour = 4 > 3 || 10 > 12;
console.log(checkResultFour);

const checkResultFive = !(4 > 3);
console.log(checkResultFive);

const checkResultSix = !(4 < 3);
console.log(checkResultSix);

const isLegal = !false;
console.log(isLegal);

const checkResultSeven = !(4 > 3 && 10 < 12);
console.log(checkResultSeven);

const checkResultEight = !(4 > 3 && 10 > 12);
console.log(checkResultEight);

const checkResultNine = !(4 === "4");
console.log(checkResultNine);

// There is no 'on' in both dragon and python
const check = "dragon";
const checkAgain = "python";
if (check.includes("on")) {
  console.log(true);
} else {
  checkAgain.includes("on");
  console.log(true);
}

//Question 7
//Use the Date object to do the following activities
//i. What is the year today?
const today = new Date();
console.log(today.getFullYear());

//ii.What is the month today as a number?
const month = new Date();
console.log(month.getMonth());

//iii.What is the date today?
const date = new Date();
console.log(date.getDate());

//iv.What is the day today as a number?
const day = new Date();
console.log(day.getDay());

//v. What is the hours now?
const hour = new Date();
console.log(hour.getHours());

//vi. What is the minutes now?
const minute = new Date();
console.log(minute.getMinutes());

//vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.
const seconds = Date.now();
console.log(seconds);
