var number = Number(prompt("Guess a Number!"));

if (number === 7) {
    alert("You guessed it correctly..!")
} else if (number < 7) {
    alert("Too Low..!")
} else {
    alert("Too High..!")
}