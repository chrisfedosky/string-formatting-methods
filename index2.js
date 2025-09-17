/* How Can You Trim Whitespace from a String?

When working with strings in JavaScript, it's common to encounter unwanted whitespace at the beginning or end of a string. Whitespace can interfere with operations like comparison, storage, or display, which is why it's important to know how to remove it efficiently.

In this lecture, we'll explore how you can trim whitespace using JavaScript's trim(), trimStart(), and trimEnd() methods.

Whitespace refers to spaces, tabs, or line breaks that occur in a string but are not visible characters. For example:*/

let greeting = "  Hello, world!   ";

/* In this case, there are spaces before and after the visible text, Hello, world!.

The trim() method is the most commonly used way to remove whitespace from both the beginning and the end of a string. Here's an example:*/

let message = "    Hello!   ";
let trimmedMessage = message.trim();

console.log(trimmedMessage);

/* In this case, the trim() method removes all the leading and trailing spaces, leaving just Hello!. Note that any whitespace within the string (between words, for example) is left untouched by trim().

Sometimes, you may only want to remove whitespace from either the beginning or the end of a string, but not both. This is where trimStart() and trimEnd() come in.

trimStart() removes whitespace from the beginning (or start) of the string. */

let greeting5 = "  Hello!  ";
let trimmedStart = greeting5.trimStart();

console.log(trimmedStart);

/* trimEnd() removes whitespace from the end of the string.*/

let greeting6 = "  Hello!  ";
let trimmedEnd = greeting6.trimEnd();

console.log(trimmedEnd);

/* These methods give you more precise control over which part of the string you want to clean up.

In summary, trimming whitespace is an essential part of working with strings in JavaScript. Whether you want to clean up input data or ensure consistent string comparisons, you can use trim() to remove whitespace from both sides of a string, or use trimStart() and trimEnd() to target specific sides. */

