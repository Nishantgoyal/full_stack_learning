const axios = require('axios');
axios.get("https://pokeapi.co/api/v2/pokemon?limit=10").then(function(res) {
    // eval(require('locus'));
    res.data.results.forEach(function(pokemon) {
        console.log(pokemon.name);
    });
}).catch(function(error) {
    console.log(error);
}).finally(function() {});