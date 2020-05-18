# CSS Fonts

## -> font-size

It sets the size of the font.

It is also used to compute the size of `em`, `ex`, and other relative **length** units.

### Syntax

#### absolute-size values

- `font-size: xx-small;`
- `font-size: x-small;`
- `font-size: small;`
- `font-size: medium;`
- `font-size: large;`
- `font-size: x-large;`
- `font-size: xx-large;`
- `font-size: xxx-large;`

#### relative-size values

- `font-size: smaller;`
- `font-size: larger;`

#### length values

- `font-size: 12px;`
- `font-size: 0.8em;`

#### percentage values

- `font-size: 80%;`

### Length Units

- **Pixels**
  - Good choice when pixel accuracy is required
  - static
- **Ems**
  - Dynamic
  - `1em` is equal to the font size of the parent element
  - The value of `em` is essentially a multiplier of the `current em size`.
  - The `em` values **compound**
- **Rems**
  - Invented to sidestep the compounding problem in `ems`
  - `rem` is related to the root `html` element.

## -> font-family

It specifies a prioritized list of one or more font-family names and/or generic family names.

Values are seperated by commas to indicate that they are alternatives.

The browser will select the first-font that is available or that can be downloaded using the `@font-face` rule.

One generic-font family is recommended to be included, in the case none of the specified font-families are available on the client side.

## -> font

It is a shorthand for:

- font-style (Mandatory)
- font-family (Mandatory)
- font-style
  - whether a font should be styled with a normal, italic, or oblique face
- font-variant
  - normal or small-caps
- font-weight
  - sets the weight (or boldness) of the font
- font-stretch
  - It selects a normal, condensed, or expanded face from a font
  - must be a single value keyword
- line-height
  - sets the height of a line box

The Syntax of specifying font shorthand is as follows:

- `font-style`, `font-variant` and `font-wieght` must precede `font-size`
- `line-height` must immediately follow `font-size`, preceded by a `'/'`, e.g., `16px/3`
- `font-family` must be the last value specified