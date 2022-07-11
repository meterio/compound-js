/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SuTokenRateModel,
  SuTokenRateModelInterface,
} from "../../../contracts/suTokenInterestModel.sol/SuTokenRateModel";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initBorrowRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "initSupplyRate",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    constant: true,
    inputs: [],
    name: "borrowRate",
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
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    name: "changeOwner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "setBorrowRate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "setSupplyRate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "supplyRate",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516103e23803806103e28339818101604052604081101561003357600080fd5b508051602090910151600191909155600255600080546001600160a01b0319163317905561037c806100666000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063a6f9dae111610066578063a6f9dae114610132578063ad2961a314610158578063b816881614610160578063c914b4371461018f578063dd3eaf041461019757610093565b806315f24053146100985780632191f92a146100d35780633f95e273146100ef5780638da5cb5b1461010e575b600080fd5b6100c1600480360360608110156100ae57600080fd5b50803590602081013590604001356101b4565b60408051918252519081900360200190f35b6100db6101be565b604080519115158252519081900360200190f35b61010c6004803603602081101561010557600080fd5b50356101c3565b005b610116610214565b604080516001600160a01b039092168252519081900360200190f35b61010c6004803603602081101561014857600080fd5b50356001600160a01b0316610223565b6100c16102df565b6100c16004803603608081101561017657600080fd5b50803590602081013590604081013590606001356102e5565b6100c16102f0565b61010c600480360360208110156101ad57600080fd5b50356102f6565b6001549392505050565b600181565b6000546001600160a01b0316331461020f576040805162461bcd60e51b815260206004820152600a60248201526927a7262c9027aba722a960b11b604482015290519081900360640190fd5b600255565b6000546001600160a01b031681565b6000546001600160a01b0316331461026f576040805162461bcd60e51b815260206004820152600a60248201526927a7262c9027aba722a960b11b604482015290519081900360640190fd5b6001600160a01b0381166102bd576040805162461bcd60e51b815260206004820152601060248201526f41646472657373206973205a65726f2160801b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60025481565b600254949350505050565b60015481565b6000546001600160a01b03163314610342576040805162461bcd60e51b815260206004820152600a60248201526927a7262c9027aba722a960b11b604482015290519081900360640190fd5b60015556fea265627a7a723158205a4b5dc07f48f98b1fd3ee0da102dce360b51ed80d7515731275f243502b524a64736f6c63430005100032";

type SuTokenRateModelConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SuTokenRateModelConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SuTokenRateModel__factory extends ContractFactory {
  constructor(...args: SuTokenRateModelConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initBorrowRate: BigNumberish,
    initSupplyRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SuTokenRateModel> {
    return super.deploy(
      initBorrowRate,
      initSupplyRate,
      overrides || {}
    ) as Promise<SuTokenRateModel>;
  }
  override getDeployTransaction(
    initBorrowRate: BigNumberish,
    initSupplyRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      initBorrowRate,
      initSupplyRate,
      overrides || {}
    );
  }
  override attach(address: string): SuTokenRateModel {
    return super.attach(address) as SuTokenRateModel;
  }
  override connect(signer: Signer): SuTokenRateModel__factory {
    return super.connect(signer) as SuTokenRateModel__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SuTokenRateModelInterface {
    return new utils.Interface(_abi) as SuTokenRateModelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SuTokenRateModel {
    return new Contract(address, _abi, signerOrProvider) as SuTokenRateModel;
  }
}
