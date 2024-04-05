const assert = require('assert')
const Sumer = require('../src/index.ts')

// Mocked browser `window.ethereum` as unlocked account '0xa0df35...'
const _window = { ethereum: require('./window.ethereum.json') }

const providerUrl = 'http://localhost:8545'
const unlockedPrivateKey = '0xb8c1b5c1d81f9475fdf2e334517d29f733bdfa40682207571b12fc1142cbf329'
const unlockedMnemonic = 'clutch captain shoe salt awake harvest setup primary inmate ugly among become'

module.exports = function suite() {
  it('initializes sumer with ethers default provider', async function () {
    const sumer = new Sumer()

    const expectedType = 'object'

    assert.equal(typeof sumer, expectedType)
  })

  it('initializes sumer with JSON RPC URL', async function () {
    const sumer = new Sumer(providerUrl)

    const expectedType = 'object'

    assert.equal(typeof sumer, expectedType)
  })

  it('initializes sumer with mnemonic', async function () {
    const sumer = new Sumer(providerUrl, {
      mnemonic: unlockedMnemonic,
    })

    const expectedType = 'object'

    assert.equal(typeof sumer, expectedType)
  })

  it('initializes sumer with private key', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: unlockedPrivateKey,
    })

    const expectedType = 'object'

    assert.equal(typeof sumer, expectedType)
  })

  it('initializes sumer as web3', async function () {
    // make a fresh copy, so our newly defined functions don't break other tests
    const window = JSON.parse(JSON.stringify(_window))

    window.ethereum.send = function (request, callback) {}
    const sumer = new Sumer(window.ethereum)

    const expectedType = 'object'

    assert.equal(typeof sumer, expectedType)
  })
}
