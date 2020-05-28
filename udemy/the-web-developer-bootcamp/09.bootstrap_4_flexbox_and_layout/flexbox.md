# Flexbox

It is a one-dimensional layout method for laying out items in rows or columns.

Items flex to fill additional space and shrink to fit into smaller spaces.

## Flexible Boxes

- Elements need to be selected to be laid out as flexible boxes.
- `display: flex` is used to set an element as a flex container
- All child element inside the flex container will be layed out in `flex` way

```css
element {
    display: flex;
}
```

## Flex Model

When elements are laid out in flexible boxes, they are laid out along two axes:

- **main axis**
  - Axis running in the direction the flex items are being laid out in.
  - The start and end od the axis are called *main start* and *main end*.
- **cross axis**
  - It is the perpendicular axis to the direction the flex items are being laid out in.
  - The start and end of the axis are called the *cross start* and *cross end*

The parent element that has `display: flex;` set on it is called the *flex container*

The items being laid out as flexible boxes inside the flex container are called flex items

## Flex Direction

Flexbox provides a property called *flex-direction* that specifies what direction the main axis runs in, which by default is set to `row`.

To make column layout, add `flex-direction: column;` to the flex container.

Other possible values are:

- `row-reverse`
- `column-reverse`

## Flex Wrapping

The flexbox children can overflow their container, breaking the layout. To wrap the flex items, set the property `flex-wrap: wrap` in the flexbox-container.
