# DOM Events

- Making things interactive
- These are sent to notify code of interesting things that have taken place.
- Each event is represented by an object based on the `Event` interface, and may have additional custom fields and/or functions used to get additional information about what happened.
- Events can represent anything from basic user interactions to automated notifications of things happening in the rendering model.

## The Syntax

Select an element and then add an `event listener`

```js
  element.addEventListener(type, functionToCall);
```

## Common Categories

- **Resource events**
  - error, abort, ...
- **Network events**
  - online, offline
- **Focus events**
  - focus, blur, focusin, focusout
- **WebSocket events**
  - open, message, error, close
- **Session History events**
  - pagehide, pageshow, popstate
- **CSS Animation events**
  - animationstart, animationcancel,...
- **CSS Transition events**
  - transitionstart, ...
- **Form events**
  - reset, submit
- **Printing events**
  - beforeprint, afterprint
- **Text Composition events**
  - compositionstart, compositionupdate, compositionend
- **View events**
  - fullscreenchange, ...
- **Clipboard events**
  - cut, copy, paste
- **Keyboard events**
  - keydown, keypress, keyup
- **Mouse events**
  - click, select,...
- **Drag & Drop events**
  - drag, ...
- **Media events**
  - audioprocess, canplay,...
- **Progress events**
  - abort, error, ...
