const assert = require('assert')
const ethers = require('ethers')
const Sumer = require('../src/index.ts')
const { request } = require('../src/util.ts')
const providerUrl = 'http://localhost:8545'

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

module.exports = function suite([publicKeys, privateKeys]) {
  const sumer = new Sumer(providerUrl)

  it('runs priceFeed.getPrice underlying asset to USD', async function () {
    const sumer = new Sumer(providerUrl)

    const price = await sumer.getPrice(Sumer.WBTC)

    const isPositiveNumber = price > 0

    assert.equal(typeof price, 'number')
    assert.equal(isPositiveNumber, true)
  })

  it('runs priceFeed.getPrice underlying asset to underlying asset', async function () {
    const sumer = new Sumer(providerUrl)

    const price = await sumer.getPrice(Sumer.UNI, Sumer.WBTC)

    const isPositiveNumber = price > 0

    assert.equal(typeof price, 'number')
    assert.equal(isPositiveNumber, true)
  })

  it('runs priceFeed.getPrice cToken to underlying asset', async function () {
    const sumer = new Sumer(providerUrl)

    const price = await sumer.getPrice(Sumer.cDAI, Sumer.WBTC)

    const isPositiveNumber = price > 0
    const isLessThanOne = price < 1

    assert.equal(typeof price, 'number')
    assert.equal(isPositiveNumber, true)
    assert.equal(isLessThanOne, true)
  })

  it('runs priceFeed.getPrice underlying asset to cToken', async function () {
    const sumer = new Sumer(providerUrl)

    const price = await sumer.getPrice(Sumer.UNI, Sumer.cDAI)

    const isPositiveNumber = price > 0

    assert.equal(typeof price, 'number')
    assert.equal(isPositiveNumber, true)
  })

  it('runs priceFeed.getPrice cToken to cToken', async function () {
    const sumer = new Sumer(providerUrl)

    const price = await sumer.getPrice(Sumer.cDAI, Sumer.cDAI)

    const isPositiveNumber = price > 0
    const isOne = price === 1

    assert.equal(typeof price, 'number')
    assert.equal(isPositiveNumber, true)
    assert.equal(isOne, true)
  })

  it('fails priceFeed.getPrice bad asset', async function () {
    const sumer = new Sumer(providerUrl)

    const errorMessage = 'Sumer [getPrice] | Argument `asset` must be a non-empty string.'
    try {
      price = await sumer.getPrice('')
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails priceFeed.getPrice invalid asset', async function () {
    const sumer = new Sumer(providerUrl)

    const errorMessage = 'Sumer [getPrice] | Argument `asset` is not supported.'
    try {
      price = await sumer.getPrice('UUU')
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('runs priceFeed.getPrice for LINK', async function () {
    const sumer = new Sumer(providerUrl)

    let price
    try {
      price = await sumer.getPrice(Sumer.LINK)
      // console.log('LINK', 'price', price);
    } catch (error) {
      console.error(error)
    }

    assert.equal(typeof price, 'number', 'Ensure returned object is a number')
    assert.equal(price > 0, true, 'Ensure the returned price is > 0')
  })

  it('runs priceFeed.getPrice for BTC', async function () {
    const sumer = new Sumer(providerUrl)

    let price
    try {
      price = await sumer.getPrice(Sumer.BTC)
      // console.log('BTC', 'price', price);
    } catch (error) {
      console.error(error)
    }

    assert.equal(typeof price, 'number', 'Ensure returned object is a number')
    assert.equal(price > 0, true, 'Ensure the returned price is > 0')
  })

  it('runs priceFeed.getPrice for AAVE', async function () {
    const sumer = new Sumer(providerUrl)

    let price
    try {
      price = await sumer.getPrice(Sumer.AAVE)
      // console.log('AAVE', 'price', price);
    } catch (error) {
      console.error(error)
    }

    assert.equal(typeof price, 'number', 'Ensure returned object is a number')
    assert.equal(price > 0, true, 'Ensure the returned price is > 0')
  })

  it('runs priceFeed.getPrice for BAT', async function () {
    const sumer = new Sumer(providerUrl)

    let price
    try {
      price = await sumer.getPrice(Sumer.BAT)
      // console.log('BAT', 'price', price);
    } catch (error) {
      console.error(error)
    }

    assert.equal(typeof price, 'number', 'Ensure returned object is a number')
    assert.equal(price > 0, true, 'Ensure the returned price is > 0')
  })

  it('runs priceFeed.getPrice for COMP', async function () {
    const sumer = new Sumer(providerUrl)

    let price
    try {
      price = await sumer.getPrice(Sumer.COMP)
      // console.log('COMP', 'price', price);
    } catch (error) {
      console.error(error)
    }

    assert.equal(typeof price, 'number', 'Ensure returned object is a number')
    assert.equal(price > 0, true, 'Ensure the returned price is > 0')
  })

  it('runs priceFeed.getPrice for DAI', async function () {
    const sumer = new Sumer(providerUrl)

    let price
    try {
      price = await sumer.getPrice(Sumer.DAI)
      // console.log('DAI', 'price', price);
    } catch (error) {
      console.error(error)
    }

    assert.equal(typeof price, 'number', 'Ensure returned object is a number')
    assert.equal(price > 0, true, 'Ensure the returned price is > 0')
  })

  it('runs priceFeed.getPrice for ETH', async function () {
    const sumer = new Sumer(providerUrl)

    let price
    try {
      price = await sumer.getPrice(Sumer.ETH)
      // console.log('ETH', 'price', price);
    } catch (error) {
      console.error(error)
    }

    assert.equal(typeof price, 'number', 'Ensure returned object is a number')
    assert.equal(price > 0, true, 'Ensure the returned price is > 0')
  })

  it('runs priceFeed.getPrice for MKR', async function () {
    const sumer = new Sumer(providerUrl)

    let price
    try {
      price = await sumer.getPrice(Sumer.MKR)
      // console.log('MKR', 'price', price);
    } catch (error) {
      console.error(error)
    }

    assert.equal(typeof price, 'number', 'Ensure returned object is a number')
    assert.equal(price > 0, true, 'Ensure the returned price is > 0')
  })

  it('runs priceFeed.getPrice for REP', async function () {
    const sumer = new Sumer(providerUrl)

    let price
    try {
      price = await sumer.getPrice(Sumer.REP)
      // console.log('REP', 'price', price);
    } catch (error) {
      console.error(error)
    }

    assert.equal(typeof price, 'number', 'Ensure returned object is a number')
    assert.equal(price > 0, true, 'Ensure the returned price is > 0')
  })

  it('runs priceFeed.getPrice for SAI', async function () {
    const sumer = new Sumer(providerUrl)

    let price
    try {
      price = await sumer.getPrice(Sumer.SAI)
      // console.log('SAI', 'price', price);
    } catch (error) {
      console.error(error)
    }

    assert.equal(typeof price, 'number', 'Ensure returned object is a number')
    assert.equal(price > 0, true, 'Ensure the returned price is > 0')
  })

  it('runs priceFeed.getPrice for SUSHI', async function () {
    const sumer = new Sumer(providerUrl)

    let price
    try {
      price = await sumer.getPrice(Sumer.SUSHI)
      // console.log('SUSHI', 'price', price);
    } catch (error) {
      console.error(error)
    }

    assert.equal(typeof price, 'number', 'Ensure returned object is a number')
    assert.equal(price > 0, true, 'Ensure the returned price is > 0')
  })

  it('runs priceFeed.getPrice for TUSD', async function () {
    const sumer = new Sumer(providerUrl)

    let price
    try {
      price = await sumer.getPrice(Sumer.TUSD)
      // console.log('TUSD', 'price', price);
    } catch (error) {
      console.error(error)
    }

    assert.equal(typeof price, 'number', 'Ensure returned object is a number')
    assert.equal(price > 0, true, 'Ensure the returned price is > 0')
  })

  it('runs priceFeed.getPrice for UNI', async function () {
    const sumer = new Sumer(providerUrl)

    let price
    try {
      price = await sumer.getPrice(Sumer.UNI)
      // console.log('UNI', 'price', price);
    } catch (error) {
      console.error(error)
    }

    assert.equal(typeof price, 'number', 'Ensure returned object is a number')
    assert.equal(price > 0, true, 'Ensure the returned price is > 0')
  })

  it('runs priceFeed.getPrice for USDC', async function () {
    const sumer = new Sumer(providerUrl)

    let price
    try {
      price = await sumer.getPrice(Sumer.USDC)
      // console.log('USDC', 'price', price);
    } catch (error) {
      console.error(error)
    }

    assert.equal(typeof price, 'number', 'Ensure returned object is a number')
    assert.equal(price > 0, true, 'Ensure the returned price is > 0')
  })

  it('runs priceFeed.getPrice for USDT', async function () {
    const sumer = new Sumer(providerUrl)

    let price
    try {
      price = await sumer.getPrice(Sumer.USDT)
      // console.log('USDT', 'price', price);
    } catch (error) {
      console.error(error)
    }

    assert.equal(typeof price, 'number', 'Ensure returned object is a number')
    assert.equal(price > 0, true, 'Ensure the returned price is > 0')
  })

  it('runs priceFeed.getPrice for WBTC', async function () {
    const sumer = new Sumer(providerUrl)

    let price
    try {
      price = await sumer.getPrice(Sumer.WBTC)
      // console.log('WBTC', 'price', price);
    } catch (error) {
      console.error(error)
    }

    assert.equal(typeof price, 'number', 'Ensure returned object is a number')
    assert.equal(price > 0, true, 'Ensure the returned price is > 0')
  })

  it('runs priceFeed.getPrice for YFI', async function () {
    const sumer = new Sumer(providerUrl)

    let price
    try {
      price = await sumer.getPrice(Sumer.YFI)
      // console.log('YFI', 'price', price);
    } catch (error) {
      console.error(error)
    }

    assert.equal(typeof price, 'number', 'Ensure returned object is a number')
    assert.equal(price > 0, true, 'Ensure the returned price is > 0')
  })

  it('runs priceFeed.getPrice for ZRX', async function () {
    const sumer = new Sumer(providerUrl)

    let price
    try {
      price = await sumer.getPrice(Sumer.ZRX)
      // console.log('ZRX', 'price', price);
    } catch (error) {
      console.error(error)
    }

    assert.equal(typeof price, 'number', 'Ensure returned object is a number')
    assert.equal(price > 0, true, 'Ensure the returned price is > 0')
  })
}
