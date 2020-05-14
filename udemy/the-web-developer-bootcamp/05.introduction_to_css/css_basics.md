# CSS Basics

- `CSS` stands for **Cascading Style Sheets**
- Considered the `adjective` of front end

## The General Rule

- The selectors are of following types:
  - **Type Selector**
    - Syntax: `elementname`
    - e.g., *h1 {}, p {}...*
  - **Class Selector**
    - Syntax: `.classname`
    - e.g., *.cities*
  - **ID Selector**
    - Syntax: `#idname`
    - e.g., *#toc*
  - **Attribute Selector**
    - Select all elements that have the given attribute
    - Syntax: `[attr] [attr=value] [attr~=value] [attr|=value] [attr^=value] [attr$=value] [attr*=value]`

```css
selector {
    property: value;
    anotherProperty: anotherValue;
}
```

## CSS Placement

- Inline Styles
  - `<h3 style="color:pink;">hello</h3>`
- Style Tag
  - Present in the head portion of the html
  - `<style type="text/css">h1{color: pink;}</style>`
- External Stylesheets
  - Connected using a `link` tag inside the head
