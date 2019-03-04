const sumCalculation = arr => {
  return arr.reduce((total, currAmt) => total + currAmt, 0);
};

const stockPrice = arr => {
  let profitArr = [];
  let lossArr = [];

  arr.forEach((val, index) => {
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
