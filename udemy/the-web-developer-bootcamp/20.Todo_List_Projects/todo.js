$("#todo_input").on("keypress", function(event) {
    if (event.which === 13) {
        var row = "<tr><td><div class='delete'>x</div>" + $(this).val() + "</td></tr>";
        $("#TODO_list").append(row);
        $(this).val("");
    }
});

$("#TODO_list").on("click", "tr", function() {
    $(this).toggleClass("strike");
});


$("#TODO_list").on("mouseover", "tr", function() {
    $(this).find(".delete").css("display", "inline-block");
});

$("#TODO_list").on("mouseout", "tr", function() {
    $(this).find(".delete").css("display", "none");
});


$("#TODO_list").on("click", ".delete", function() {
    $(this).parent().parent().remove();
});

$("#hide_search").on("click", function() {
    $("#todo_input").toggleClass("hide");
})