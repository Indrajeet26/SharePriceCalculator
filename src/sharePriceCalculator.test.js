const { stockPrice } = require("./sharePriceCalculator");

const chai = require("chai");
const expect = chai.expect;

describe("Calculate Profit and Loss of Share Price", () => {
  it("Should return loss and profit value as 0 if there is only 1 input", () => {
    const inputArr = [2];

    const output = stockPrice(inputArr);
    expect(Number(output.profitValue)).to.equal(0);
    expect(Number(output.lossValue)).to.equal(0);
  });

  it("Should return loss and profit value as 0 if there is no input", () => {
    const inputArr = [];

    const output = stockPrice(inputArr);
    expect(Number(output.profitValue)).to.equal(0);
    expect(Number(output.lossValue)).to.equal(0);
  });

  it("Should return loss and profit on values of array input", () => {
    const inputArr = [2, 4, 6.2, 8, 3, 9, 2, 9.3, 8.6];

    const output = stockPrice(inputArr);
    expect(Number(output.profitValue)).to.equal(19.3);
    expect(Number(output.lossValue)).to.equal(-12.7);
  });
  it("Should display `Please enter valid sharePrice Eg: 1, 1.11, 2.456..` error message if input is not a number", () => {
    const inputArr = [2, "hello", 4.5];

    try {
      stockPrice(inputArr);
    } catch (err) {
      expect(err.message).to.equal(
        "Please enter valid sharePrice Eg: 1, 1.11, 2.456..."
      );
    }
  });
});
