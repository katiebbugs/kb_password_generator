// Assignment code here
    var generatePassword = function() {
    // questions
        var length = prompt("Choose password length, must be a number between 8 and 128");
            if (length > 8 && length < 128) {
                var numbers = confirm("Would you like to include numbers in your password?");

                var lowercase = confirm("Would you like to include lowercase letters in your password?");

                var uppercase = confirm("Would you like to include uppercase letters in your password?");

                var special = confirm("Would you like to include special characters in your password?");

            } else if (length == null || length == "") {
                alert("Goodbye")
                return;

            } else if (length < 8 || length > 128) {
                alert("Incorrect Length")
                return;
            };
        console.log(length);
        console.log(numbers);
        console.log(lowercase);
        console.log(uppercase);
        console.log(special);
        
    // logging character answers
        if (numbers == true) {
            numbers = '0123456789';
        } else {numbers = ""};
        console.log(numbers);

        if (lowercase == true) {
            lowercase= 'abcdefghijklmnopqrstuvwxyz';
        } else {lowercase= ""};
        console.log(lowercase);

        if (uppercase == true) {
            uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        } else {uppercase = ""};
        console.log(uppercase);

        if (special == true) {
            special = '!#$%&()*+,-./:;<=>?@[]^_{|}~';
        } else {special = ""};
        console.log(special);

        var characters = (numbers + lowercase + uppercase + special);
        console.log(characters);

    // math to generate random password
        var pass = "";
        for (var i = 0; i < length; ++i) {
            pass += characters.charAt(Math.floor(Math.random() * characters.length));
        };
        console.log(pass);

    // return random password
        return pass;
    }

// Get references to the #generate element
    var generateBtn = document.querySelector("#generate");

// Write password to the #password input
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

    }

// Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
