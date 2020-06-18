$("#todo_input").on("keypress", function(event) {
    if (event.which === 13) {
        var row = "<tr><td><div class='delete'>x</div>" + $(this).val() + "</td></tr>";
        $("#TODO_list").append(row);
        $(this).val("");
    }
});

$("table").on("click", "tr", function() {

    console.log($("li"));
});


$("#TODO_list").on("mouseover", "tr", function() {
    $(this).find(".delete").css("display", "inline-block");
});
$("#TODO_list").on("mouseout", "tr", function() {
    $(this).find(".delete").css("display", "none");
});