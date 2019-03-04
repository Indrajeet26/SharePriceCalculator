const { stockPrice } = require("./sharePriceCalculator");

const inputSharePrice = process.argv.slice(2);

try {
  const output = stockPrice(inputSharePrice);
  console.log(output);
} catch (err) {
  console.log(err.message);
}
