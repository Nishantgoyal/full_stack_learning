# JavaScript: The Tricky Stuff

## The keyword - 'this'

- A reserved keyword in Javascript
- Usually determined by how a function is called (the 'execution context')
- Can be determined using four rules
  - global
  - object/implicit
  - explicit
  - new

## Global Context

- when 'this' is not inside of a declared object, its value refers to the global object. 
- In the context of browsers, the global object is `window`, and `this` in global context means the `window` object.
- Every object one declares in the global context is attached to the window object

```js
console.log(this); // will represent the 'window' object
```

