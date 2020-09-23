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
// variables for lower and uppercase letters, numbers, and special characters. this is what the password will created from based the users choice.
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
// this function generates the password.
function generatePassword() {
  // prompt to get users choice for password length and the variable to store it in.
  var passwordLength = prompt(
    "Password Length? Choose a number between 8 and 128"
  );
  console.log(passwordLength);
  // conditional that alerts the user if they enter an invalid numbers. Then prompts the password length again.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number between 8 and 128.");
    var passwordLength = prompt(
      "Password Length? Choose a number between 8 and 128"
    );
  }
  // confirms if user wants lowercase letters included in their password and the variable to store it in.
  var lowercase = confirm("Do you wish to include lowercase letters?");
  console.log(lowercase);
  // confirms if user wants uppercase letters included in their password and the variable to store it in.
  var uppercase = confirm("Do you wish to include uppercase letters?");
  console.log(uppercase);
  // confirms if user wants numbers included in their password and the variable to store it in.
  var numbers = confirm("Do you wish to include numbers?");
  console.log(numbers);
  // confirms if user wants special characters included in their password and the variable to store it in.
  var specialCharacters = confirm("Do you wish to include special characters?");
  console.log(specialCharacters);
  // conditional that alerts the user that they must choose at least one character type. Then confirms lower and uppercase letters, numbers, and special characters again.
  if (
    lowercase === false &&
    uppercase === false &&
    numbers === false &&
    specialCharacters === false
  ) {
    alert("You must select at least one character type.");
    // confirms if user wants lowercase letters included in their password and the variable to store it in.
    var lowercase = confirm("Do you wish to include lowercase letters?");
    console.log(lowercase);
    // confirms if user wants uppercase letters included in their password and the variable to store it in.
    var uppercase = confirm("Do you wish to include uppercase letters?");
    console.log(uppercase);
    // confirms if user wants numbers included in their password and the variable to store it in.
    var numbers = confirm("Do you wish to include numbers?");
    console.log(numbers);
    // confirms if user wants special characters included in their password and the variable to store it in.
    var specialCharacters = confirm(
      "Do you wish to include special characters?"
    );
    console.log(specialCharacters);
  }
  // this variable holds user choices.
  var userChoice = [];
  // these conditions determines what character type is included in the password.
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

  console.log(userChoice);
  // this variable holds the new generate Password
  var randomPassword = "";
  // this for loop will create the password based on the users choices
  for (var i = 0; i < passwordLength; i++) {
    randomPassword =
      randomPassword +
      userChoice[Math.floor(Math.random() * userChoice.length)];
  }
  // finally this will return the random password to the page.
  return randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
