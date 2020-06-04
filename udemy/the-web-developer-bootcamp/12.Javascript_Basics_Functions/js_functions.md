# Javascript Functions

Functions let us wrap bits of code up into REUSABLE packages.

Functions can take (multiple) arguments as a way of accepting inputs.

If an argument is not provided while calling the function, JS will ***NOT*** throw an error, and instead the argument will be undefined in the implementation of the function.

The keyword `return` is used to return something from the function. By default, any function returns `undefined`

There are two syntax for creating functions.

- function declaration
  - It defines a named function variable without requiring variable assignment.
  - Occur as standalone constructs and cannot be nested within non-function blocks.
  - These get **`HOISTED`**
- function expression
  - It defines a function as part of a larger expression syntax.
  - More versatile

```js

// function declaration
function function_name(arg1, arg2,..) {
    // ...
    return // ...
}

// function expression -- anonymous
var var_name = function(arg1, arg2,..) {
    // ...
    return // ...
}

// function expression -- named
var var_name = function function_name(arg1, arg2,..) {
    // ...
    return // ...
}

// function expression -- self-invoking
(function(arg1, arg2,..) {
    // ...
    return // ...
})();
```
