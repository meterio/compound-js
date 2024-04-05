/**
 * @file Sumer
 * @desc This file defines the constructor of the `Sumer` class.
 * @hidden
 */

import { ethers } from 'ethers'
import * as eth from './eth'
import * as util from './util'
import * as comptroller from './comptroller'
import * as cToken from './cToken'
import * as comp from './comp'
import * as gov from './gov'
import * as api from './api'
import { abi } from './abi'
import {
  constants,
  getAddress,
  getDecimals,
  getName,
  getRateModals,
  getTokenPairs,
  isCTokenAllowed,
  isEther,
  isUnderlyAllowed,
} from './constants'
import { Provider, CompoundOptions, CompoundInstance } from './types'

// Turn off Ethers.js warnings
// ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.ERROR)

/**
 * Creates an instance of the Sumer.js SDK.
 *
 * @param {Provider | string} [provider] Optional Ethereum network provider.
 *     Defaults to Ethers.js fallback mainnet provider.
 * @param {object} [options] Optional provider options.
 *
 * @example
 * ```
 * var sumer = new Sumer(window.ethereum); // web browser
 *
 * var sumer = new Sumer('http://127.0.0.1:8545'); // HTTP provider
 *
 * var sumer = new Sumer(); // Uses Ethers.js fallback mainnet (for testing only)
 *
 * var sumer = new Sumer('ropsten'); // Uses Ethers.js fallback (for testing only)
 *
 * // Init with private key (server side)
 * var sumer = new Sumer('https://mainnet.infura.io/v3/_your_project_id_', {
 *   privateKey: '0x_your_private_key_', // preferably with environment variable
 * });
 *
 * // Init with HD mnemonic (server side)
 * var sumer = new Sumer('mainnet' {
 *   mnemonic: 'clutch captain shoe...', // preferably with environment variable
 * });
 * ```
 *
 * @returns {object} Returns an instance of the Sumer.js SDK.
 */
const Sumer = function (provider: Provider | string = 'mainnet', options: CompoundOptions = {}): CompoundInstance {
  const originalProvider = provider

  options.provider = provider || options.provider
  provider = eth._createProvider(options)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const instance: any = {
    _originalProvider: originalProvider,
    _provider: provider,
    ...comptroller,
    ...cToken,
    ...gov,
    // claimComp: comp.claimComp,
    // delegate: comp.delegate,
    // delegateBySig: comp.delegateBySig,
    // createDelegateSignature: comp.createDelegateSignature,
    _network: {
      id: options.networkId,
      name: options.networkName,
    },
  }

  // Instance needs to know which network the provider connects to, so it can
  //     use the correct contract addresses.
  // instance._networkPromise = eth.getProviderNetwork(provider).then((network) => {
  //   delete instance._networkPromise
  //   instance._network = network
  // })

  return instance
}

Sumer.eth = eth
Sumer.api = api
Sumer.util = util
Sumer._ethers = ethers
Sumer.abi = abi

Sumer.getDecimals = getDecimals
Sumer.getAddress = getAddress
Sumer.getName = getName
Sumer.getTokenPairs = getTokenPairs
Sumer.getRateModals = getRateModals

Sumer.isUnderlyAllowed = isUnderlyAllowed
Sumer.isCTokenAllowed = isCTokenAllowed
Sumer.isEther = isEther
// Sumer.comp = {
//   getCompBalance: comp.getCompBalance,
//   getCompAccrued: comp.getCompAccrued,
// }
Object.assign(Sumer, constants)

export = Sumer
