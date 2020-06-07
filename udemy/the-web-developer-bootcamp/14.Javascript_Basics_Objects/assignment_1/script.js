var movies = [{
    title: "Harry Potter",
    rating: 5,
    hasWatched: true
}, {
    title: "Pulp Fiction",
    rating: 5,
    hasWatched: false
}]

movies.forEach(function(movie) {
    if (movie.hasWatched === true) {
        var out = "You have watched \"" + movie.title + "\" - " + movie.rating + " stars";
    } else {
        var out = "You have not seen \"" + movie.title + "\" - " + movie.rating + " stars";
    }
    console.log(out);
})