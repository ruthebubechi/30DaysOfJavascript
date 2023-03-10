//.......Question..........//
//declared a variable
let challenge = "30 Days of Javascript";
//console.log the string
console.log(challenge);

//console the length of the string
console.log(challenge.length);

//string to uppercase
challenge = challenge.toUpperCase();
console.log(challenge);
//string to lowercase
challenge = challenge.toLowerCase();
console.log(challenge);

//slice out the first word of the string
challenge = challenge.slice(0, 2);
console.log(challenge);

//slice out the Days of JavaScript
const stillChallenge = "30 Days of JavaScript";
stillChallenge = stillChallenge.substring(2, 18);
console.log(stillChallenge); //............................................................................................

//check if the string contains a word Script
const word = "30 Days of JavaScript";
console.log(word.includes("Script"));

//splitting into an array
const jsChallenge = "30 Days of JavaScript";
console.log(jsChallenge.split());

//Question 10
console.log(jsChallenge.split(""));

//Question 11
const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(" "));

//Question 12
let replaceWord = "30 Days of JavaScript";
console.log(replaceWord.replace("JavaScript", "Python"));

//Question 13
const characterCode = "30 Days of JavaScript";
console.log(characterCode.charAt(15));

//Question 14
const characterIndex = "30 Days of JavaScript";
console.log(characterIndex.charCodeAt("J"));

//Question 15
const determineIndex = "30 Days of JavaScript";
console.log(determineIndex.indexOf("a"));

//Question 16
const determineLastIndex = "30 Days of JavaScript";
console.log(determineLastIndex.lastIndexOf("a"));

//Question 17
const newIndex =
  "You cannot end a sentence with because because because is a conjunction";
console.log(newIndex.indexOf("because"));

//Question 18
console.log(newIndex.lastIndexOf("because"));

//Question 19
console.log(newIndex.search("because"));

//Question 20
const removeSpaces = " 30 Days of JavaScript";
console.log(removeSpaces.trim(""));

//Question 21
const startMethod = "30 Days of JavaScript";
console.log(startMethod.startsWith("30"));

//Question 22
console.log(startMethod.endsWith("JavaScript"));

//Question 23
console.log(startMethod.match("a"));

//Question 24
