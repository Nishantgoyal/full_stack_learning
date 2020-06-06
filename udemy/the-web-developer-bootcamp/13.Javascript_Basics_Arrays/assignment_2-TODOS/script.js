function main() {
    var inp = prompt("What would you like to do?")
    var todoList = []

    while (inp !== "quit") {
        if (inp === "new") {
            addTODO(todoList);
        } else if (inp === "view") {
            viewTODOs(todoList);
        } else if (inp == "delete") {
            removeTODO(todoList);
        }
        inp = prompt("What would you like to do?");
    }
}

function addTODO(todoList) {
    todo = prompt("Enter TODO");
    todoList.push(todo);
    console.log("Added TODO: " + todo);
}

function viewTODOs(todoList) {
    if (todoList.length == 0) {
        console.log("No TODOs");
        return;
    }
    console.log("**************");
    todoList.forEach(function(todo, index) {
        console.log(index + ": " + todo);
    });
    console.log("**************");
}

function removeTODO(todoList) {
    todoIndex = prompt("Enter index of TODO to delete");
    if (Number(todoIndex) < todoList.length) {
        todoList.splice(todoIndex, 1);
        console.log("TODO Removed");
    } else {
        console.log("No TODO at index", todoIndex);
    }
}
main()