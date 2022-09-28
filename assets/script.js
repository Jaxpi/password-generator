var input;
var confirmNumber;
var confirmSpecial;
var confirmUppercase;
var confirmLowercase;

special = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var generate = document.querySelector("#generate");

generate.addEventListener("click", function () {
    gp = generatePassword();
    document.getElementById("password").textContent = gp;
});

var selections;

function getInputLength() {
    input = parseInt(prompt("Password length? (From 8 to 128)"));
    if (!input) {
        alert("You need to choose a number from 8-128");
        getInputLength();
    } else if (input < 8 || input > 128) {
        input = parseInt(prompt("Your number must be from 8 to 128"));
        getInputLength();
    }
}

function getSelections() {
    confirmSpecial = confirm("Include special characters? (OK for yes, Cancel for no)");
    confirmNumber = confirm("Include numbers? (OK for yes, Cancel for no)");
    confirmLowercase = confirm("Include lowercase letters? (OK for yes, Cancel for no)");
    confirmUppercase = confirm("Include uppercase letters? (OK for yes, Cancel for no)");
    //None selected
    if (!confirmSpecial && !confirmNumber && !confirmLowercase && !confirmUppercase) {
        selections = alert("Choose at least one option - Tip: more selections means more secure!");
        getSelections();
    }
}

function generatePassword() {
    getInputLength();     
    getSelections();

// All selected
if (confirmSpecial && confirmNumber && confirmLowercase && confirmUppercase) {

    selections = special.concat(number, lowercase, uppercase);
}
// Three selected
else if (confirmSpecial && confirmNumber && confirmUppercase) {
    selections = special.concat(number, uppercase);
}
else if (confirmSpecial && confirmNumber && confirmLowercase) {
    selections = special.concat(number, lowercase);
}
else if (confirmSpecial && confirmLowercase && confirmUppercase) {
    selections = special.concat(lowercase, uppercase);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
    selections = number.concat(lowercase, uppercase);
}
// Two selected 
else if (confirmSpecial && confirmNumber) {
    selections = special.concat(number);

} else if (confirmSpecial && confirmLowercase) {
    selections = special.concat(lowercase);

} else if (confirmSpecial && confirmUppercase) {
    selections = special.concat(uppercase);
}
else if (confirmLowercase && confirmNumber) {
    selections = lowercase.concat(number);

} else if (confirmLowercase && confirmUppercase) {
    selections = lowercase.concat(uppercase);

} else if (confirmNumber && confirmUppercase) {
    selections = number.concat(uppercase);
}
// One selected
else if (confirmSpecial) {
    selections = special;
}
else if (confirmNumber) {
    selections = number;
}
else if (confirmLowercase) {
    selections = lowercase;
}
else if (confirmUppercase) {
    selections = uppercase;
}

var password = []; 
    var count = 0;
    while (input >= count) {
        if (confirmSpecial) {
            password.push(special[Math.floor(Math.random() * special.length)]);
            count = count + 1;
            if (input == count) {
            break;
            }
        }
        if (confirmNumber) {
            password.push(number[Math.floor(Math.random() * number.length)]);
            count = count + 1;
            if (input == count) {
            break;
            }
        }
        if (confirmLowercase) {
            password.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
            count = count + 1;
            if (input == count) {
            break;
            }
        }
        if (confirmUppercase) {
            password.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
            count = count + 1;
            if (input == count) {
            break;
            }
        }
    }
    var gp = password.join("");
    return gp;
}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});

function copyPassword() {
    var cpw = document.getElementById("password").value;
    navigator.clipboard.writeText(cpw);
    alert("Password copied to clipboard!");
}
//I have ensured that each criterion selected was included in the generated password, but was only able to do it with them being generated in a repetitive order. I would try to create a new code to randomize these in a future release.