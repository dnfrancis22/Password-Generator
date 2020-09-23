// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```
// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseLetter = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numerals = "0123456789";
var specialChar = "!@#$%^&*()_";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = prompt("how long should your password be?");
console.log(passwordLength);
if (passwordLength < 8 || passwordLength > 128) {
  alert("Please choose a number between 8 and 128.");
}
var lowercase = confirm("Do you wish to include lowercase letters?");
console.log(lowercase);

var uppercase = confirm("Do you wish to include uppercase letters?");
console.log(uppercase);

var numbers = confirm("Do you wish to include numbers?");
console.log(numbers);

var specialCharacters = confirm("Do you wish to include special characters?");
console.log(specialCharacters);
if (
  lowercase === false &&
  uppercase === false &&
  numbers === false &&
  specialCharacters === false
) {
  alert("You must select at least one character type.");
}

var userChoice = []

if (lowercase === true) {
  userChoice += lowercaseLetter;
}
if (uppercase === true) {
  userChoice += uppercaseLetter;
}
if (numbers === true) {
  userChoice += numerals;
}
if (specialCharacters === true) {
  userChoice += specialChar;
}

console.log (userChoice);

var randomPassword = ""
 

for (var i = 0; i < passwordLength; i++) {
  randomPassword = randomPassword + userChoice[Math.floor(Math.random() * userChoice.length)]; 
}



return randomPassword;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
