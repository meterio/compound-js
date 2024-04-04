/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ICompLogic,
  ICompLogicInterface,
} from "../../../contracts/Interface/ICompLogic";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "mantissa",
            type: "uint256",
          },
        ],
        internalType: "struct Exp",
        name: "marketBorrowIndex",
        type: "tuple",
      },
    ],
    name: "distributeBorrowerComp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "supplier",
        type: "address",
      },
    ],
    name: "distributeSupplierComp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getRedemptionRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "blockNumber",
        type: "uint32",
      },
    ],
    name: "initializeMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "supplySpeed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrowSpeed",
        type: "uint256",
      },
    ],
    name: "setCompSpeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "redeemAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalSupply",
        type: "uint256",
      },
    ],
    name: "updateBaseRateFromRedemption",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "mantissa",
            type: "uint256",
          },
        ],
        internalType: "struct Exp",
        name: "marketBorrowIndex",
        type: "tuple",
      },
    ],
    name: "updateCompBorrowIndex",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
    ],
    name: "updateCompSupplyIndex",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ICompLogic__factory {
  static readonly abi = _abi;
  static createInterface(): ICompLogicInterface {
    return new Interface(_abi) as ICompLogicInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ICompLogic {
    return new Contract(address, _abi, runner) as unknown as ICompLogic;
  }
}