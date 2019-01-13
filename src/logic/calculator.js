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
    //if there is an operation, lets update next
    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next, buttonName };
      }
      return { next: buttonName };
    }
    //if there is no operation, update next and clear the value
    if (obj.next) {
      return {
        next: obj.next + buttonName,
        total: null
      };
    }
    return {
      next: buttonName,
      total: null
    };
  }
  if (buttonName === '%') {
    if (obj.next && obj.operation) {
      const result = operate(obj.total, obj.next, obj.operation);
      return {
        total: Big(result)
          .div(Big('100'))
          .toString()
      };
    }
    //if not true, just return an empty object
    return {};
  }
}
