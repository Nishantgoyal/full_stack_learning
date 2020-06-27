function average(scores) {
    total = 0;
    for (var i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    console.log(Math.round(total / scores.length));

}

var arr1 = [90, 98, 89, 100, 100, 86, 94];
average(arr1);