# CSS Box Model

In CSS we broadly have two types of boxes

- **block boxes**
  - breaks into a new line
  - extends in the inline direction to fill space available in its container.
  - respects the `width` and `height` property
  - `Padding`, `margin` and `border` cause other elements to be pushed away from the box.
- **inline boxes**
  - Do not break into a new line.
  - `width` and `height` property do not apply
  - Vertical padding, margins and borders will apply, but will not cause other inline elements to move away from the box.
  - Horizontal padding, margins and borders will cause other inline elements to move away from the box.
