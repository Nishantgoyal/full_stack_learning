# jQuery Events

- click
  - add a click listener
  - `$(selector).click(function);`
- keypress
  - add a keypress listener
  - key code can be obtained using the `event` object in the callback.
  - To check for `enter`, we can use `event.which === 13`
- on
  - works similarly to `addEventListener` and allows one to add the event
  - this will add the listener for the event for all the potential future elements
