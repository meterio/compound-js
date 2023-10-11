/**
 * @file cToken
 * @desc These methods facilitate interactions with the cToken smart
 *     contracts.
 */

import { ethers } from 'ethers'
import * as eth from './eth'
import { netId } from './helpers'
import { getAddress, abi, isCTokenAllowed, isUnderlyAllowed, getDecimals, isEther } from './constants'
import { BigNumber } from '@ethersproject/bignumber/lib/bignumber'
import { CallOptions, TrxResponse } from './types'
import BN from 'bignumber.js'
/**
 * Supplies the user's Ethereum asset to the Compound Protocol.
 *
 * @param {string} asset A string of the asset to supply.
 * @param {number | string | BigNumber} amount A string, number, or BigNumber
 *     object of the amount of an asset to supply. Use the `mantissa` boolean in
 *     the `options` parameter to indicate if this value is scaled up (so there
 *     are no decimals) or in its natural scale.
 * @param {boolean} noApprove Explicitly prevent this method from attempting an
 *     ERC-20 `approve` transaction prior to sending the `mint` transaction.
 * @param {CallOptions} [options] Call options and Ethers.js overrides for the
 *     transaction. A passed `gasLimit` will be used in both the `approve` (if
 *     not supressed) and `mint` transactions.
 *
 * @returns {object} Returns an Ethers.js transaction object of the supply
 *     transaction.
 *
 * @example
 *
 * ```
 * const compound = new Compound(window.ethereum);
 *
 * // Ethers.js overrides are an optional 3rd parameter for `supply`
 * // const trxOptions = { gasLimit: 250000, mantissa: false };
 *
 * (async function() {
 *
 *   console.log('Supplying ETH to the Compound Protocol...');
 *   const trx = await compound.supply(Compound.ETH, 1);
 *   console.log('Ethers.js transaction object', trx);
 *
 * })().catch(console.error);
 * ```
 */
export async function supply(
  asset: string,
  amount: string | number | BigNumber,
  noApprove = false,
  options: CallOptions = {},
): Promise<TrxResponse> {
  await netId(this)
  const errorPrefix = 'Sumer [supply] | '

  console.log(`Sumer supply ${amount} ${asset}`)
  const cTokenName = 'sdr' + asset
  const cTokenAddress = getAddress(this._network.name, cTokenName)

  if (!cTokenAddress || !isUnderlyAllowed(this._network.name, asset)) {
    throw Error(errorPrefix + `Asset ${asset} cannot be supplied.`)
  }

  if (typeof amount !== 'number' && typeof amount !== 'string' && !ethers.BigNumber.isBigNumber(amount)) {
    throw Error(errorPrefix + 'Argument `amount` must be a string, number, or BigNumber.')
  }

  const assetDecimals = getDecimals(this._network.name, asset)

  let amountBN = new BN(amount.toString())
  if (!options.mantissa) {
    amountBN = amountBN.times(`1e${assetDecimals}`)
  }

  const amountEBN = ethers.BigNumber.from(amountBN.toFixed(0))

  if (isEther(this._network.name, cTokenName)) {
    options.abi = abi.cEther
  } else {
    options.abi = abi.cErc20
  }

  options._compoundProvider = this._provider

  if (!isEther(this._network.name, cTokenName) && noApprove !== true) {
    const underlyingAddress = getAddress(this._network.name, asset)
    let userAddress = this._provider.address

    if (!userAddress && this._provider.getAddress) {
      userAddress = await this._provider.getAddress()
    }

    // Check allowance
    const allowance = await eth.read(underlyingAddress, 'allowance', [userAddress, cTokenAddress], options)

    const notEnough = allowance.lt(amountEBN)

    if (notEnough) {
      // ERC-20 approve transaction
      await eth.trx(underlyingAddress, 'approve', [cTokenAddress, amountEBN], options)
    }
  }

  const parameters = []
  if (isEther(this._network.name, cTokenName)) {
    options.value = amountEBN
  } else {
    parameters.push(amountEBN)
  }

  console.log(`Call mint on ${cTokenName}:${cTokenAddress} with ${amountEBN.toString()} `)
  return eth.trx(cTokenAddress, 'mint', parameters, options)
}

/**
 * Redeems the user's Ethereum asset from the Compound Protocol.
 *
 * @param {string} asset A string of the asset to redeem, or its cToken name.
 * @param {number | string | BigNumber} amount A string, number, or BigNumber
 *     object of the amount of an asset to redeem. Use the `mantissa` boolean in
 *     the `options` parameter to indicate if this value is scaled up (so there
 *     are no decimals) or in its natural scale. This can be an amount of
 *     cTokens or underlying asset (use the `asset` parameter to specify).
 * @param {CallOptions} [options] Call options and Ethers.js overrides for the
 *     transaction.
 *
 * @returns {object} Returns an Ethers.js transaction object of the redeem
 *     transaction.
 *
 * @example
 *
 * ```
 * const compound = new Compound(window.ethereum);
 *
 * (async function() {
 *
 *   console.log('Redeeming ETH...');
 *   const trx = await compound.redeem(Compound.ETH, 1); // also accepts cToken args
 *   console.log('Ethers.js transaction object', trx);
 *
 * })().catch(console.error);
 * ```
 */
export async function redeem(
  asset: string,
  amount: string | number | BigNumber,
  options: CallOptions = {},
): Promise<TrxResponse> {
  await netId(this)
  const errorPrefix = 'Sumer [redeem] | '

  console.log(`Sumer redeem ${amount} ${asset}`)
  if (typeof asset !== 'string' || asset.length < 1) {
    throw Error(errorPrefix + 'Argument `asset` must be a non-empty string.')
  }

  const assetIsCToken = asset.includes('sdr')

  const cTokenName = assetIsCToken ? asset : 'sdr' + asset
  const cTokenAddress = getAddress(this._network.name, cTokenName)

  const underlyingName = assetIsCToken ? asset.slice(1, asset.length) : asset

  if (!isCTokenAllowed(this._network.name, cTokenName) || !isUnderlyAllowed(this._network.name, underlyingName)) {
    throw Error(errorPrefix + `Asset '${cTokenName}' is not supported.`)
  }

  if (typeof amount !== 'number' && typeof amount !== 'string' && !ethers.BigNumber.isBigNumber(amount)) {
    throw Error(errorPrefix + 'Argument `amount` must be a string, number, or BigNumber.')
  }

  let amountBN = new BN(amount.toString())
  if (!options.mantissa) {
    const assetDecimals = getDecimals(this._network.name, asset)
    if (assetDecimals <= 0) {
      throw Error(`Asset ${asset} decimals is configured wrong as ${assetDecimals} `)
    }
    amountBN = amountBN.times(`1e${assetDecimals}`)
  }

  const amountEBN = ethers.BigNumber.from(amountBN.toFixed(0))

  const trxOptions: CallOptions = {
    ...options,
    _compoundProvider: this._provider,
    abi: isEther(this._network.name, cTokenName) ? abi.cEther : abi.cErc20,
  }
  const parameters = [amountEBN]
  const method = assetIsCToken ? 'redeem' : 'redeemUnderlying'

  console.log(`Call ${method} on ${cTokenName}:${cTokenAddress} with ${amountEBN.toString()}`)
  return eth.trx(cTokenAddress, method, parameters, trxOptions)
}

/**
 * Borrows an Ethereum asset from the Compound Protocol for the user. The user's
 *     address must first have supplied collateral and entered a corresponding
 *     market.
 *
 * @param {string} asset A string of the asset to borrow (must be a supported
 *     underlying asset).
 * @param {number | string | BigNumber} amount A string, number, or BigNumber
 *     object of the amount of an asset to borrow. Use the `mantissa` boolean in
 *     the `options` parameter to indicate if this value is scaled up (so there
 *     are no decimals) or in its natural scale.
 * @param {CallOptions} [options] Call options and Ethers.js overrides for the
 *     transaction.
 *
 * @returns {object} Returns an Ethers.js transaction object of the borrow
 *     transaction.
 *
 * @example
 *
 * ```
 * const compound = new Compound(window.ethereum);
 *
 * (async function() {
 *
 *   const daiScaledUp = '32000000000000000000';
 *   const trxOptions = { mantissa: true };
 *
 *   console.log('Borrowing 32 Dai...');
 *   const trx = await compound.borrow(Compound.DAI, daiScaledUp, trxOptions);
 *
 *   console.log('Ethers.js transaction object', trx);
 *
 * })().catch(console.error);
 * ```
 */
export async function borrow(
  asset: string,
  amount: string | number | BigNumber,
  options: CallOptions = {},
): Promise<TrxResponse> {
  await netId(this)
  const errorPrefix = 'Sumer [borrow] | '

  console.log(`Sumer borrow ${amount} ${asset}`)
  const cTokenName = 'sdr' + asset
  const cTokenAddress = getAddress(this._network.name, cTokenName)

  if (!cTokenAddress || !isUnderlyAllowed(this._network.name, asset)) {
    throw Error(errorPrefix + 'Argument `asset` cannot be borrowed.')
  }

  if (typeof amount !== 'number' && typeof amount !== 'string' && !ethers.BigNumber.isBigNumber(amount)) {
    throw Error(errorPrefix + 'Argument `amount` must be a string, number, or BigNumber.')
  }

  let amountBN = new BN(amount.toString())
  if (!options.mantissa) {
    const assetDecimals = getDecimals(this._network.name, asset)
    if (assetDecimals <= 0) {
      throw Error(`Asset ${asset} decimals is configured wrong as ${assetDecimals} `)
    }
    amountBN = amountBN.times(`1e${assetDecimals}`)
  }
  const amountEBN = ethers.BigNumber.from(amountBN.toFixed(0))

  const trxOptions: CallOptions = {
    ...options,
    _compoundProvider: this._provider,
  }
  const parameters = [amountEBN]
  trxOptions.abi = isEther(this._network.name, cTokenName) ? abi.cEther : abi.cErc20

  console.log(`Call borrow on ${cTokenName}:${cTokenAddress} with ${amount.toString()}`)
  return eth.trx(cTokenAddress, 'borrow', parameters, trxOptions)
}

/**
 * Repays a borrowed Ethereum asset for the user or on behalf of another
 *     Ethereum address.
 *
 * @param {string} asset A string of the asset that was borrowed (must be a
 *     supported underlying asset).
 * @param {number | string | BigNumber} amount A string, number, or BigNumber
 *     object of the amount of an asset to borrow. Use the `mantissa` boolean in
 *     the `options` parameter to indicate if this value is scaled up (so there
 *     are no decimals) or in its natural scale.
 * @param {string | null} [borrower] The Ethereum address of the borrower to
 *     repay an open borrow for. Set this to `null` if the user is repaying
 *     their own borrow.
 * @param {boolean} noApprove Explicitly prevent this method from attempting an
 *     ERC-20 `approve` transaction prior to sending the subsequent repayment
 *     transaction.
 * @param {CallOptions} [options] Call options and Ethers.js overrides for the
 *     transaction. A passed `gasLimit` will be used in both the `approve` (if
 *     not supressed) and `repayBorrow` or `repayBorrowBehalf` transactions.
 *
 * @returns {object} Returns an Ethers.js transaction object of the repayBorrow
 *     or repayBorrowBehalf transaction.
 *
 * @example
 *
 * ```
 * const compound = new Compound(window.ethereum);
 *
 * (async function() {
 *
 *   console.log('Repaying Dai borrow...');
 *   const address = null; // set this to any address to repayBorrowBehalf
 *   const trx = await compound.repayBorrow(Compound.DAI, 32, address);
 *
 *   console.log('Ethers.js transaction object', trx);
 *
 * })().catch(console.error);
 * ```
 */
export async function repayBorrow(
  asset: string,
  amount: string | number | BigNumber,
  borrower: string,
  noApprove = false,
  options: CallOptions = {},
): Promise<TrxResponse> {
  await netId(this)
  const errorPrefix = 'Sumer [repayBorrow] | '

  console.log(`Sumer repayBorrow ${amount} ${asset} for ${borrower}`)
  const cTokenName = 'sdr' + asset
  const cTokenAddress = getAddress(this._network.name, cTokenName)

  if (!cTokenAddress || !isUnderlyAllowed(this._network.name, asset)) {
    throw Error(errorPrefix + 'Argument `asset` is not supported.')
  }

  if (typeof amount !== 'number' && typeof amount !== 'string' && !ethers.BigNumber.isBigNumber(amount)) {
    throw Error(errorPrefix + 'Argument `amount` must be a string, number, or BigNumber.')
  }

  const method = ethers.utils.isAddress(borrower) ? 'repayBorrowBehalf' : 'repayBorrow'
  if (borrower && method === 'repayBorrow') {
    throw Error(errorPrefix + 'Invalid `borrower` address.')
  }
  const assetDecimals = getDecimals(this._network.name, asset)
  if (assetDecimals <= 0) {
    throw Error(`Asset ${asset} decimals is configured wrong as ${assetDecimals} `)
  }

  let amountBN = new BN(amount.toString())
  if (!options.mantissa) {
    amountBN = amountBN.times(`1e${assetDecimals}`)
  }

  const amountEBN = ethers.BigNumber.from(amountBN.toFixed(0))

  const trxOptions: CallOptions = {
    ...options,
    _compoundProvider: this._provider,
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parameters: any[] = method === 'repayBorrowBehalf' ? [borrower] : []
  if (isEther(this._network.name, cTokenName)) {
    trxOptions.value = amountEBN
    trxOptions.abi = abi.cEther
  } else {
    parameters.push(amountEBN)
    trxOptions.abi = abi.cErc20
  }

  if (!isEther(this._network.name, cTokenName) && noApprove !== true) {
    const underlyingAddress = getAddress(this._network.name, asset)
    let userAddress = this._provider.address

    if (!userAddress && this._provider.getAddress) {
      userAddress = await this._provider.getAddress()
    }

    // Check allowance
    const allowance = await eth.read(underlyingAddress, 'allowance', [userAddress, cTokenAddress], trxOptions)

    const notEnough = allowance.lt(amountEBN)

    if (notEnough) {
      // ERC-20 approve transaction
      await eth.trx(underlyingAddress, 'approve', [cTokenAddress, amountEBN], trxOptions)
    }
  }

  console.log(`Call repayBorrow on ${cTokenName}:${cTokenAddress} with ${amountEBN.toString()}`)
  return eth.trx(cTokenAddress, method, parameters, trxOptions)
}
