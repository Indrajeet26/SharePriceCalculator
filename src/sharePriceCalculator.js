const sumCalculation = arr => {
  const sum = arr.reduce((total, currAmt) => total + currAmt, 0);
  return Math.round(sum * 100) / 100;
};

const stockPrice = arr => {
  let profitArr = [];
  let lossArr = [];

  arr.forEach((val, index) => {
    if (isNaN(val))
      throw new Error("Please enter valid sharePrice Eg: 1, 1.11, 2.456...");
    if (index < arr.length - 1) {
      const diffValue = arr[index + 1] - val;
      if (diffValue > 0) profitArr.push(diffValue);
      else lossArr.push(diffValue);
    }
  });

  return {
    profitValue: `${sumCalculation(profitArr)}`,
    lossValue: `${sumCalculation(lossArr)}`
  };
};

module.exports = { stockPrice };
