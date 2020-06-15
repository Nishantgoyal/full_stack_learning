function get_random_num(min, max) {
    var num = Number(
        Math.random() * (max - min) + min
    )
    return Math.round(num);
}

function choose_colors() {
    var red = get_random_num(0, 255);
    var green = get_random_num(0, 255);
    var blue = get_random_num(0, 255);
    return [red, green, blue];
}

function get_mode() {
    mode = document.querySelector(".selected").id;
    return mode;
}

function card_click() {
    if (done === true) {
        return;
    }
    var id = this.id;
    if (id != correct_card) {
        this.style.backgroundColor = "#232323";
        document.querySelector("#try").textContent = "Try Again";
    } else {
        done = true;
        var color = "rgb(" + color_values[0] + "," + color_values[1] + "," + color_values[2] + ")";
        console.log(color);
        document.querySelector("#header").style.backgroundColor = "rgb(" + color_values[0] + "," + color_values[1] + "," + color_values[2] + ")";
        show_cards(true);
        document.querySelector("#try").textContent = "Correct!";
        document.querySelector("#control_1").textContent = "Play Again?";
    }

}

function add_event_listener_to_mode() {
    mode_ele = document.querySelectorAll(".mode");
    for (var i = 0; i < mode_ele.length; i++) {
        mode_ele[i].addEventListener("click", function() {
            cur_mode = get_mode();
            if (cur_mode != this.id) {
                document.getElementById(cur_mode).classList.remove("selected");
                this.classList.add("selected");
                display_heading_colors();
                show_cards();
            }
        });
    }
}

function add_card(R, G, B, ID) {
    var ele = document.createElement("div");
    ele.id = ID;
    ele.classList.add("card");
    ele.classList.add("col-3");
    ele.style.backgroundColor = "rgb(" + R + "," + G + "," + B + ")";
    ele.addEventListener("click", card_click);
    document.querySelector("#color_boxes .row").appendChild(ele);

}

function display_heading_colors() {
    var colors = ["red", "green", "blue"];
    color_values = choose_colors();
    for (var i = 0; i < 3; i++) {
        document.querySelector("#" + colors[i]).textContent = color_values[i];
    }
}

function show_cards(correct) {
    document.querySelector("#color_boxes .row").innerHTML = null;
    var mode = get_mode();
    var count = 3;
    if (mode === "hard") {
        count = 6;
    }
    correct_card = get_random_num(0, count - 1);
    for (var i = 0; i < count; i++) {
        if (i === correct_card || correct === true) {
            console.log("Correct:", correct_card);
            add_card(color_values[0], color_values[1], color_values[2], i);
        } else {
            var r_dash = (color_values[0] + get_random_num(0, 255)) % 256;
            var g_dash = (color_values[1] + get_random_num(0, 255)) % 256;
            var b_dash = (color_values[2] + get_random_num(0, 255)) % 256;
            add_card(r_dash, g_dash, b_dash, i);
        }
    }
}

function main() {
    add_event_listener_to_mode();
    display_heading_colors();
    show_cards();
}
var color_values;
var correct_card;
main();
var done = false;
document.querySelector("#control_1").addEventListener("click", function() {
    display_heading_colors();
    document.querySelector("#control_1").textContent = "New Game";
    document.querySelector("#try").textContent = "";
    show_cards();
    done = false;
})