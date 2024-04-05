const assert = require('assert')
const ethers = require('ethers')
const comp = require('../src/comp.ts')
const Sumer = require('../src/index.ts')
const providerUrl = 'http://localhost:8545'

const unlockedAddress = '0xa0df350d2637096571F7A701CBc1C5fdE30dF76A'
const unlockedPk = '0xb8c1b5c1d81f9475fdf2e334517d29f733bdfa40682207571b12fc1142cbf329'

function getNonce(address, compAddress, _providerUrl) {
  return new Promise((resolve, reject) => {
    Sumer.eth
      .read(compAddress, 'function nonces(address) returns (uint)', [address], { provider: _providerUrl })
      .then(resolve)
      .catch(reject)
  })
}

module.exports = function suite([publicKeys, privateKeys]) {
  const acc1 = { address: publicKeys[0], privateKey: privateKeys[0] }

  it('runs comp.getCompBalance', async function () {
    const bal = await comp.getCompBalance(acc1.address, providerUrl)

    const expected = 0
    assert.equal(bal, expected)
  })

  it('fails comp.getCompBalance address string', async function () {
    const errorMessage = 'Sumer [getCompBalance] | Argument `_address` must be a string.'

    try {
      await comp.getCompBalance(1, providerUrl)
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails comp.getCompBalance address invalid', async function () {
    const errorMessage = 'Sumer [getCompBalance] | Argument `_address` must be a valid Ethereum address.'

    try {
      await comp.getCompBalance('bad_ethereum_address', providerUrl)
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('runs comp.getCompAccrued', async function () {
    const accrued = await comp.getCompAccrued(acc1.address, providerUrl)

    const expected = 0
    assert.equal(accrued, expected)
  })

  it('fails comp.getCompAccrued address string', async function () {
    const errorMessage = 'Sumer [getCompAccrued] | Argument `_address` must be a string.'

    try {
      await comp.getCompAccrued(1, providerUrl)
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails comp.getCompAccrued address invalid', async function () {
    const errorMessage = 'Sumer [getCompAccrued] | Argument `_address` must be a valid Ethereum address.'

    try {
      await comp.getCompAccrued('bad_ethereum_address', providerUrl)
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('runs comp.claimComp', async function () {
    let txReceipt

    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    try {
      const claimCompTx = await sumer.claimComp({
        gasLimit: ethers.parseUnits('2000000', 'wei'), // set when prices were unusually high
      })
      txReceipt = await claimCompTx.wait(1)
    } catch (error) {
      console.error('error', error)
      console.error('txReceipt', txReceipt)
    }

    const status = txReceipt.status
    const events = txReceipt.events.length

    const expectedStatus = 1
    const expectedEvents = 18

    assert.equal(status, expectedStatus)
    assert.equal(events, expectedEvents)
  })

  it('runs comp.delegate', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    let txReceipt

    try {
      const delegateTx = await sumer.delegate(acc1.address)
      txReceipt = await delegateTx.wait(1)
    } catch (error) {
      console.error('error', error)
      console.error('txReceipt', txReceipt)
    }

    const event = txReceipt.events[0].event
    const delegatee = txReceipt.events[0].args[2].toLowerCase()

    const expectedEvent = 'DelegateChanged'
    const expectedDelegatee = acc1.address.toLowerCase()

    assert.equal(event, expectedEvent)
    assert.equal(delegatee, expectedDelegatee)
  })

  it('fails comp.delegate address string', async function () {
    const errorMessage = 'Sumer [delegate] | Argument `_address` must be a string.'

    try {
      await comp.delegate(1, providerUrl)
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails comp.delegate address invalid', async function () {
    const errorMessage = 'Sumer [delegate] | Argument `_address` must be a valid Ethereum address.'

    try {
      await comp.delegate('bad_ethereum_address', providerUrl)
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('runs comp.createDelegateSignature', async function () {
    const _sumer = new Sumer(providerUrl, {
      privateKey: unlockedPk,
    })

    const expiry = 10e9
    const delegateSignature = await _sumer.createDelegateSignature(unlockedAddress, expiry)

    const expectedSignature = {
      r: '0x5d86ab46e1f827f07e9eb6a5955eaa2219e93f64a8c8406ace0d1f48b4c0c405',
      s: '0x710fc5e9a2f8f865739e9f149ebd8a5e8a613097676385db4f197cd0ecfa85bd',
      v: '0x1c',
    }

    assert.equal(delegateSignature.r, expectedSignature.r)
    assert.equal(delegateSignature.s, expectedSignature.s)
    assert.equal(delegateSignature.v, expectedSignature.v)
  })

  it('runs comp.delegateBySig', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const compAddress = Sumer.util.getAddress(Sumer.COMP)
    const nonce = +(await getNonce(acc1.address, compAddress, providerUrl)).toString()
    const expiry = 10e9
    const signature = await sumer.createDelegateSignature(acc1.address, expiry)

    const delegateTx = await sumer.delegateBySig(acc1.address, nonce, expiry, signature)

    const txReceipt = await delegateTx.wait(1)

    const toDelegate = txReceipt.events[0].args.toDelegate.toLowerCase()
    const expectedToDelegate = acc1.address.toLowerCase()

    assert.equal(toDelegate, expectedToDelegate)
  })

  it('fails comp.delegateBySig address string', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [delegateBySig] | Argument `_address` must be a string.'
    try {
      const delegateTx = await sumer.delegateBySig(
        123, // bad
        1,
        10e9,
        {
          r: '0x5d86ab46e1f827f07e9eb6a5955eaa2219e93f64a8c8406ace0d1f48b4c0c405',
          s: '0x710fc5e9a2f8f865739e9f149ebd8a5e8a613097676385db4f197cd0ecfa85bd',
          v: '0x1c',
        },
      )
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails comp.delegateBySig address invalid', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [delegateBySig] | Argument `_address` must be a valid Ethereum address.'
    try {
      const delegateTx = await sumer.delegateBySig(
        '0xbadaddress', // bad
        1,
        10e9,
        {
          r: '0x5d86ab46e1f827f07e9eb6a5955eaa2219e93f64a8c8406ace0d1f48b4c0c405',
          s: '0x710fc5e9a2f8f865739e9f149ebd8a5e8a613097676385db4f197cd0ecfa85bd',
          v: '0x1c',
        },
      )
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails comp.delegateBySig nonce', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [delegateBySig] | Argument `nonce` must be an integer.'
    try {
      const delegateTx = await sumer.delegateBySig(
        '0xa0df350d2637096571F7A701CBc1C5fdE30dF76A',
        'abc', // bad
        10e9,
        {
          r: '0x5d86ab46e1f827f07e9eb6a5955eaa2219e93f64a8c8406ace0d1f48b4c0c405',
          s: '0x710fc5e9a2f8f865739e9f149ebd8a5e8a613097676385db4f197cd0ecfa85bd',
          v: '0x1c',
        },
      )
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails comp.delegateBySig expiry', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [delegateBySig] | Argument `expiry` must be an integer.'
    try {
      const delegateTx = await sumer.delegateBySig(
        '0xa0df350d2637096571F7A701CBc1C5fdE30dF76A',
        1,
        null, // bad
        {
          r: '0x5d86ab46e1f827f07e9eb6a5955eaa2219e93f64a8c8406ace0d1f48b4c0c405',
          s: '0x710fc5e9a2f8f865739e9f149ebd8a5e8a613097676385db4f197cd0ecfa85bd',
          v: '0x1c',
        },
      )
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails comp.delegateBySig signature', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage =
      'Sumer [delegateBySig] | Argument `signature` must be an object that contains the v, r, and s pieces of an EIP-712 signature.'
    try {
      const delegateTx = await sumer.delegateBySig('0xa0df350d2637096571F7A701CBc1C5fdE30dF76A', 1, 10e9, {
        r: '0x5d86ab46e1f827f07e9eb6a5955eaa2219e93f64a8c8406ace0d1f48b4c0c405',
        s: '', // bad
        v: '0x1c',
      })
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })
}
