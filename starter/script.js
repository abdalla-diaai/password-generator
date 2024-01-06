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
    var charOptions = Number(prompt("How many characters do you need?"));
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

// Function to check the password options to confirm essential criteria
function checkPassWordOptions(obj) {
    var check = 0;
    for (let value of Object.values(obj)) {
        if (value == 0) {
            check += 1;
        }
    }
    if (check == 4) {
        return false;
    }
    else {
        return true;
    }
}

// function to shuffle password after generation
function shuffle(myString) {
    var a = myString.split(''),
        n = a.length;
    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join('');
}

// Function to generate password with user input
function generatePassword() {
    var passwordOptions = getPasswordOptions();
    // validate options, at least one type character, chosen for password
    if (checkPassWordOptions(passwordOptions)) {
        var passWord = "";
        for (const [key, value] of Object.entries(passwordOptions)) {
            if (key == "numOptions") {
                for (var i = 0; i < value; i++) {
                    passWord += getRandom(numericCharacters);
                }
            }
            if (key == "charOptions") {
                for (var i = 0; i < value; i++) {
                    passWord += getRandom(specialCharacters);
                }
            }
            if (key == "upperOptions") {
                for (var i = 0; i < value; i++) {
                    passWord += getRandom(upperCasedCharacters);
                }
            }
            if (key == "smallOptions") {
                for (var i = 0; i < value; i++) {
                    passWord += getRandom(lowerCasedCharacters);
                }
            }
        }
        // final check for password -- pass
        if (passWord.length > 8 && passWord.length < 128) {
            return shuffle(passWord);
        }
        // alert for no pass password
        else {
            alert("Password must be at least 8 characters but no more than 128.");
            return "Invalid Password.";
        }
    }
    // error message for no characters chosen
    else {
        alert("At least one character type should be selected.");
        return "Invalid Password.";
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


