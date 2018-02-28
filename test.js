const assert = require('assert')

const volatility = require('./index')
const values = [727.7, 1086.5, 1091.0, 1361.3, 1490.5, 1956.1]

const sigma = volatility(values)
assert.equal(sigma, 384.2844190469114)

console.log(`result is ${sigma}`)
