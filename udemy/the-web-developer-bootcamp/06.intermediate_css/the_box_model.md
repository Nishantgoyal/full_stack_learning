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

The type of box applied to an element is defined by *display* property values, and relates to the **outer** value of *display*

The full CSS Box model applies to block boxes. Inline boxes use only some of the behaviour defined in the box model.

## Parts of a box

- **Content box**
  - The area where content is displayed.
  - It can be sized using properties like `width` and `height`
- **Padding Box**
  - It sits aroung the content as a white space.
- **Border Box**
  - Wraps the content and any padding
- **Margin Box**
  - Outermost layer
  - wraps content, padding and border
  - whitespace between this box and other elements