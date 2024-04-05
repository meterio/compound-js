import { SumerInstance } from './types'

/**
 * This function acts like a decorator for all methods that interact with the
 *     blockchain. In order to use the correct Sumer Protocol addresses, the
 *     Sumer.js SDK must know which network its provider points to. This
 *     function holds up a transaction until the main constructor has determined
 *     the network ID.
 *
 * @hidden
 *
 * @param {Sumer} _sumer The instance of the Sumer.js SDK.
 *
 */
export async function netId(_sumer: SumerInstance): Promise<void> {
  if (_sumer._networkPromise) {
    await _sumer._networkPromise
  }
}
