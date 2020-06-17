$("#todo_input").on("keypress", function(event) {
    if (event.which === 13) {
        var value = $(this).val();
        var li = document.createElement("li");
        li.textContent = value;
        $("ul").append(li)
        console.log(value);
        $(this).val("");
    }
});