const passwordField = document.getElementById("password");
const lengthField = document.getElementById("length");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const strength = document.getElementById("strength");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+";

function generatePassword(){
    let char = "";

    if(uppercase.checked) chars += upperChars;
    if(lowercase)
}