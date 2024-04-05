/**
 * @file Comptroller
 * @desc These methods facilitate interactions with the Comptroller smart
 *     contract.
 */

import * as eth from './eth'
import { netId } from './helpers'
import { getAddress, abi, isCTokenAllowed } from './constants'
import { CallOptions, TrxResponse } from './types'

/**
 * Enters the user's address into Sumer Protocol markets.
 *
 * @param {any[]} markets An array of strings of markets to enter, meaning use
 *     those supplied assets as collateral.
 * @param {CallOptions} [options] Call options and Ethers.js overrides for the
 *     transaction. A passed `gasLimit` will be used in both the `approve` (if
 *     not supressed) and `mint` transactions.
 *
 * @returns {object} Returns an Ethers.js transaction object of the enterMarkets
 *     transaction.
 *
 * @example
 *
 * ```
 * const sumer = new Sumer(window.ethereum);
 *
 * (async function () {
 *   const trx = await sumer.enterMarkets(Sumer.ETH); // Use [] for multiple
 *   console.log('Ethers.js transaction object', trx);
 * })().catch(console.error);
 * ```
 */
export async function enterMarkets(markets: string | string[] = [], options: CallOptions = {}): Promise<TrxResponse> {
  await netId(this)
  const errorPrefix = 'Sumer [enterMarkets] | '

  if (typeof markets === 'string') {
    markets = [markets]
  }

  if (!Array.isArray(markets)) {
    throw Error(errorPrefix + 'Argument `markets` must be an array or string.')
  }

  const addresses = []
  for (let i = 0; i < markets.length; i++) {
    if (!markets[i].includes('sdr')) {
      markets[i] = 'sdr' + markets[i]
    }

    if (!isCTokenAllowed(this._network.name, markets[i])) {
      throw Error(errorPrefix + 'Provided market `' + markets[i] + '` is not a recognized cToken.')
    }

    const cTokenAddress = getAddress(this._network.name, markets[i])

    addresses.push(cTokenAddress.toLowerCase())
  }

  const comptrollerAddress = getAddress(this._network.name, 'Comptroller')
  const parameters = [addresses]
  // const comptroller = Comptroller__factory.connect(comptrollerAddress, this._provider)

  const trxOptions: CallOptions = {
    _sumerProvider: this._provider,
    abi: abi.Comptroller,
    ...options,
  }

  // return (await comptroller.enterMarkets(addresses)).getTransaction
  return eth.trx(comptrollerAddress, 'enterMarkets', parameters, trxOptions)
}

/**
 * Exits the user's address from a Sumer Protocol market.
 *
 * @param {string} market A string of the symbol of the market to exit.
 * @param {CallOptions} [options] Call options and Ethers.js overrides for the
 *     transaction. A passed `gasLimit` will be used in both the `approve` (if
 *     not supressed) and `mint` transactions.
 *
 * @returns {object} Returns an Ethers.js transaction object of the exitMarket
 *     transaction.
 *
 * @example
 *
 * ```
 * const sumer = new Sumer(window.ethereum);
 *
 * (async function () {
 *   const trx = await sumer.exitMarket(Sumer.ETH);
 *   console.log('Ethers.js transaction object', trx);
 * })().catch(console.error);
 * ```
 */
export async function exitMarket(market: string, options: CallOptions = {}): Promise<TrxResponse> {
  await netId(this)
  const errorPrefix = 'Sumer [exitMarket] | '

  if (typeof market !== 'string' || market === '') {
    throw Error(errorPrefix + 'Argument `market` must be a string of a cToken market name.')
  }

  if (!market.includes('sdr')) {
    market = 'sdr' + market
  }

  if (!isCTokenAllowed(this._network.name, market)) {
    throw Error(errorPrefix + 'Provided market `' + market + '` is not a recognized cToken.')
  }

  const cTokenAddress = getAddress(this._network.name, market)

  const comptrollerAddress = getAddress(this._network.name, 'Comptroller')
  const parameters = [cTokenAddress.toLowerCase()]

  const trxOptions: CallOptions = {
    _sumerProvider: this._provider,
    abi: abi.Comptroller,
    ...options,
  }

  return eth.trx(comptrollerAddress, 'exitMarket', parameters, trxOptions)
}

export async function redeemFaceValue(
  market: string,
  amount: string | number,
  options: CallOptions = {},
): Promise<TrxResponse> {
  await netId(this)
  const errorPrefix = 'Sumer [redeemFaceValue] | '

  if (typeof market !== 'string' || market === '') {
    throw Error(errorPrefix + 'Argument `market` must be a string of a cToken market name.')
  }

  if (!market.includes('sdr')) {
    market = 'sdr' + market
  }

  if (!isCTokenAllowed(this._network.name, market)) {
    throw Error(errorPrefix + 'Provided market `' + market + '` is not a recognized cToken.')
  }

  const cTokenAddress = getAddress(this._network.name, market)

  const comptrollerAddress = getAddress(this._network.name, 'Comptroller')
  const parameters = [cTokenAddress.toLowerCase(), amount]

  const trxOptions: CallOptions = {
    _sumerProvider: this._provider,
    abi: abi.Comptroller,
    ...options,
  }

  return eth.trx(comptrollerAddress, 'redeemFaceValue', parameters, trxOptions)
}
