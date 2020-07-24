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
- When we enable `strict mode` and we are not inside a declared object, then the value of the keyword `this` is undefined.

```js
console.log(this); // will represent the 'window' object
```

## Implicit/Object Context

- When the keyword 'this' is inside of a declared object, the value of the keyword 'this' is the closest parent object.
- strict mode does not make a difference here.

```js
var person = {
  firstName: "ellie", 
  sayHi: function() {
    return "Hi" + this.firstName;
  }
}
```

