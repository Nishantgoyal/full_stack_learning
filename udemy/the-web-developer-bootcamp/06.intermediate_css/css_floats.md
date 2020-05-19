# CSS Float

It places an element on the left or right side of a container, allowing text and inline elements to wrap around it.

`float` implies the use of the `block layout`

Possible Values:

- left
- right
- none
- inline-start
  - float on the start side of the containing block.
- inline-end

The floated element is taken out of the normal flow of the document. It is shifted to the left (or right), until it touches the edge of its containing box, or another floating element.

To force an item to move below any floated element, we can use `clear` CSS property.
