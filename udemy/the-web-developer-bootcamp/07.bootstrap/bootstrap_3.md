# Bootstrap 3

Documentation Link: [bootstrap](https://getbootstrap.com/docs/3.3/)

## Bootstrap CSS

- Requires HTML5 doctype
- Bootstrap is mobile first
- Bootstrap sets basic global display, typography and link styles
  - `background-color: #fff;` on body

### Containers

- Bootstrap requires a containing element to wrap site contents and house the grid system.
  - `.container` is for a responsive fixed-width container
  - `.container-fluid` for a full-width container, spanning entire viewport
- Neither container is nestable

## Grid System

It includes a responsive fluid grid system, that appropriately scales upto 12 columns.
It includes `predefined classes` for easy layout options, as well as powerful `mixins for generating more semantic layouts`.

### Introduction to Grid

- Rows must be placed within container, to create horizontal group of columns
- Only columns should be immediate children of rows
- Content should be placed within columns
- Grid columns are created by specifying the twelve available columms you wish to span.

### Grid Sizes

- *Extra Small:*
  - `col-xs-*`
  - **<768px**
- *Small:*
  - `col-sm-*`
  - **>=768px**
- *Medium:*
  - `col-md-*`
  - **>=992px**
- *Large:*
  - `col-lg-*`
  - **>=1200px**

### Bootstrap 3 CDN

```html
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
```