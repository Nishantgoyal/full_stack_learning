# CSS Selectors

## Selector types

### -> Universal Selector

- Syntax: `* ns|* *|*`

### -> Type Selector

- Syntax: `elementname`
- e.g., *h1 {}, p {}...*

### -> Class Selector

- Syntax: `.classname`
- e.g., *.cities*

### -> ID Selector

- Syntax: `#idname`
- e.g., *#toc*

### -> Attribute Selector

- Select all elements that have the given attribute
- Syntax: `[attr] [attr=value] [attr~=value] [attr|=value] [attr^=value] [attr$=value] [attr*=value]`

## Grouping Selectors

### -> Selector List

- The `,` is a grouping method.
- Syntax: `A, B`
  - Will match both A and B

## Combinators

### -> Descendent combinator

- The space combinator selects nodes that are descendants of the first element.
- Syntax: **A B**
- E.g.: **div span** willmatch all `span` elements that are nested inside a `div` element

### -> Child combinator

- The `>` combinator select nodes that are direct children of the fist element
- Syntax: **A > B**
- E.g.: **ul > li** will match all `li` elements that are nested directly inside a `ul` element

### -> General sibling combinator

- The `~` combinator selects siblings.
- The second element must follow the first element, (not necessarily immediately), and both share the same parent.
- Syntax: **A ~ B**
- E.g.: **p ~ span** will match all `span` elements that follow a `p`, immediately or not.

### -> Adjacent sibling combinator

- The `+` combinator selects siblings.
- The second element must follow the first element, immediately, and both share the same parent.
- Syntax: **A + B**
- E.g.: **h2 + p** will match all `[span]` elements that directly follow an `h2`

## Pseudo Classes

A *pseudo-class* is a keyword added to a selector that specifies a special state of the selected element(s).  

```css
button:hover {
  color: blue;
}
```

Pseudo classes let you apply a style to an element in relation to external factors like the history of the navigator (`:visited`), etc.

## Pseudo Elements

A *pseudo element* is a keyword added to a selector that lets you style a specific part of the selected element(s).

```css
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```
