# Intermediate HTML

## table

```html
<table>
    <thead>
      <tr>
          <th>head11</th>
          <th>head12</th>
          ...
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>ele1</td>
            <td>ele2</td>
            ...
        </tr>
        <tr>...</tr>
        ...
    </tbody>
</table>
```

## forms

- Getting user input
- `action` --> the **URL** to send form data to
- `method` --> the type of HTTP request
- The `input` tag creates interactive controls. 
  - The `type` attribute determines the type of input.
  - The `name` attribute binds the data to the variable while sending
  - The `placeholder` attribute fills the form with some text till user starts interacting
- `Labels` help us to add captions to individual elements in the form
  - The `for` attribute can be used (optionally), to bind the label to an input with the specified `id`
  - Alternatively, input can be placed inside the `label` tag

```html
<form action="/submit-page" method="post">
    <label> Text: <input type="text"> </label>
    <label for="date"> Date: </label>
    <input id="date" type="date">
    <input type="color">
    <input type="file">
    <input type="checkbox">
    <!-- all inputs -->
</form>
```

### form validations

- The `required` attribute validates that an attribute is not empty
- The `type` field also performs some validations, like `type="email"`
- The `pattern` attribute can be added to `input type=text` to match the text with a regular expression
