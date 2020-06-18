$("#todo_input").on("keypress", function(event) {
    if (event.which === 13) {
        var value = $(this).val();
        $("ul").append("<li>" + value + "</li>");
        $(this).val("");
    }
});

$("ul").on("click", "li", function() {
    console.log($("li"));
});