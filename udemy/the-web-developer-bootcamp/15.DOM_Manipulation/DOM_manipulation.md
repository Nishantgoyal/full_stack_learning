# DOM Manipulation

- changing an element's style
- adding/removing classes
- changing the content of a tag
- changing attributes (src, href, ...)

## `style` property

It is a way to manipulate an element's style.

```js
var tag = document.querySelector("#special");

tag.style.color = "red";
tag.style.border = "10px solid red";
// ...
```

## `classList` property

It is a read-only list that contains the classes for a given element.It can be used to toggle a CSS class `on` or `off` with javascript.

```css
.highlight {
    color:blue;
    border: 10px solid red;
}
```

```js
var tag = document.querySelector("h1");
tag.classList.add("highlight");
tag.classList.remove("highlight");
tag.classList.toggle("highlight");
```

## `textContent` property

It returns a string of all the text contained in a given element.

```js
var tag = document.querySelector("h1");

tag.textContent = "Modified Heading";
```

## `innerHTML` property

```js
var tag = document.querySelector("h1");

tag.innerHTML = "<strong>Better</strong> Modified Heading";
```

## Attributes

Use `getAttribute()` and `setAttribute()` to read and write attributes of an element.

```js
var link = document.querySelector("a");
link.getAttribute("href");
link.setAttribute("href", "www....");
```
