import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const logTwo = 0.693;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if (+sampleActivity != Number) {
    return false;
  } 
    let k = logTwo / HALF_LIFE_PERIOD;
    let activityRate = MODERN_ACTIVITY / sampleActivity;
    let t =  Math.ceil((Math.log(activityRate)) / k);
    return t;
}
