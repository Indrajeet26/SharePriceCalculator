const { stockPrice } = require("./sharePriceCalculator");

const inputSharePrice = process.argv.slice(2);

const output = stockPrice(inputSharePrice);

console.log(err.message);
