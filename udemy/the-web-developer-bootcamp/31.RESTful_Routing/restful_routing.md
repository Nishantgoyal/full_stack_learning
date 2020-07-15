# Restful Routing

- It is a mapping between HTTP routes and CRUD

| name    | url            | verb   | description                                      | Mongoose Method         |
| ------- | -------------- | ------ | ------------------------------------------------ | ----------------------- |
| INDEX   | /dogs          | GET    | Display a list of all dogs                       | Dog.find()              |
| NEW     | /dogs/new      | GET    | displays a form to make a new dog                | N/A                     |
| CREATE  | /dogs          | POST   | Add a new dog to DB                              | Dog.create()            |
| SHOW    | /dogs/:id      | GET    | Shows info about one dog                         | Dog.findById()          | 
| EDIT    | /dogs/:id/edit | GET    | Show edit form for one dog                       | Dog.findById()          |
| UPDATE  | /dogs/:id      | PUT    | Update a particular dog, then redirect somewhere | Dog.findByIdAndUpdate() |
| Destroy | /dogs/:id      | DELETE | Delete a particular dog, then redirect somewhere | Dog.findByIdAndRemove() |
