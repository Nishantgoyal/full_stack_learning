# JavaScript Basics

## Primitives

In JavaScript, a primitive is data that is not an object and has no methods. Primitives are immutable, i.e., they cannot be altered.

### Types of Primitives

- string
  - Single or Double quotes
  - Concatenation using `+` operator
  - Escape character using `\`
  - Length property: `"grape".length`
  - Access individual characters using `[]` and an index
- number
- bigint
- boolean
- undefined
  - Variables that are declared but not initialized
  - "null" - explicitely undefined.
- symbol

## Variables

The `var` statement declares a variable, optionally initializing it to a value. Variables are dynamic typed.  

**Syntax:**  

`var varname1 [= value1] [, varname2 [= value2] ... [, varnameN [= valueN]]];`

```js
var var_name = "value";
var var_2;
```
