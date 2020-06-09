function increase_score() {
    player_id = this.getAttribute("id")
    var player_counter = document.querySelector("#" + player_id + "_Score");
    player_counter.textContent++;
}

function reset_score() {
    console.log("Resetting Score");
    scores = document.querySelectorAll(".scores");
    for (var i = 0; i < scores.length; i++) {
        scores[i].textContent = 0;
    }
}

function set_max_score(event) {
    var max_counter = document.querySelector("#max_counter");
    // console.log(event);
    max_counter.textContent = event.target.value;
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

    // Setting Max Score
    var score_selector = document.querySelector("#score_selector");
    score_selector.addEventListener("change", set_max_score);
}

main()