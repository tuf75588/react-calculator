import Big from 'big.js';

export default function operate(numOne = 0, numTwo = 0, operation) {
  const one = new Big(numOne);
  const two = new Big(numTwo);
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === '*') {
    return one.times(two).toString();
  }
  if (operation === '÷') {
    return one.div(two).toString();
  }
}
