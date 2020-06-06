function main() {
    var arr = [1, 2, 3];
    myForEach(arr, function(ele) {
        console.log(ele);
    });
    myForEach(arr, alert);
}

function myForEach(arr, myFunc) {
    for (var i = 0; i < arr.length; i++) {
        myFunc(arr[i]);
    }
}
main()