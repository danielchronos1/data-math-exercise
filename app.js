//Request a three-digit number from a user and check whether it has identical digits in it.

let checkThreeDigit = prompt("Enter a three-digit number:");

if (checkThreeDigit.length !== 3 || isNaN(checkThreeDigit)) {
  console.log("Invalid input. Please enter a valid three-digit number.");
} else if (checkThreeDigit[0] === checkThreeDigit[1] && checkThreeDigit[1] === checkThreeDigit[2]) {
  console.log("The number has identical digits.");
} else {
  console.log("The number does not have identical digits.");
}

//Request a five-unit number from a user and check whether it is a palindrome.

const number = prompt("Enter a five-digit number:");

if (number.length !== 5) {
  console.log("Invalid input. Please enter a five-digit number.");
} else {
  const isPalindrome = number[0] === number[4] && number[1] === number[3];

  if (isPalindrome) {
    console.log(number + " is a palindrome.");
  } else {
    console.log(number + " is not a palindrome.");
  }
}

//Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result. 

const amount = prompt('Enter the amount in USD:');
const currency = prompt('Choose a currency (EUR, SEK, AUD, etc.):');

let convertedAmount;
switch (currency) {
  case 'EUR':
    convertedAmount = amount * 0.91;
    break;
  case 'SEK':
    convertedAmount = amount * 10.64;
    break;
  case 'AUD':
    convertedAmount = amount * 1.45;
    break;
  default:
    console.log('Currency not supported');
    break;
}

const result = convertedAmount.toFixed(2); 
console.log(`Result: ${result}`);

//Request a length of a circumference and a perimeter of a square from a user. Define whether that circumference can fit in that square

const circumference = parseFloat(prompt('Enter the length of the circumference:'));
const perimeter = parseFloat(prompt('Enter the perimeter of the square:'));

const radius = circumference / (2 * Math.PI);
const sideLength = perimeter / 4;

if (radius <= sideLength / 2) {
  console.log('The circumference can fit within the square.');
} else {
  console.log('The circumference cannot fit within the square.');
}

//Request a date (dd:mm:yy) and put out the one that goes after it. Pay attention to the start of a new month, new year, and also leap years.

let day = parseInt(prompt("Enter the day:"));
let month = parseInt(prompt("Enter the month:"));
let year = parseInt(prompt("Enter the year:"));

if (day < 1 || month < 1 || year < 0) {
  throw new Error('Invalid date');
}

let isLeapYear = year % 4 === 0;
let dayLimit;

if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10) {
  dayLimit = 31;
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  dayLimit = 30;
} else if (month === 2) {
  dayLimit = isLeapYear ? 29 : 28;
} else if (month === 12) {
  dayLimit = 31;
  if (day > dayLimit) {
    throw new Error('Day is bigger than 31 days!');
  }
  if (day === dayLimit) {
    day = 1;
    month = 1;
    year++;
  }
} else {
  throw new Error('Invalid month number!');
}

if (day > dayLimit) {
  throw new Error(`Day is bigger than ${dayLimit} days!`);
}
if (day === dayLimit) {
  day = 1;
  month++;
}

const formattedDate = `${day < 10 ? '0' + day : day}:${month < 10 ? '0' + month : month}:${year}`;
console.log(formattedDate);
