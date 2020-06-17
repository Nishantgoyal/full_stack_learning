# jQuery

- DOM manipulation library
- It comes with a bunch of useful methods to things like:
  - Select Elements
  - Manipulate elements
  - Create Elements
  - Add event listeners
  - Animate elements
  - Add effects
  - Make HTTP Requests (AJAX)

## jQuery Selectors

- `$("selector goes here")`
- Similar to `document.querySelectorAll()`
- E.g.:
  - `$("img")`
  - `${".sale"}`

## jQuery Methods

- val()
- text()
- attr()
- html()
- addClass()
- removeClass()
- toggleClass()

### Manipulating Styles

- `.css` method is jQuery's interface to styling
- It can be used to modify a single property, or multiple properties at once
- It will apply the style to all the elements

```js
$(selector).css(property, value);

// Multiple properties
var styles = {
    backgroundColor: "pink",
    fontWeight: "bold"
};
$(selector).css(styles);
```
