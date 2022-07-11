/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  WitnetFeed,
  WitnetFeedInterface,
} from "../../../contracts/FeedPriceOracleV2.sol/WitnetFeed";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "lastPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

export class WitnetFeed__factory {
  static readonly abi = _abi;
  static createInterface(): WitnetFeedInterface {
    return new utils.Interface(_abi) as WitnetFeedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WitnetFeed {
    return new Contract(address, _abi, signerOrProvider) as WitnetFeed;
  }
}
