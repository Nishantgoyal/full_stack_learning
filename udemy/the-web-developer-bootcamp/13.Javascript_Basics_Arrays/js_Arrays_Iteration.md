# Array Iteration

## For loop

```js
var arr = [1, 2, 3, 4];
for (var i = 0;i < arr.length; i++) {
    console.log(arr[i]);
}
```

## forEach loop

It executes the provided function, once for each array element.

- **Syntax**:
  - `arr.forEach(callback(currentValue [, index [, array]]) [, thisArg])`
- Parameters
  - `callback`: Function to execute on each element
    - `currentValue`: The current value element being processed in the array
    - `index`: The index current value in the array
    - `array`: The array `forEach` was called upon
  - `thisArg`: Value to use as `this` when executing callback

```js
var arr = [1, 2, 3, 4];
arr.forEach(function(ele) {
    console.log(ele);
})

// Printing square
var arr = [1, 2, 3, 4];
function square(num) {
    console.log("Square: " + (num * num));
}
arr.forEach(square);
// Output
// Square: 1
// Square: 4
// Square: 9
// Square: 16
```
