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

### background-origin

- It sets the background's origin
  - `background-origin: border-box`
  - `background-origin: padding-box`
  - `background-origin: content-box`

### background-position

- It sets the initial position for each background image. (YES! There can be multiple background positions equal to number of images)
  - *keyword values*
    - `background-position: top;`
    - `background-position: bottom;`
    - `background-position: left;`
    - `background-position: right;`
    - `background-position: center;`
  - *percentage values*
    - `background-position: 25%;`
    - `background-position: 25% 30%;`
  - *length values*
    - `background-position: 2in 8em;`
    - `background-position: 2cm;`
  - *Edge offsets values*
    - `background-position: bottom 25% right 20px;`
    - `background-position: left 12% top;`
- **Syntax**
  - *1 - value*
    - keyword value, `<length>` or `<percentage>`
    - Other value is set to 50%
  - *2 - Value*
    - one value defines `X` and the other defines `Y`
  - *3 - Value*
    - first value is a keyword
      - if second is keyword, 3rd is a `<length>` or `<percentage>`  representing the offset for the 2nd value
      - if second is `<length>` or `<percentage>`, then it is the offset for the first value, and the 3rd value is keyword for the other axis
  - *4 - Value*
    - 1st and 3rd are keyword values, one for X-axis and other for Y-axis
    - 2nd and 4th values are `<length>` or `<percentage>`, as the offsets of the 1st and 3rd values respectively

### background-repeat

- It sets how background images are repeated
- A background image can be repeated along the horizontal and vertical axis, or not repeated at all
- **Syntax**
  - *Kerword Values*
    - `background-repeat: repeat-x`
    - `background-repeat: repeat-y`
    - `background-repeat: repeat`
    - `background-repeat: space`
    - `background-repeat: round`
    - `background-repeat: no-repeat`
  - *Two-value syntax: horizontal | vertical*
    - `background-repeat: repeat space`
- The one value syntax is a shorthand for two value syntax
- *repeat*
  - The image is repeated as much as needed to cover the whole background. The last image will be clipped if it doesn't fit.
- *space*
  - The image is repeated as much as possible without clipping
  - The first and last images are pinned to each side of the element
  - Whitespace is distributed evenly between the images
- *round*
  - The repeated images will stretch until there is room (>half of image width) for another one to be added
  - When the next one is added all the current ones compress to allow room
- *no-repeat*
  - The image is not repeated
  - Position is determined by the `background-position` CSS property

### background-size

- It set's the size of the element's background image
- **Syntax**
  - *Keyword Values*
    - `background-size: cover`
      - Scales the image as large as possible without stretching the image
      - The image is cropped, if the proportions differ from the element
    - `background-size: contain`
      - Scales the image as large as possible without cropping or stretching the image and then repeats
  - *One Value Syntax* - the width of the image. Height becomes `auto`
    - `background-size: 50%`
    - `background-size: 3.2em`
    - `background-size: 12px`
    - `background-size: auto`
  - *Two Value Syntax* - first value: width, second value: height
    - `background-size: 50% auto`

### background

- sets all background style properties
  - background-clip
  - background-color
  - background-image
  - background-origin
  - background-size
  - background-repeat
