"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function palindrome(input) {
    var cleaned = input.replace(/\s/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}
// Example usage
var testString = "A man a plan a canal Panama";
if (palindrome(testString)) {
    console.log("".concat(testString, " is a palindrome."));
}
else {
    console.log("".concat(testString, " is not a palindrome."));
}
