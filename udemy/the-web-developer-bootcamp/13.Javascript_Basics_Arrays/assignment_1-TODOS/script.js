var inp = prompt("What would you like to do?")
var todoList = []
while (inp !== "quit") {
    if (inp === "new") {
        inp = prompt("Enter TODO")
        todoList.push(inp)
    } else if (inp === "view") {
        console.log(todoList.toString())
    }
    inp = prompt("What would you like to do?")
}