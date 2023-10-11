/**
 * @file Price Feed
 * @desc These methods facilitate interactions with the Open Price Feed smart
 *     contracts.
 */

import * as eth from './eth'
import { netId } from './helpers'
import { constants, getAddress, abi, isUnderlyAllowed, getDecimals, isEther, isCTokenAllowed } from './constants'
import { CallOptions } from './types'
import { camelCase } from './util'

function validateAsset(asset: string, argument: string, errorPrefix: string): (boolean | string | number)[] {
  if (typeof asset !== 'string' || asset.length < 1) {
    throw Error(errorPrefix + 'Argument `' + argument + '` must be a non-empty string.')
  }

  const assetIsCToken = asset.includes('sdr')

  const cTokenName = assetIsCToken ? asset : 'sdr' + asset
  const cTokenAddress = getAddress(this._network.name, cTokenName)

  let underlyingName = assetIsCToken ? asset.slice(1, asset.length) : asset
  const underlyingAddress = getAddress(this._network.name, underlyingName)

  if (!isCTokenAllowed(this._network.name, cTokenName) || !isUnderlyAllowed(this._network.name, underlyingName)) {
    throw Error(errorPrefix + 'Argument `' + argument + '` is not supported.')
  }

  const underlyingDecimals = getDecimals(this._network.name, underlyingName)
  if (underlyingDecimals <= 0) {
    throw Error(`Asset ${asset} decimals is configured wrong as ${underlyingDecimals} `)
  }

  // The open price feed reveals BTC, not WBTC.
  underlyingName = underlyingName === 'WBTC' ? 'BTC' : underlyingName

  return [assetIsCToken, cTokenName, cTokenAddress, underlyingName, underlyingAddress, underlyingDecimals]
}

async function cTokenExchangeRate(
  cTokenAddress: string,
  cTokenName: string,
  underlyingDecimals: number,
): Promise<number> {
  const address = cTokenAddress
  const method = 'exchangeRateCurrent'
  const options = {
    _compoundProvider: this._provider,
    abi: isEther(this._network.name, cTokenName) ? abi.cEther : abi.cErc20,
  }
  const exchangeRateCurrent = await eth.read(address, method, [], options)
  const mantissa = 18 + underlyingDecimals - 8 // cToken always 8 decimals
  const oneCTokenInUnderlying = exchangeRateCurrent / Math.pow(10, mantissa)

  return oneCTokenInUnderlying
}

/**
 * Gets an asset's price from the Compound Protocol open price feed. The price
 *    of the asset can be returned in any other supported asset value, including
 *    all cTokens and underlyings.
 *
 * @param {string} asset A string of a supported asset in which to find the
 *     current price.
 * @param {string} [inAsset] A string of a supported asset in which to express
 *     the `asset` parameter's price. This defaults to USD.
 *
 * @returns {string} Returns a string of the numeric value of the asset.
 *
 * @example
 * ```
 * const compound = new Compound(window.ethereum);
 * let price;
 *
 * (async function () {
 *
 *   price = await compound.getPrice(Compound.WBTC);
 *   console.log('WBTC in USD', price); // 6 decimals, see Open Price Feed docs
 *
 *   price = await compound.getPrice(Compound.BAT, Compound.USDC); // supports cTokens too
 *   console.log('BAT in USDC', price);
 *
 * })().catch(console.error);
 * ```
 */
export async function getPrice(asset: string, inAsset: string): Promise<number> {
  await netId(this)
  const errorPrefix = 'Compound [getPrice] | '

  const [
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    assetIsCToken,
    cTokenName,
    cTokenAddress,
    underlyingName,
    underlyingAddress,
    underlyingDecimals,
  ] = validateAsset.bind(this)(asset, 'asset', errorPrefix)

  const [
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    inAssetIsCToken,
    inAssetCTokenName,
    inAssetCTokenAddress,
    inAssetUnderlyingName,
    inAssetUnderlyingAddress,
    inAssetUnderlyingDecimals,
  ] = validateAsset.bind(this)(inAsset, 'inAsset', errorPrefix)

  const priceFeedAddress = getAddress(this._network.name, 'PriceFeed')
  const trxOptions: CallOptions = {
    _compoundProvider: this._provider,
    abi: abi.PriceFeed,
  }

  const assetUnderlyingPrice = await eth.read(priceFeedAddress, 'price', [underlyingName], trxOptions)
  const inAssetUnderlyingPrice = await eth.read(priceFeedAddress, 'price', [inAssetUnderlyingName], trxOptions)

  let assetCTokensInUnderlying, inAssetCTokensInUnderlying

  if (assetIsCToken) {
    assetCTokensInUnderlying = await cTokenExchangeRate.bind(this)(cTokenAddress, cTokenName, underlyingDecimals)
  }

  if (inAssetIsCToken) {
    inAssetCTokensInUnderlying = await cTokenExchangeRate.bind(this)(
      inAssetCTokenAddress,
      inAssetCTokenName,
      inAssetUnderlyingDecimals,
    )
  }

  let result
  if (!assetIsCToken && !inAssetIsCToken) {
    result = assetUnderlyingPrice / inAssetUnderlyingPrice
  } else if (assetIsCToken && !inAssetIsCToken) {
    const assetInOther = assetUnderlyingPrice / inAssetUnderlyingPrice
    result = assetInOther * assetCTokensInUnderlying
  } else if (!assetIsCToken && inAssetIsCToken) {
    const assetInOther = assetUnderlyingPrice / inAssetUnderlyingPrice
    result = assetInOther / inAssetCTokensInUnderlying
  } else {
    const assetInOther = assetUnderlyingPrice / inAssetUnderlyingPrice
    const cTokensInUnderlying = assetInOther / assetCTokensInUnderlying
    result = inAssetCTokensInUnderlying * cTokensInUnderlying
  }

  return result
}
