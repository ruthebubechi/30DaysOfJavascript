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
const number = "10";
const changeNumToInt = +number;
console.log(changeNumToInt);

//Question 3
//Check if parseInt('9.8') is equal to 10
const numberT = "9.8";
const convertNumToInt = +numberT;
console.log(Math.ceil(convertNumToInt));

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
const checkLength = "python".length < "jargon".length;
console.log(checkLength);
