const assert = require('assert')
const ethers = require('ethers')
const cToken = require('../src/cToken.ts')
const Sumer = require('../src/index.ts')
const providerUrl = 'http://localhost:8545'

module.exports = function suite([publicKeys, privateKeys]) {
  const acc1 = { address: publicKeys[0], privateKey: privateKeys[0] }
  const acc2 = { address: publicKeys[1], privateKey: privateKeys[1] }

  it('runs cToken.supply ETH', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const trx = await sumer.supply(Sumer.ETH, 2)
    const receipt = await trx.wait(1)

    const numEvents = receipt.events.length
    const events = receipt.events.map((e) => e.event)

    const numEventsExpected = 4

    assert.equal(numEvents, numEventsExpected)
    assert.equal(events.includes('AccrueInterest'), true)
    assert.equal(events.includes('Mint'), true)
    assert.equal(events.includes('Transfer'), true)
  })

  it('runs cToken.supply USDC', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const supplyEthTrx = await sumer.supply(Sumer.ETH, 2)
    await supplyEthTrx.wait(1)

    const enterEthMarket = await sumer.enterMarkets(Sumer.ETH)
    await enterEthMarket.wait(1)

    const borrowUsdcTrx = await sumer.borrow(Sumer.USDC, 5, { gasLimit: 600000 })
    await borrowUsdcTrx.wait(1)

    const supplyUsdcTrx = await sumer.supply(Sumer.USDC, 2)
    const receipt = await supplyUsdcTrx.wait(1)

    const numEvents = receipt.events.length
    const events = receipt.events.map((e) => e.event)

    let numbTransfers = 0
    events.forEach((e) => {
      if (e === 'Transfer') numbTransfers++
    })

    const numEventsExpected = 5
    const numbTransfersExpected = 2

    assert.equal(numEvents, numEventsExpected)
    assert.equal(numbTransfers, numbTransfersExpected)
    assert.equal(events.includes('AccrueInterest'), true)
    assert.equal(events.includes('Mint'), true)
    assert.equal(events.includes('Transfer'), true)
  })

  it('runs cToken.supply USDC no approve', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const supplyEthTrx = await sumer.supply(Sumer.ETH, 2)
    await supplyEthTrx.wait(1)

    const enterEthMarket = await sumer.enterMarkets(Sumer.ETH)
    await enterEthMarket.wait(1)

    const borrowUsdcTrx = await sumer.borrow(Sumer.USDC, 5, { gasLimit: 600000 })
    await borrowUsdcTrx.wait(1)

    const supplyUsdcTrx = await sumer.supply(Sumer.USDC, 2, true)
    const receipt = await supplyUsdcTrx.wait(1)

    const numEvents = receipt.events.length
    const events = receipt.events.map((e) => e.event)

    const numEventsExpected = 3

    assert.equal(numEvents, numEventsExpected)
    assert.equal(events.includes('AccrueInterest'), true)
    assert.equal(events.includes('Failure'), true)
  })

  it('fails cToken.supply asset type', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [supply] | Argument `asset` cannot be supplied.'
    try {
      const trx = await sumer.supply(null, 10) // bad asset type
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails cToken.supply bad amount', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [supply] | Argument `amount` must be a string, number, or BigNumber.'
    try {
      const trx = await sumer.supply('ETH', null) // bad amount
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('runs cToken.redeem ETH', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const supplyEthTrx = await sumer.supply(Sumer.ETH, 1)
    await supplyEthTrx.wait(1)

    const trx = await sumer.redeem(Sumer.ETH, 1)
    const receipt = await trx.wait(1)

    const numEvents = receipt.events.length
    const events = receipt.events.map((e) => e.event)

    const numEventsExpected = 4

    assert.equal(numEvents, numEventsExpected)
    assert.equal(events.includes('AccrueInterest'), true)
    assert.equal(events.includes('Redeem'), true)
    assert.equal(events.includes('Transfer'), true)
  })

  it('runs cToken.redeem USDC', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const supplyEthTrx = await sumer.supply(Sumer.ETH, 2)
    await supplyEthTrx.wait(1)

    const enterEthMarket = await sumer.enterMarkets(Sumer.ETH)
    await enterEthMarket.wait(1)

    const borrowUsdcTrx = await sumer.borrow(Sumer.USDC, 5, { gasLimit: 600000 })
    await borrowUsdcTrx.wait(1)

    const supplyUsdcTrx = await sumer.supply(Sumer.USDC, 2)
    await supplyUsdcTrx.wait(1)

    const trx = await sumer.redeem(Sumer.USDC, 2)
    const receipt = await trx.wait(1)

    const numEvents = receipt.events.length
    const events = receipt.events.map((e) => e.event)

    let numbTransfers = 0
    events.forEach((e) => {
      if (e === 'Transfer') numbTransfers++
    })

    const numEventsExpected = 5
    const numbTransfersExpected = 2

    assert.equal(numEvents, numEventsExpected)
    assert.equal(numbTransfers, numbTransfersExpected)
    assert.equal(events.includes('AccrueInterest'), true)
    assert.equal(events.includes('Redeem'), true)
    assert.equal(events.includes('Transfer'), true)
  })

  it('runs cToken.redeem cUSDC', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const supplyEthTrx = await sumer.supply(Sumer.ETH, 2)
    await supplyEthTrx.wait(1)

    const enterEthMarket = await sumer.enterMarkets(Sumer.ETH)
    await enterEthMarket.wait(1)

    const borrowUsdcTrx = await sumer.borrow(Sumer.USDC, 5, { gasLimit: 600000 })
    await borrowUsdcTrx.wait(1)

    const supplyUsdcTrx = await sumer.supply(Sumer.USDC, 2)
    await supplyUsdcTrx.wait(1)

    const trx = await sumer.redeem(Sumer.cUSDC, 2)
    const receipt = await trx.wait(1)

    const numEvents = receipt.events.length
    const events = receipt.events.map((e) => e.event)

    let numbTransfers = 0
    events.forEach((e) => {
      if (e === 'Transfer') numbTransfers++
    })

    const numEventsExpected = 5
    const numbTransfersExpected = 2

    assert.equal(numEvents, numEventsExpected)
    assert.equal(numbTransfers, numbTransfersExpected)
    assert.equal(events.includes('AccrueInterest'), true)
    assert.equal(events.includes('Redeem'), true)
    assert.equal(events.includes('Transfer'), true)
  })

  it('fails cToken.redeem bad asset', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [redeem] | Argument `asset` must be a non-empty string.'
    try {
      const trx = await sumer.redeem(null, 2) // bad asset
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails cToken.redeem invalid asset', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [redeem] | Argument `asset` is not supported.'
    try {
      const trx = await sumer.redeem('UUUU', 2) // invalid asset
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails cToken.redeem invalid cToken', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [redeem] | Argument `asset` is not supported.'
    try {
      const trx = await sumer.redeem('cUUUU', 2) // invalid asset
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails cToken.redeem bad amount', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [redeem] | Argument `amount` must be a string, number, or BigNumber.'
    try {
      const trx = await sumer.redeem(Sumer.cUSDC, null) // bad amount
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('runs cToken.borrow USDC', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const supplyEthTrx = await sumer.supply(Sumer.ETH, 2)
    await supplyEthTrx.wait(1)

    const enterEthMarket = await sumer.enterMarkets(Sumer.ETH)
    await enterEthMarket.wait(1)

    const trx = await sumer.borrow(Sumer.USDC, 5, { gasLimit: 600000 })
    const receipt = await trx.wait(1)

    const numEvents = receipt.events.length
    const events = receipt.events.map((e) => e.event)

    const numEventsExpected = 4

    assert.equal(numEvents, numEventsExpected)
    assert.equal(events.includes('AccrueInterest'), true)
    assert.equal(events.includes('Borrow'), true)
    assert.equal(events.includes('Transfer'), true)
  })

  it('runs cToken.borrow ETH', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const supplyEthTrx = await sumer.supply(Sumer.ETH, 10)
    await supplyEthTrx.wait(1)

    const enterEthMarket = await sumer.enterMarkets(Sumer.ETH)
    await enterEthMarket.wait(1)

    const trx = await sumer.borrow(Sumer.ETH, 1, { gasLimit: 600000 })
    const receipt = await trx.wait(1)

    const events = receipt.events.map((e) => e.event)

    assert.equal(events.includes('AccrueInterest'), true)
    assert.equal(events.includes('Borrow'), true)
  })

  it('fails cToken.borrow invalid asset', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [borrow] | Argument `asset` cannot be borrowed.'
    try {
      const trx = await sumer.borrow('UUUU', 5) // invalid asset
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails cToken.borrow bad amount', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [borrow] | Argument `amount` must be a string, number, or BigNumber.'
    try {
      const trx = await sumer.borrow(Sumer.USDC, null) // bad amount
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('runs cToken.repayBorrow USDC', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const supplyEthTrx = await sumer.supply(Sumer.ETH, 2)
    await supplyEthTrx.wait(1)

    const enterEthMarket = await sumer.enterMarkets(Sumer.ETH)
    await enterEthMarket.wait(1)

    const borrowTrx = await sumer.borrow(Sumer.USDC, 5, { gasLimit: 600000 })
    await borrowTrx.wait(1)

    const trx = await sumer.repayBorrow(Sumer.USDC, 5, null, false, { gasLimit: 600000 })
    const receipt = await trx.wait(1)

    const numEvents = receipt.events.length
    const events = receipt.events.map((e) => e.event)

    const numEventsExpected = 4

    assert.equal(numEvents, numEventsExpected)
    assert.equal(events.includes('AccrueInterest'), true)
    assert.equal(events.includes('RepayBorrow'), true)
    assert.equal(events.includes('Transfer'), true)
  })

  it('runs cToken.repayBorrow ETH', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const supplyEthTrx = await sumer.supply(Sumer.ETH, 10)
    await supplyEthTrx.wait(1)

    const enterEthMarket = await sumer.enterMarkets(Sumer.ETH)
    await enterEthMarket.wait(1)

    const borrowTrx = await sumer.borrow(Sumer.ETH, 1, { gasLimit: 600000 })
    await borrowTrx.wait(1)

    const trx = await sumer.repayBorrow(Sumer.ETH, 1, null, false, { gasLimit: 600000 })
    const receipt = await trx.wait(1)

    const numEvents = receipt.events.length
    const events = receipt.events.map((e) => e.event)

    const numEventsExpected = 3

    assert.equal(numEvents, numEventsExpected)
    assert.equal(events.includes('AccrueInterest'), true)
    assert.equal(events.includes('RepayBorrow'), true)
  })

  it('runs cToken.repayBorrow behalf USDC', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const sumer2 = new Sumer(providerUrl, {
      privateKey: acc2.privateKey,
    })

    const supplyEthTrx2 = await sumer2.supply(Sumer.ETH, 2)
    await supplyEthTrx2.wait(1)

    const enterEthMarket2 = await sumer2.enterMarkets(Sumer.ETH)
    await enterEthMarket2.wait(1)

    const borrowTrx2 = await sumer2.borrow(Sumer.USDC, 5, { gasLimit: 600000 })
    await borrowTrx2.wait(1)

    const supplyEthTrx = await sumer.supply(Sumer.ETH, 2)
    await supplyEthTrx.wait(1)

    const enterEthMarket = await sumer.enterMarkets(Sumer.ETH)
    await enterEthMarket.wait(1)

    const borrowTrx = await sumer.borrow(Sumer.USDC, 5, { gasLimit: 600000 })
    await borrowTrx.wait(1)

    // acc1 repays USDCborrow on behalf of acc2
    const trx = await sumer.repayBorrow(Sumer.USDC, 5, acc2.address, false, { gasLimit: 600000 })
    const receipt = await trx.wait(1)

    const numEvents = receipt.events.length
    const events = receipt.events.map((e) => e.event)
    const repayBorrowEvent = receipt.events.find((e) => e.event === 'RepayBorrow')
    const payer = repayBorrowEvent.args[0].toLowerCase()
    const borrower = repayBorrowEvent.args[1].toLowerCase()

    const payerExpected = acc1.address.toLowerCase()
    const borrowerExpected = acc2.address.toLowerCase()
    const numEventsExpected = 4

    assert.equal(payer, payerExpected)
    assert.equal(borrower, borrowerExpected)
    assert.equal(numEvents, numEventsExpected)
    assert.equal(events.includes('AccrueInterest'), true)
    assert.equal(events.includes('RepayBorrow'), true)
    assert.equal(events.includes('Transfer'), true)
  })

  it('runs cToken.repayBorrow behalf ETH', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const sumer2 = new Sumer(providerUrl, {
      privateKey: acc2.privateKey,
    })

    const supplyEthTrx = await sumer2.supply(Sumer.ETH, 10)
    await supplyEthTrx.wait(1)

    const enterEthMarket = await sumer2.enterMarkets(Sumer.ETH)
    await enterEthMarket.wait(1)

    const borrowTrx = await sumer2.borrow(Sumer.ETH, 1, { gasLimit: 600000 })
    await borrowTrx.wait(1)

    const trx = await sumer.repayBorrow(Sumer.ETH, 1, acc2.address, false, { gasLimit: 600000 })
    const receipt = await trx.wait(1)

    const numEvents = receipt.events.length
    const events = receipt.events.map((e) => e.event)
    const repayBorrowEvent = receipt.events.find((e) => e.event === 'RepayBorrow')
    const payer = repayBorrowEvent.args[0].toLowerCase()
    const borrower = repayBorrowEvent.args[1].toLowerCase()

    const payerExpected = acc1.address.toLowerCase()
    const borrowerExpected = acc2.address.toLowerCase()

    const numEventsExpected = 3

    assert.equal(numEvents, numEventsExpected)
    assert.equal(events.includes('AccrueInterest'), true)
    assert.equal(events.includes('RepayBorrow'), true)
  })

  it('fails cToken.repayBorrow bad asset', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [repayBorrow] | Argument `asset` is not supported.'
    try {
      const trx = await sumer.repayBorrow(null, 1, acc2.address, false) // bad asset
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails cToken.repayBorrow invalid asset', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [repayBorrow] | Argument `asset` is not supported.'
    try {
      const trx = await sumer.repayBorrow('xxxx', 1, acc2.address, false) // invalid asset
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails cToken.repayBorrow bad amount', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [repayBorrow] | Argument `amount` must be a string, number, or BigNumber.'
    try {
      const trx = await sumer.repayBorrow('USDC', null, acc2.address, false) // invalid asset
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails cToken.repayBorrow behalf address', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [repayBorrow] | Invalid `borrower` address.'
    try {
      const trx = await sumer.repayBorrow('USDC', 1, '0xbadaddress', false) // bad address
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })
}
