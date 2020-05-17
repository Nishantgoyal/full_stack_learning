# CSS Cascade and Inheritance

Some of the most fundamental concepts in CSS are:

- Cascade
- Specificity
- Inheritance

These control how CSS is applied to HTML and how conflicts are resolved.

## CASCADE

The order of the CSS rules matter.

When two rules apply, that have equal `specificity` the one that comes last in the CSS is the one that is applied.

## Specificity

It is how the browser decides which rule applies if multiple rules have different selectors, but could still apply to the same element.

It is basically a measure of how specific a selector's selection will be

- An element selector is less specific
- A class selector is more specific
- An ID selector is more specific

## Inheritance

The concept of `inheritance`, means that some CSS properties by default inherit values set on the current element's parent element, and some don't.

Things like `widths`, `margins`, `padding` and `borders` do not inherit.

CSS provides four special universal property values for **controlling inheritance**.

- inherit
  - turns *on* inheritance
  - sets the property value applied to a selected element to be the same as that of its parent element
- initial
  - Sets the property value to the browser's default style sheet
- unset
  - Resets the property to its natural value
  - if property is naturally inherited, it acts like *inherit*, else like *initial*
- revert
