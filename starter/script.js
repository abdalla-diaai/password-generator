// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);


// Function to prompt user for password options
function getPasswordOptions() {
    var optionsArr = {
        "numOptions": 0,
        "charOptions": 0,
        "upperOptions": 0,
        "smallOptions": 0,
    };

    optionsArr.numOptions = Number(prompt("How many numbers do you need?"));
    optionsArr.charOptions = Number(prompt("How many characters do you need?"));
    optionsArr.upperOptions = Number(prompt("How many capital letters do you need?"));
    optionsArr.smallOptions = Number(prompt("How many small letters do you need?"));
    if (sumValues(optionsArr) < 8 || sumValues(optionsArr) > 128) {
        alert("number of characters must be more than 8 and no more than 128.");
    }
    else {
        return optionsArr;
    }
};
// console.log(getPasswordOptions())

// Function for getting a random element from an array
function getRandom(arr) {
var randomIndex = Math.floor(Math.random() * arr.length);
return arr[randomIndex];
};


// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);