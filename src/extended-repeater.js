import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let result = [];
  options.repeatTimes ? null: options.repeatTimes = 1;
  options.additionRepeatTimes ? null : options.additionRepeatTimes = 1; 
  for (let i = 0; i < options.repeatTimes; i++) {
    let stringArr = [];
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      options.addition === undefined ? null : stringArr.push(String(options.addition));
    }
    let string = String(str)
    if (options.additionSeparator === undefined) {
      string += stringArr.join('|');
    } else {
      string += stringArr.join(options.additionSeparator);
    }
    result.push(string);
  }

  if (options.separator === undefined) {
    return result.join('+');
  } else {
    return result.join(options.separator);
  }
}
