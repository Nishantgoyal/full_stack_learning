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
