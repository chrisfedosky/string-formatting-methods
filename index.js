/* When working with strings in JavaScript, there are many situations where you might need to adjust the case of the text, such as transforming all letters to uppercase for a heading or converting text to lowercase for uniformity.

Luckily, JavaScript makes this easy with two built-in methods: toUpperCase() and toLowerCase().

The toUpperCase() method converts all the characters to uppercase letters and returns a new string with all uppercase characters. This is useful when you want to emphasize text or create consistency in the format of strings.

Let's see an example: */

let greeting = "Hello, World!";
let uppercaseGreeting = greeting.toUpperCase();

console.log(uppercaseGreeting);

/* In this code, the toUpperCase() method transforms the entire string into uppercase letters.

The original string remains unchanged because toUpperCase() returns a new string, rather than modifying the original one.

On the flip side, the toLowerCase() method converts all characters in a string to lowercase. This is helpful when you need to standardize input, such as when comparing user-provided text or making case-insensitive checks.

Let's look at an example:*/

let shout = "I AM LEARNING JAVASCRIPT!";
let lowercaseShout = shout.toLowerCase()

console.log(lowercaseShout);

/* The toLowerCase() method converts all characters to lowercase, making the string less aggressive, while leaving the original string unchanged.

In summary, the toUpperCase() and toLowerCase() methods in JavaScript are powerful tools for transforming strings into all uppercase or lowercase letters.

These methods are particularly useful for standardizing text input, making case-insensitive comparisons, and ensuring design consistency.

With these simple yet effective methods, you can handle text manipulation in a more controlled and predictable way.
*/

