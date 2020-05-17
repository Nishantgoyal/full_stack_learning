# CSS Basics

- `CSS` stands for **Cascading Style Sheets**
- Considered the `adjective` of front end

## The General Rule

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

## CSS Colors

- named colors
  - 147 named colors
- `Hexadecimal`
  - String of 6 hexadecimal numbers
  - `#34F41E`
- `RGB`
  - different channels for the three colors
  - each channel from `[0-255]`
  - Syntax: `rgb(32,43,54)`
- `RGBA`
  - 4th channel (alpha) for transparency
  - alpha channel ranges from `[0-1]`
  - Syntax: `rgb(32,43,54, 0.5)`
