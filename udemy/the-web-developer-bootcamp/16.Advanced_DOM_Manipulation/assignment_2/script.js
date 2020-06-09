// Required events
// 1. Score should increase on clicking the button
function increase_score() {
    player_id = this.getAttribute("id")
    var player_counter = document.querySelector("#" + player_id + "_Score");
    player_counter.textContent++;
}

function main() {
    var players = document.querySelectorAll(".players");
    for (var i = 0; i < players.length; i++) {
        players[i].addEventListener("click", increase_score);
    }
}

main()