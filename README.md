# password-generator

a simple website to generate random passwords based on the criteria of the user. 

## Description:

The website generates a password from either special character, upper case and small case letters and numbers. The password must meet the following criteria:

* Length of password
    * At least 8 characters but no more than 128.
* Character types
    * Lowercase
    * Uppercase
    * Numeric
    * Special characters ($@%&*, etc)
* Password must contain at least one character type (special character, small letters, large letters or numbers). <em>Preferably the password should contain more than one character type.</em>

## Installation

NA

## Usage

The user will be presented with a button {{generate password}}. When clicked, a series of prompts will be presented to the user to enter how many special characters, smallcase or uppercase letters or special character the user needs. The enteries must meet the above criteria in the description above. If the user enteries does not cooperate with the criteria or the generated password does not meet the criteria, the user will be presented with alert message describing the issue and a message "invalide password". Once, the password passes the checks, the password will be displayed in the box and written in the page.  

## Credit

function shuffle(myVar) line 128-138 in [/starter/script.js] accepts string as a variable and randomise the password after generation was obtained from <script src="https://gist.github.com/DieTapete/d76d855587c2f7abef7b.js"></script> by DieTapete.

## License

Please refer to the LICENSE in the repository.
