# Get Programming with JavaScript Next

    https://www.manning.com/books/get-programming-with-javascript-next
    https://github.com/jisaacks/get-programming-jsnext

## Lesson 3. Bundling modules with Browserify

    browserify src/index.ts -p [ tsify --noImplicitAny ] > dist/bundle.js

## Unit 1. Variables and strings

### Lesson 4. Declaring variables with let

    * Variables declared with let use block scope.
    * Block scope means the variable is only in scope within its containing block.
    * Variables declared with var use function scope.
    * Function scope means the variable is in scope within its entire containing function.
    * Unlike var variables, let variables can’t be referenced before they are declared.

    The concat method on strings does’t modify the existing string or
    reassign the variable containing it: it simply returns a new string

### Lesson 5. Declaring constants with const

    The splice() method changes the contents of an array by removing or
    replacing existing elements and/or adding new elements.

        ```JavaScript
        array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

        months.splice(1, 0, 'Feb');                     // Insert
        items.splice(items.indexOf(...), 1);            // Delete
        items.splice(0, items.length);                  // Clear
        ```

### Lesson 6. New string methods

        ```JavaScript
        String.prototype.startsWith
        String.prototype.endsWith
        String.prototype.includes
        String.prototype.repeat
        String.prototype.padStart
        String.prototype.padEnd
        ```

Summary:


    String methods:

Terms:

    IIFE: Immediately Invoked Function Expression