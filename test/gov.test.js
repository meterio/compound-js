const assert = require('assert')
const ethers = require('ethers')
const Sumer = require('../src/index.ts')
const providerUrl = 'http://localhost:8545'

const unlockedAddress = '0xa0df350d2637096571F7A701CBc1C5fdE30dF76A'
const unlockedPk = '0xb8c1b5c1d81f9475fdf2e334517d29f733bdfa40682207571b12fc1142cbf329'

module.exports = function suite([publicKeys, privateKeys]) {
  const acc1 = { address: publicKeys[0], privateKey: privateKeys[0] }

  it('runs gov.castVote', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    let address, method, params, votingIsClosed

    const nonspy = Sumer.eth.trx
    Sumer.eth.trx = function () {
      address = arguments[0]
      method = arguments[1]
      params = arguments[2]
      return nonspy.apply(this, arguments)
    }

    try {
      const voteTrx = await sumer.castVote(43, 1, {
        gasLimit: ethers.parseUnits('100000', 'wei'),
      })
      const receipt = await voteTrx.wait(1)
    } catch (err) {
      votingIsClosed = JSON.stringify(err).includes('GovernorBravo::castVoteInternal: voting is closed')
    }

    const addressExpected = Sumer.util.getAddress('GovernorBravo')
    const methodExpected = 'castVote'
    const paramsExpected = [43, 1]

    assert.equal(votingIsClosed, true)
    assert.equal(address, addressExpected)
    assert.equal(method, methodExpected)
    assert.equal(params[0], paramsExpected[0])
    assert.equal(params[1], paramsExpected[1])
  })

  it('fails gov.castVote bad proposalId', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [castVote] | Argument `proposalId` must be an integer.'
    try {
      const voteTrx = await sumer.castVote(null, 1) // bad proposalId
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails gov.castVote bad support', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [castVote] | Argument `support` must be an integer (0, 1, or 2).'
    try {
      const voteTrx = await sumer.castVote(11, 'abc') // bad support
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('runs gov.castVoteBySig closed vote', async function () {
    let address, method, params, votingIsClosed

    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const nonspy = Sumer.eth.trx
    Sumer.eth.trx = function () {
      address = arguments[0]
      method = arguments[1]
      params = arguments[2]
      return nonspy.apply(this, arguments)
    }

    const proposalId = 43
    const support = 1
    const voteSignature = {
      r: '0x8c6113af4858a5c423065261e51a6f2652072e123d1ca849e05f75636f766680',
      s: '0x1552df4943100711f6e0517c98bb8a4b81b4a2ddc5427c0aa4b8240a72cc0839',
      v: '0x1c',
    }

    try {
      const trx = await sumer.castVoteBySig(proposalId, support, voteSignature, {
        gasLimit: ethers.parseUnits('500000', 'wei'),
      })
      const receipt = await trx.wait(1)
    } catch (err) {
      votingIsClosed = JSON.stringify(err).includes('GovernorBravo::castVoteInternal: voting is closed')
    }

    const addressExpected = Sumer.util.getAddress('GovernorBravo')
    const methodExpected = 'castVoteBySig'
    const paramsExpected = [
      43,
      1,
      '0x1c',
      '0x8c6113af4858a5c423065261e51a6f2652072e123d1ca849e05f75636f766680',
      '0x1552df4943100711f6e0517c98bb8a4b81b4a2ddc5427c0aa4b8240a72cc0839',
    ]

    assert.equal(votingIsClosed, true)
    assert.equal(address, addressExpected)
    assert.equal(method, methodExpected)
    assert.equal(params[0], paramsExpected[0])
    assert.equal(params[1], paramsExpected[1])
    assert.equal(params[2], paramsExpected[2])
    assert.equal(params[3], paramsExpected[3])
    assert.equal(params[4], paramsExpected[4])
  })

  it('fails gov.castVoteBySig bad proposalId', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const proposalId = null
    const support = true
    const voteSignature = {
      r: '0x8c6113af4858a5c423065261e51a6f2652072e123d1ca849e05f75636f766680',
      s: '0x1552df4943100711f6e0517c98bb8a4b81b4a2ddc5427c0aa4b8240a72cc0839',
      v: '0x1c',
    }

    const errorMessage = 'Sumer [castVoteBySig] | Argument `proposalId` must be an integer.'
    try {
      const trx = await sumer.castVoteBySig(
        proposalId, // bad proposalId
        support,
        voteSignature,
      )
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails gov.castVoteBySig bad support', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const proposalId = 43
    const support = 'abc'
    const voteSignature = {
      r: '0x8c6113af4858a5c423065261e51a6f2652072e123d1ca849e05f75636f766680',
      s: '0x1552df4943100711f6e0517c98bb8a4b81b4a2ddc5427c0aa4b8240a72cc0839',
      v: '0x1c',
    }

    const errorMessage = 'Sumer [castVoteBySig] | Argument `support` must be an integer (0, 1, or 2).'
    try {
      const trx = await sumer.castVoteBySig(
        proposalId,
        support, // bad support
        voteSignature,
      )
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails gov.castVoteBySig bad signature', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const proposalId = 43
    const support = 1
    const voteSignature = 'abc'

    const errorMessage =
      'Sumer [castVoteBySig] | Argument `signature` must be an object that contains the v, r, and s pieces of an EIP-712 signature.'
    try {
      const trx = await sumer.castVoteBySig(
        proposalId,
        support,
        voteSignature, // bad signature
      )
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('runs gov.createVoteSignature ', async function () {
    const _sumer = new Sumer(providerUrl, {
      privateKey: unlockedPk,
    })

    const voteSignature = await _sumer.createVoteSignature(43, 1)

    const expectedSignature = {
      r: '0xfe5e182c4668df8378c8b17667067fdf13c1ea47dcf152fa6bdf10e629c6b59c',
      s: '0x2d66efa63dd8d8efee977e55c05c8d7568124d01fcd1b3663641b583ca639daa',
      v: '0x1c',
    }

    assert.equal(voteSignature.r, expectedSignature.r)
    assert.equal(voteSignature.s, expectedSignature.s)
    assert.equal(voteSignature.v, expectedSignature.v)
  })

  it('runs gov.castVoteWithReason ', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    let address, method, params, votingIsClosed

    const nonspy = Sumer.eth.trx
    Sumer.eth.trx = function () {
      address = arguments[0]
      method = arguments[1]
      params = arguments[2]
      return nonspy.apply(this, arguments)
    }

    try {
      const voteTrx = await sumer.castVoteWithReason(43, 1, 'Reason here', {
        gasLimit: ethers.parseUnits('100000', 'wei'),
      })
      const receipt = await voteTrx.wait(1)
    } catch (err) {
      votingIsClosed = JSON.stringify(err).includes('GovernorBravo::castVoteInternal: voting is closed')
    }

    const addressExpected = Sumer.util.getAddress('GovernorBravo')
    const methodExpected = 'castVoteWithReason'
    const paramsExpected = [43, 1, 'Reason here']

    assert.equal(votingIsClosed, true)
    assert.equal(address, addressExpected)
    assert.equal(method, methodExpected)
    assert.equal(params[0], paramsExpected[0])
    assert.equal(params[1], paramsExpected[1])
    assert.equal(params[2], paramsExpected[2])
  })

  it('fails gov.castVoteWithReason bad proposalId', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [castVoteWithReason] | Argument `proposalId` must be an integer.'
    try {
      const voteTrx = await sumer.castVoteWithReason(null, 1, 'Reason here') // bad proposalId
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails gov.castVoteWithReason bad support', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [castVoteWithReason] | Argument `support` must be an integer (0, 1, or 2).'
    try {
      const voteTrx = await sumer.castVoteWithReason(11, 'abc', 'Reason here') // bad support
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })

  it('fails gov.castVoteWithReason bad reason', async function () {
    const sumer = new Sumer(providerUrl, {
      privateKey: acc1.privateKey,
    })

    const errorMessage = 'Sumer [castVoteWithReason] | Argument `reason` must be a string.'
    try {
      const voteTrx = await sumer.castVoteWithReason(11, 1, 0) // bad reason
    } catch (e) {
      assert.equal(e.message, errorMessage)
    }
  })
}
