"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fizzBuzz(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
// print FizzBuzz for numbers 1 to 15
fizzBuzz(15);
