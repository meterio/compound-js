/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  InterestRateModel,
  InterestRateModelInterface,
} from "../../../stake/contracts/InterestRateModel";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "cash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrows",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserves",
        type: "uint256",
      },
    ],
    name: "getBorrowRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "cash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrows",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserves",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reserveFactorMantissa",
        type: "uint256",
      },
    ],
    name: "getSupplyRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "isInterestRateModel",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

export class InterestRateModel__factory {
  static readonly abi = _abi;
  static createInterface(): InterestRateModelInterface {
    return new utils.Interface(_abi) as InterestRateModelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InterestRateModel {
    return new Contract(address, _abi, signerOrProvider) as InterestRateModel;
  }
}
