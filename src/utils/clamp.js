/**
 * https://github.com/lodash/lodash/blob/master/clamp.js
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
*/

function clamp (number, lower, upper) {
  number = +number
  lower = +lower
  upper = +upper
  lower = lower === lower ? lower : 0
  upper = upper === upper ? upper : 0
  if (number === number) {
    number = number <= upper ? number : upper
    number = number >= lower ? number : lower
  }
  return number
}

export default clamp
