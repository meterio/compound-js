const assert = require('assert')
const ethers = require('ethers')
const comptroller = require('../src/comptroller.ts')
const Sumer = require('../src/index.ts')
const providerUrl = 'http://localhost:8545'

module.exports = function suite([publicKeys, privateKeys]) {
  const acc1 = { address: publicKeys[0], privateKey: privateKeys[0] }

  it('runs comptroller.enterMarkets single asset', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const trx = await sumer.enterMarkets(Sumer.ETH)
    const receipt = await trx.wait(1)

    const numEvents = receipt.events.length
    const event = receipt.events[0].event

    const numEventsExpected = 1
    const eventExpected = 'MarketEntered'

    assert.equal(numEvents, numEventsExpected)
    assert.equal(event, eventExpected)
  })

  it('runs comptroller.enterMarkets multiple assets', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const trx = await sumer.enterMarkets([Sumer.DAI, Sumer.USDC, Sumer.UNI])
    const receipt = await trx.wait(1)

    const numEvents = receipt.events.length
    const event = receipt.events[0].event

    const numEventsExpected = 3
    const eventExpected = 'MarketEntered'

    assert.equal(numEvents, numEventsExpected)
    assert.equal(event, eventExpected)
  })

  it('fails comptroller.enterMarkets cToken string', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [enterMarkets] | Argument `markets` must be an array or string.'
    try {
      const trx = await sumer.enterMarkets(null)
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails comptroller.enterMarkets invalid cToken', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [enterMarkets] | Provided market `cbadctokenname` is not a recognized cToken.'
    try {
      const trx = await sumer.enterMarkets(['USDC', 'badctokenname'])
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('runs comptroller.exitMarket', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const enterMarketsTrx = await sumer.enterMarkets(Sumer.ETH)
    await enterMarketsTrx.wait(1)

    const trx = await sumer.exitMarket(Sumer.ETH)
    const receipt = await trx.wait(1)

    const numEvents = receipt.events.length
    const event = receipt.events[0].event

    const numEventsExpected = 1
    const eventExpected = 'MarketExited'

    assert.equal(numEvents, numEventsExpected)
    assert.equal(event, eventExpected)
  })

  it('fails comptroller.exitMarket cToken string', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [exitMarket] | Argument `market` must be a string of a cToken market name.'
    try {
      const trx = await sumer.exitMarket(null)
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails comptroller.exitMarket invalid cToken', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [exitMarket] | Provided market `cbadctokenname` is not a recognized cToken.'
    try {
      const trx = await sumer.exitMarket('badctokenname')
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })
}
