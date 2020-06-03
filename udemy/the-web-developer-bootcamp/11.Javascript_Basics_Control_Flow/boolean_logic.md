# Boolean Logic

- Statements that evaluate to `true` or `false`

## Comparison Operators

- `>, >=, <, <=, ==, !=, ===, !===`

### Triple Equal

- This equates both the value and the type
- `===` does not perform `type coercion`
- *Rule of Thumb*: Always use `===`

```js
var x = 5;
console.log(x == "5") // True
console.log(x === "5") // False
```

## Logical Operators

| Operator | Name | Example `(x = 5, y = 9)` | Result |
| -------- | ---- | ------------------------ | ------ |
| `&&`     | AND  | `x < 10 && x !== 5`      | false  |
| `||`     | OR   | `y > 9 || x === 5`       | true   |
| `!`      | NOT  | `!(x === y)`             | true   |

## Truthy or Falsy

- Falsy:
  1. `""` (Empty String) is Falsy
  2. null
  3. 0
  4. NaN
  5. undefined
  6. false
- True:
  - Everything else
