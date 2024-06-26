/**
 * @file cToken
 * @desc These methods facilitate interactions with the cToken smart
 *     contracts.
 */

import { ethers, BigNumberish, ContractTransactionResponse, Wallet } from 'ethers'
import * as eth from './eth'
import { netId } from './helpers'
import { getAddress, isCTokenAllowed, isUnderlyAllowed, getDecimals, isEther } from './constants'
import { abi } from './abi'
import { CallOptions, TrxResponse } from './types'
import BN from 'bignumber.js'
import { CErc20__factory } from './typechain'

/**
 * Supplies the user's Ethereum asset to the Sumer Protocol.
 *
 * @param {string} asset A string of the asset to supply.
 * @param {number | string} amount A string, number
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
 * const sumer = new Sumer(window.ethereum);
 *
 * // Ethers.js overrides are an optional 3rd parameter for `supply`
 * // const trxOptions = { gasLimit: 250000, mantissa: false };
 *
 * (async function() {
 *
 *   console.log('Supplying ETH to the Sumer Protocol...');
 *   const trx = await sumer.supply(Sumer.ETH, 1);
 *   console.log('Ethers.js transaction object', trx);
 *
 * })().catch(console.error);
 * ```
 */
export async function supply(
  asset: string,
  amount: string | number,
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

  if (typeof amount !== 'number' && typeof amount !== 'string') {
    throw Error(errorPrefix + 'Argument `amount` must be a string, number.')
  }

  const assetDecimals = getDecimals(this._network.name, asset)

  let amountBN = new BN(amount.toString())
  if (!options.mantissa) {
    amountBN = amountBN.times(`1e${assetDecimals}`)
  }

  if (isEther(this._network.name, cTokenName)) {
    options.abi = abi.CEther
  } else {
    options.abi = abi.CErc20
  }

  options._sumerProvider = this._provider

  if (!isEther(this._network.name, cTokenName) && noApprove !== true) {
    const underlyingAddress = getAddress(this._network.name, asset)
    let userAddress = this._provider.address

    if (!userAddress && this._provider.getAddress) {
      userAddress = await this._provider.getAddress()
    }

    // Check allowance
    const allowance = await eth.read(underlyingAddress, 'allowance', [userAddress, cTokenAddress], options)

    const notEnough = amountBN.gt(String(allowance))

    if (notEnough) {
      // ERC-20 approve transaction
      await eth.trx(underlyingAddress, 'approve', [cTokenAddress, amountBN.toFixed()], options)
    }
  }

  const parameters = []
  if (isEther(this._network.name, cTokenName)) {
    options.value = amountBN.toFixed()
  } else {
    parameters.push(amountBN.toFixed())
  }

  console.log(`Call mint on ${cTokenName}:${cTokenAddress} with ${amountBN.toString()} `)
  return eth.trx(cTokenAddress, 'mint', parameters, options)
}

/**
 * Redeems the user's Ethereum asset from the Sumer Protocol.
 *
 * @param {string} asset A string of the asset to redeem, or its cToken name.
 * @param {number | string} amount A string, number
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
 * const sumer = new Sumer(window.ethereum);
 *
 * (async function() {
 *
 *   console.log('Redeeming ETH...');
 *   const trx = await sumer.redeem(Sumer.ETH, 1); // also accepts cToken args
 *   console.log('Ethers.js transaction object', trx);
 *
 * })().catch(console.error);
 * ```
 */
export async function redeem(asset: string, amount: string | number, options: CallOptions = {}): Promise<TrxResponse> {
  await netId(this)
  const errorPrefix = 'Sumer [redeem] | '

  console.log(`Sumer redeem ${amount} ${asset}`)
  if (typeof asset !== 'string' || asset.length < 1) {
    throw Error(errorPrefix + 'Argument `asset` must be a non-empty string.')
  }

  const assetIsCToken = asset.includes('sdr')

  const cTokenName = assetIsCToken ? asset : 'sdr' + asset
  const cTokenAddress = getAddress(this._network.name, cTokenName)

  const underlyingName = assetIsCToken ? asset.slice(3, asset.length) : asset

  if (!isCTokenAllowed(this._network.name, cTokenName) || !isUnderlyAllowed(this._network.name, underlyingName)) {
    throw Error(errorPrefix + `Asset '${cTokenName}' is not supported.`)
  }

  if (typeof amount !== 'number' && typeof amount !== 'string') {
    throw Error(errorPrefix + 'Argument `amount` must be a string, number.')
  }

  let amountBN = new BN(amount.toString())
  if (!options.mantissa) {
    const assetDecimals = getDecimals(this._network.name, asset)
    if (assetDecimals <= 0) {
      throw Error(`Asset ${asset} decimals is configured wrong as ${assetDecimals} `)
    }
    amountBN = amountBN.times(`1e${assetDecimals}`)
  }

  const trxOptions: CallOptions = {
    ...options,
    _sumerProvider: this._provider,
    abi: isEther(this._network.name, cTokenName) ? abi.CEther : abi.CErc20,
  }
  const parameters = [amountBN.toFixed()]
  const method = assetIsCToken ? 'redeem' : 'redeemUnderlying'

  console.log(`Call ${method} on ${cTokenName}:${cTokenAddress} with ${amountBN.toString()}`)
  return eth.trx(cTokenAddress, method, parameters, trxOptions)
}

/**
 * Borrows an Ethereum asset from the Sumer Protocol for the user. The user's
 *     address must first have supplied collateral and entered a corresponding
 *     market.
 *
 * @param {string} asset A string of the asset to borrow (must be a supported
 *     underlying asset).
 * @param {number | string} amount A string, number
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
 * const sumer = new Sumer(window.ethereum);
 *
 * (async function() {
 *
 *   const daiScaledUp = '32000000000000000000';
 *   const trxOptions = { mantissa: true };
 *
 *   console.log('Borrowing 32 Dai...');
 *   const trx = await sumer.borrow(Sumer.DAI, daiScaledUp, trxOptions);
 *
 *   console.log('Ethers.js transaction object', trx);
 *
 * })().catch(console.error);
 * ```
 */
export async function borrow(asset: string, amount: string | number, options: CallOptions = {}): Promise<TrxResponse> {
  await netId(this)
  const errorPrefix = 'Sumer [borrow] | '

  console.log(`Sumer borrow ${amount} ${asset}`)
  const cTokenName = 'sdr' + asset
  const cTokenAddress = getAddress(this._network.name, cTokenName)

  if (!cTokenAddress || !isUnderlyAllowed(this._network.name, asset)) {
    throw Error(errorPrefix + 'Argument `asset` cannot be borrowed.')
  }

  if (typeof amount !== 'number' && typeof amount !== 'string') {
    throw Error(errorPrefix + 'Argument `amount` must be a string, number.')
  }

  let amountBN = new BN(amount.toString())
  if (!options.mantissa) {
    const assetDecimals = getDecimals(this._network.name, asset)
    if (assetDecimals <= 0) {
      throw Error(`Asset ${asset} decimals is configured wrong as ${assetDecimals} `)
    }
    amountBN = amountBN.times(`1e${assetDecimals}`)
  }

  const trxOptions: CallOptions = {
    ...options,
    _sumerProvider: this._provider,
  }
  const parameters = [amountBN.toFixed()]
  trxOptions.abi = isEther(this._network.name, cTokenName) ? abi.CEther : abi.CErc20

  console.log(`Call borrow on ${cTokenName}:${cTokenAddress} with ${amount.toString()}`)
  return eth.trx(cTokenAddress, 'borrow', parameters, trxOptions)
}

/**
 * Repays a borrowed Ethereum asset for the user or on behalf of another
 *     Ethereum address.
 *
 * @param {string} asset A string of the asset that was borrowed (must be a
 *     supported underlying asset).
 * @param {number | string} amount A string, number
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
 * const sumer = new Sumer(window.ethereum);
 *
 * (async function() {
 *
 *   console.log('Repaying Dai borrow...');
 *   const address = null; // set this to any address to repayBorrowBehalf
 *   const trx = await sumer.repayBorrow(Sumer.DAI, 32, address);
 *
 *   console.log('Ethers.js transaction object', trx);
 *
 * })().catch(console.error);
 * ```
 */
export async function repayBorrow(
  asset: string,
  amount: string | number,
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

  if (typeof amount !== 'number' && typeof amount !== 'string') {
    throw Error(errorPrefix + 'Argument `amount` must be a string, number.')
  }

  const method = ethers.isAddress(borrower) ? 'repayBorrowBehalf' : 'repayBorrow'
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

  const trxOptions: CallOptions = {
    ...options,
    _sumerProvider: this._provider,
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parameters: any[] = method === 'repayBorrowBehalf' ? [borrower] : []
  if (isEther(this._network.name, cTokenName)) {
    trxOptions.value = amountBN.toFixed()
    trxOptions.abi = abi.CEther
  } else {
    parameters.push(amountBN.toFixed())
    trxOptions.abi = abi.CErc20
  }

  if (!isEther(this._network.name, cTokenName) && noApprove !== true) {
    const underlyingAddress = getAddress(this._network.name, asset)
    let userAddress = this._provider.address

    if (!userAddress && this._provider.getAddress) {
      userAddress = await this._provider.getAddress()
    }

    // Check allowance
    const allowance = await eth.read(underlyingAddress, 'allowance', [userAddress, cTokenAddress], trxOptions)

    const notEnough = amountBN.gt(String(allowance))

    if (notEnough) {
      // ERC-20 approve transaction
      await eth.trx(underlyingAddress, 'approve', [cTokenAddress, amountBN.toFixed()], trxOptions)
    }
  }

  console.log(`Call repayBorrow on ${cTokenName}:${cTokenAddress} with ${amountBN.toString()}`)
  return eth.trx(cTokenAddress, method, parameters, trxOptions)
}

export async function liquidateBorrow(
  repayToken: string,
  borrower: string,
  amount: BigNumberish,
  cTokenCollateral: string,
): Promise<ContractTransactionResponse> {
  const cerc20 = CErc20__factory.connect(repayToken, this._provider)
  return cerc20.liquidateBorrow(borrower, amount, cTokenCollateral)
}

export async function borrowCollateralAndMintSynthetic(
  asset: string,
  collateral: string,
  mintAmount: string | number,
  options: CallOptions = {},
): Promise<TrxResponse> {
  await netId(this)
  const errorPrefix = 'Sumer [borrowCollateralAndMintSynthetic] | '

  console.log(`Sumer borrowCollateralAndMintSynthetic ${mintAmount} ${asset} with collateral ${collateral}`)
  const suTokenName = 'sdr' + asset
  const suTokenAddress = getAddress(this._network.name, suTokenName)

  if (!suTokenAddress || !isUnderlyAllowed(this._network.name, asset)) {
    throw Error(errorPrefix + 'Argument `asset` is not supported.')
  }

  const cTokenName = 'sdr' + collateral
  const cTokenAddress = getAddress(this._network.name, cTokenName)

  if (!cTokenAddress || !isUnderlyAllowed(this._network.name, collateral)) {
    throw Error(errorPrefix + 'Argument `collateral` is not supported.')
  }

  if (typeof mintAmount !== 'number' && typeof mintAmount !== 'string') {
    throw Error(errorPrefix + 'Argument `mintAmount` must be a string, number.')
  }

  const assetDecimals = getDecimals(this._network.name, asset)
  if (assetDecimals <= 0) {
    throw Error(`Asset ${asset} decimals is configured wrong as ${assetDecimals} `)
  }

  let amountBN = new BN(mintAmount.toString())
  if (!options.mantissa) {
    amountBN = amountBN.times(`1e${assetDecimals}`)
  }

  const trxOptions: CallOptions = {
    ...options,
    _sumerProvider: this._provider,
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parameters: any[] = [cTokenAddress, amountBN.toFixed(0)]
  console.log(`Call borrowCollateralAndMintSynthetic on ${suTokenName}:${suTokenAddress} with ${amountBN.toFixed(0)}`)
  return eth.trx(cTokenAddress, 'borrowCollateralAndMintSynthetic', parameters, trxOptions)
}
