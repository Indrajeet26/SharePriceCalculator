# SharePriceCalculator

This program computes and print out the sums of all gains and losses of the share prices.

Example:
This is the sample input of share prices : 78.41 85.18 91.09 90.57 91.02 103.61 105.88 103.77 110.13 108.89 105.09
In the above example, the price was down from the previous day on the fourth, eighth and tenth days, losing 7.67 in total over all three days, and up on every other day, gaining 34.35 in total.

The program will compute and return profitValue : 34.35 and lossValue : -7.67

## ASSUMPTIONS

1. If there is one or 0 element in input then profit and loss value will be 0.
2. This program will compute profit and loss value if number of elements is more than 1.
3. This program will calculate profit and loss only for numbers, if there is string in input then program will throw and error and user will have to run program again with valid inputs.
3. Node is already installed in user machine's in order to run this program and follow command section to execute this program.
4. Please refer test cases in which will show the handling of all the possible scenarios(Mocha and Chai Framework is used for testing).

## Command to run program and test cases:

npm install -- to install all the dependencies.</br>
node src/index.js 78.41 85.18 91.09 90.57 91.02 103.61 105.88 103.77 110.13 108.89 105.09 -- this will execute the batch job.</br>

### To run unit tests

npm run test
