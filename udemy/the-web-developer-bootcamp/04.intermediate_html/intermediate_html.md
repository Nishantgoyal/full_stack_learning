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
- The `input` tag creates interactive controls. The "type" attribute determines the type of input.

```html
<form action="/submit-page" method="post">
    <input type="text">
    <input type="date">
    <input type="color">
    <input type="file">
    <input type="checkbox">
    <!-- all inputs -->
</form>
```
