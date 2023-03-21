//Question 1
//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
const challenge = "30 Days of Javascript";

//Question 2
//Print the string on the browser console using console.log()
console.log(challenge);

//Question 3
//Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//Question 4
//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

//Question 5
//Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

//Question 6
//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.slice(0, 2));

//Question 7
//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
const sliceOut = "30 Days of JavaScript";
console.log(sliceOut.substring(3, 21));

//Question 8
//Check if the string contains a word Script using includes() method
const includeWord = "30 Days of JavaScript";
console.log(includeWord.includes("Script"));

//Question 9
//Split the string into an array using split() method
const jsChallenge = "30 Days of JavaScript";
console.log(jsChallenge.split());

//Question 10
//Split the string 30 Days Of JavaScript at the space using split() method
console.log(jsChallenge.split(""));

//Question 11
//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(" "));

//Question 12
//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
const replaceWord = "30 Days of JavaScript";
console.log(replaceWord.replace("JavaScript", "Python"));

//Question 13
//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
const characterCode = "30 Days of JavaScript";
console.log(characterCode.charAt(15));

//Question 14
//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
const characterIndex = "30 Days of JavaScript";
console.log(characterIndex.charCodeAt("J"));

//Question 15
//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
const determineIndex = "30 Days of JavaScript";
console.log(determineIndex.indexOf("a"));

//Question 16
//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
const determineLastIndex = "30 Days of JavaScript";
console.log(determineLastIndex.lastIndexOf("a"));

//Question 17
//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const newIndex =
  "You cannot end a sentence with because because because is a conjunction";
console.log(newIndex.indexOf("because"));

//Question 18
//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(newIndex.lastIndexOf("because"));

//Question 19
//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(newIndex.search("because"));

//Question 20
//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
const removeSpaces = " 30 Days of JavaScript";
console.log(removeSpaces.trim(""));

//Question 21
//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
const startMethod = "30 Days of JavaScript";
console.log(startMethod.startsWith("30"));

//Question 22
//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(startMethod.endsWith("JavaScript"));

//Question 23
//Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(startMethod.match("a"));

//Question 24
//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
const mergeWord = "30 Days of ";
console.log(mergeWord.concat("JavaScript"));

//Question 25
//Use repeat() method to print 30 Days Of JavaScript 2 times
const repeatWord = "30 Days of JavaScript";
console.log(repeatWord.repeat(2));

//Exercise: Level 2

//Question 1
//Using console.log() print out the following statement:
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

//Question 2
//Using console.log() print out the following quote by Mother Teresa:
console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);

//Question 3
//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
const num = "10";
const numToInt = +num;
console.log(numToInt);

//Question 4
//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
const checkNum = "9.8";
const numInt = +checkNum;
console.log(Math.ceil(numInt));

//Question 5
//Check if 'on' is found in both python and jargon
const checkString = "python";
const checkAnotherString = "jargon";
console.log(checkString.includes("on"));
console.log(checkAnotherString.includes("on"));

//Question 6
//I hope this course is not full of jargon. Check if jargon is in the sentence.
const checkJargon = "I hope this course is not full of jargon";
console.log(checkJargon.includes("jargon"));

//Question 7
//Generate a random number between 0 and 100 inclusively.
const randomNum = Math.floor(Math.random() * 100);
//I added the Math.floor method to do away with the float and make integers
console.log(randomNum);

//Question 8
//Generate a random number between 50 and 100 inclusively.
const randomNumber = Math.floor(Math.random() * 51) + 50;
console.log(randomNumber);

///Question 9
//Generate a random number between 0 and 255 inclusively.
const ranNum = Math.floor(Math.random() * 256);
console.log(ranNum);

//Question 10
//Access the 'JavaScript' string characters using a random number.
const givenWord = "JavaScript";
const newRandomWord = Math.floor(Math.random() * givenWord.length);
const genRanWord = givenWord[newRandomWord];
console.log(genRanWord);

//Question 11
//Use console.log() and escape characters to print the following pattern.
console.log("1\t1\t1\t1\t1");
console.log("2\t1\t2\t4\t8");
console.log("3\t1\t3\t9\t27");
console.log("4\t1\t4\t16\t64");
console.log("5\t1\t5\t25\t125");

//Question 12
//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
const sliceBeause =
  "You cannot end a sentence with because because because is a conjunction";
// console.log(sliceBeause.lastIndexOf("because"));
console.log(sliceBeause.substring(0, 31) + "is a conjunction");

//Exercises Level 3

//Question 1
//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
const loveWord =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
// console.log(loveWord.match("love"));
const checkLove = /love/gi;
console.log(loveWord.match(checkLove));

//Question 2
//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

const countWords =
  "You cannot end a sentence with because because because is a conjunction";
console.log(countWords.match("because"));

const countWordsTogether = /because/gi;
console.log(countWords.match(countWordsTogether));

//Question 3
//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
// const sentence =
//   "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
