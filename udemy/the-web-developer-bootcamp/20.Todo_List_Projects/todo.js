$("#todo_input").on("keypress", function(event) {
    if (event.which === 13) {
        var row = get_row($(this).val())
        $("#TODO_list").append(row);
        $(this).val("");
    }
});

function get_delete_icon() {
    var del = document.createElement("div");
    del.classList.add("hide");
    del.classList.add("delete");
    del.innerHTML = '<div> <i id="hide_search" class="fa fa-trash"></i></div>'
    return del;
}

function get_row(value) {
    var ele = document.createElement("tr");
    var td = document.createElement("td");

    var del = get_delete_icon();
    td.appendChild(del);

    var item = document.createElement("div");
    item.classList.add("item");
    item.textContent = value;

    td.appendChild(item);
    ele.appendChild(td);
    return ele;
}

$("#TODO_list").on("click", "tr", function() {
    $(this).toggleClass("strike");
});


$("#TODO_list").on("mouseenter", "tr", function() {
    $(this).find(".delete").removeClass("hide");
    $(this).find(".delete").animate({
        width: "35px"
    }, 400);
});

$("#TODO_list").on("mouseleave", "tr", function() {
    var ele = $(this).find(".delete");
    $(this).find(".delete").animate({
        width: 0
    }, 200, function() {
        ele.addClass("hide");
    });
});


$("#TODO_list").on("click", ".delete", function() {
    $(this).parent().parent().remove();
});

$("#hide_search").on("click", function() {

    $("#todo_input").fadeToggle();
});