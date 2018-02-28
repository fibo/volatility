/**
 * Volatility is the degree of variation of a trading price series over time.
 *
 * @param {Array} values
 * @returns {Number} sigma, a.k.a. *standard deviation* that is the square root of the values *variance*
 */
function volatility (values) {
  const n = values.length

  const mean = values.reduce((a, b) => (a + b), 0) / n

  const deviation = values.reduce((dev, val) => (dev + (val - mean) * (val - mean)), 0)

  return Math.sqrt(deviation / n)
}

module.exports = volatility
