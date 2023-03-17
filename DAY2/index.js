//Question 1

const challenge = "30 Days of Javascript";

//Question 2
console.log(challenge);

//Question 3
console.log(challenge.length);

//Question 4
console.log(challenge.toUpperCase());

//Question 5
console.log(challenge.toLowerCase());

//Question 6
console.log(challenge.slice(0, 2));

//Question 7
const sliceOut = "30 Days of JavaScript";
console.log(sliceOut.substring(3, 21));

//Question 8
const includeWord = "30 Days of JavaScript";
console.log(includeWord.includes("Script"));

//Question 9
const jsChallenge = "30 Days of JavaScript";
console.log(jsChallenge.split());

//Question 10
console.log(jsChallenge.split(""));

//Question 11
const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(" "));

//Question 12
const replaceWord = "30 Days of JavaScript";
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
const mergeWord = "30 Days of ";
console.log(mergeWord.concat("JavaScript"));

//Question 25
const repeatWord = "30 Days of JavaScript";
console.log(repeatWord.repeat(2));
