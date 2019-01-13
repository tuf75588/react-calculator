import Big from 'big.js';
import operate from './operations';
import isNumber from './isNumber';

export default function calculate(obj, buttonName) {
  /* Given a state object and a button name, we will return an updated calculator
    data object.

    The contents of our calculator data object include:
    total: String --- the running total.
    next: String -- the next number to be operated on with the total.
    operation: --- the current operation we must perform (+, -, *, etc..)

  */
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null
    };
  }
  if (isNumber(buttonName)) {
    //check for 0 & 0
    if (buttonName === '0' && obj.next === '0') {
      return {};
    }
  }
}
