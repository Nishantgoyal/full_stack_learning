# CSS Properties

## color

- Sets the foreground `color value` of an element's *text* and *text-decorations*
  - `text-decoration` refer to decoration lines on the text
- It also sets the `currentcolor` context

## background properties

### background-clip

- It sets whether an element's background extends underneath its border box, padding box, or content box
  - `background-clip: border-box;`
    - Extends to the outside edge of the border
  - `background-clip: padding-box;`
    - Extends to the outside edge of the padding. No background is drawn beneath the border.
  - `background-clip: content-box;`
    - The background is clipped to the content box
  - `background-clip: text;`
    - The background is painted withing the foreground text

### background

- sets all background style properties
  - background-color
  - background-image
  - background-origin
  - background-size
  - background-repeat
