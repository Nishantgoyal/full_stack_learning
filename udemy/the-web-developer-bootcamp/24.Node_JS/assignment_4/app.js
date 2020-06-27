var data = require('faker');
console.log("==================");
console.log("Welcome to My Shop");
console.log("==================");
for (var i = 0; i < 10; i++) {
    var product = data.commerce.productName();
    var price = data.commerce.price();
    console.log(product + " - $" + price);
}