# Javascript Arrays

Array is a collection of items (can be of different type). They are indexed starting at 0.

```js
var arr = [ele1, ele2, ..., eleN];
// Accessing ele4
console.log(arr[3]); // 4th element is at index 3
// To add element
arr[x] = eleX; // it will add or update the element at index x, and extend the size of the array if required.

// Defining array
var arr = [];
var arr = new Array(); // uncommon
```

## Methods

### Push

Adds an element to the end of the array

```js
var arr = [1];
arr.push(2);
arr.push(4);
```

### Pop

Remove and return the last element in an array

```js
var arr = [1, 2, 3]
ele = arr.pop() // returns 3
```

### Shift

Removes the first item from the array

```js
var arr = [1, 2, 3]
ele = arr.shift() // returns 1
```

### Un-Shift

Adds an item to the front of the array

```js
var arr = [1, 2, 3]
arr.unshift(4) // arr - [4,1,2,3]
```

### indexOf

find the  first index of an item in an array and return. Returns `-1` if element is not present.

```js
var arr = [1, 2, 3]
index_of_3 = arr.indexOf(3) // returns 3
```

### Slice

Copies parts of an array. Can also be used to copy the entire array using no arguments: `slice()`.

```js
var arr = [1, 2, 3, 4, 5]
var arr_2 = arr.slice(2,4) // arr_2 - [3, 4]
```
