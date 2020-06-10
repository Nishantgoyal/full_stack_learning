function increase_score() {
    if (winner) { return; }
    player_id = this.getAttribute("id")
    var player_counter = document.querySelector("#" + player_id + "_Score");
    current_score = Number(player_counter.textContent);
    if (current_score < max_score) {
        current_score++;
        player_counter.textContent = current_score;
        if (current_score === max_score) {
            player_counter.style.color = "green";
            winner = true;
        }
    }
}

function reset_score() {
    console.log("Reset")
    scores = document.querySelectorAll(".scores");
    for (var i = 0; i < scores.length; i++) {
        scores[i].textContent = 0;
        scores[i].style.color = "black";
    }
    winner = false;
}

function set_score_selector() {
    var score_selector = document.querySelector("#score_selector");
    score_selector.value = ""
}

function set_max_score(event) {
    var max_counter = document.querySelector("#max_counter");
    max_counter.textContent = event.target.value;
    max_score = Number(event.target.value);
    reset_score()
}

function main() {


    // Score should increase on clicking the button
    var players = document.querySelectorAll(".players");
    for (var i = 0; i < players.length; i++) {
        players[i].addEventListener("click", increase_score);
    }

    // Reset
    var reset_button = document.querySelector("#reset");
    reset_button.addEventListener("click", reset_score);
    reset_button.addEventListener("click", set_score_selector);

    // Setting Max Score
    var score_selector = document.querySelector("#score_selector");
    score_selector.addEventListener("change", set_max_score);
}

var max_score = 5;
var winner = false;
main()