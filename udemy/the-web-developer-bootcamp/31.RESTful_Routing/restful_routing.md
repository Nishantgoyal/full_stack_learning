# Restful Routing

- It is a mapping between HTTP routes and CRUD

| name    | url            | verb   | description                                      |
| ------- | -------------- | ------ | ------------------------------------------------ |
| INDEX   | /dogs          | GET    | Display a list of all dogs                       |
| NEW     | /dogs/new      | GET    | displays a form to make a new dog                |
| CREATE  | /dogs          | POST   | Add a new dog to DB                              |
| SHOW    | /dogs/:id      | GET    | Shows info about one dog                         |
| EDIT    | /dogs/:id/edit | GET    | Show edit form for one dog                       |
| UPDATE  | /dogs/:id      | PUT    | Update a particular dog, then redirect somewhere |
| Destroy | /dogs/:id      | DELETE | Delete a particular dog, then redirect somewhere |
