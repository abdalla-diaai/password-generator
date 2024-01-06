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

// Function to prompt user for password options
function getPasswordOptions() {
    var numOptions = Number(prompt("How many numbers do you need?"));
    var charOptions = Number(prompt("How many special characters do you need?"));
    var upperOptions = Number(prompt("How many capital letters do you need?"));
    var smallOptions = Number(prompt("How many small letters do you need?"));
    return { numOptions, charOptions, upperOptions, smallOptions };
};

// Function for getting a random element from an array
// Function gets first random index then returnning corresponding element from array
function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

// Function to check the password options to confirm essential criteria and return two output, number of character type (check) and boolean true (at least one character type) or false (no character type selected)
function checkPassWordOptions(obj) {
    var check = 0;
    for (let value of Object.values(obj)) {
        if (value == 0) {
            check += 1;
        }
    }
    if (check === 4) {
        return false;
    }
    else {
        return {
            pass: true,
            inputOptions: check,
        }

    }
}

// Function to shuffle password after generation
function shuffle(myString) {
    var myStringSplit = myString.split(''),
        myStringLength = myStringSplit.length;
    for (var i = myStringLength - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = myStringSplit[i];
        myStringSplit[i] = myStringSplit[j];
        myStringSplit[j] = tmp;
    }
    return myStringSplit.join('');
}

// Function to iterate through password options object (obj) and return password according to corresponding number of characters
function getPassword(obj) {
    var passwordOptions = "";
    for (const [key, value] of Object.entries(obj)) {
        if (value > 0) {
            if (key == "numOptions") {
                for (var i = 0; i < value; i++) {
                    passwordOptions += getRandom(numericCharacters);
                }
            }
            if (key == "charOptions") {
                for (var i = 0; i < value; i++) {
                    passwordOptions += getRandom(specialCharacters);
                }
            }
            if (key == "upperOptions") {
                for (var i = 0; i < value; i++) {
                    passwordOptions += getRandom(upperCasedCharacters);
                }
            }
            if (key == "smallOptions") {
                for (var i = 0; i < value; i++) {
                    passwordOptions += getRandom(lowerCasedCharacters);
                }
            }
        }
    }
    return passwordOptions;
}

// Function to generate password with user input
function generatePassword() {
    var passwordOptions = getPasswordOptions();
    var optionsCheck = checkPassWordOptions(passwordOptions).pass;
    var optionsNumber = checkPassWordOptions(passwordOptions).inputOptions
    // validate options, at least one type character, chosen for password
    if (optionsCheck) {
        var passWord = getPassword(passwordOptions);
        // final check for password -- pass
        if (passWord.length >= 8 && passWord.length < 128) {
            if (optionsNumber === 3) {
                alert("It is recommended to have a password with more than one character type.");
                return shuffle(passWord);
            }
            return shuffle(passWord);
        }
        // alert for no pass password
        else {
            alert("Password must be at least 8 characters but no more than 128.");
            return "Password length is not accepted.";
        }
    }
    // error message for no character type chosen
    else {
        alert("At least one character type should be selected.");
        return "Password must contain at least one character type.";
    }

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


