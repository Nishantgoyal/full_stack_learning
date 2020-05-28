# Flex

## flex-grow

The `flex-grow` property sets the flex grow factor of a flex item *main size*. The width or height of a flex container or flex item, whichever is in the `main dimension`, is that box's **main size**.

The `flex-grow` property specifies how much of the remaining space in the flex container should be assigned to the item.

## flex-shrink

It sets the shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to `flex-shrink`.

## flex-basis

It sets the initial `main` size of the flex item. It sets the size of the content box unless otherwise set with `box-sizing`.

## flex property

It sets how a flex item will grow or shrink to fit the space available in its flex container. It is a shorthand for:

- flex-grow
- flex-shrink
- flex-basis

## Alignment

Flexbox can be used to align items along the main or cross axis.

- **align-items**
  - controls where the flex items sit on the cross axis.
  - `stretch`
    - default
    - stretches all flex items to fill the parent in the direction of the cross axis.
    - If parent hasn't got a fixed width, then all flex items will become as long as the longest flex item.
  - `center`
    - it causes the items to maintain their intrinsic dimensions, but be centered along the cross axis
  - `flex-start` / `flex-end`
    - align all items at the start and end of the cross axis respectively
- **justify-content**
  - controls where the flex items sit on the main axis
  - `flex-start` / `flex-end` / `center`
  - `space-around`
    - distributes all the items evenly along the main axis, with a bit of space left at either end
  - `space-between`
    - similar to *space-aroung* but does not leave any space at either end

## Ordering flex items

Flexbox can be used to change the layout of flex items, without affecting the source order.

It can be acheived using `order: #value` property.

By default, all flex items have an `order` value of `0`.

Flex items with higher order will appear later in the display order.

Negative values can also be set to make items appear earlier than items with `0` set.
