/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ComptrollerV1Storage,
  ComptrollerV1StorageInterface,
} from "../../../contracts/ComptrollerStorage.sol/ComptrollerV1Storage";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "accountAssets",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "closeFactorMantissa",
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
    inputs: [],
    name: "comptrollerImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidationIncentiveMantissa",
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
    inputs: [],
    name: "maxAssets",
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
    inputs: [],
    name: "oracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingComptrollerImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "underWriterAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061020c806100206000396000f3fe608060405234801561001057600080fd5b506004361061008e5760003560e01c80632408d5f01461009357806326782247146100b75780634ada90af146100bf5780637dc0d1d0146100d957806394b2294b146100e1578063bb82aa5e146100e9578063dce15449146100f1578063dcfbc0c71461011d578063e875544614610125578063f851a4401461012d575b600080fd5b61009b610135565b604080516001600160a01b039092168252519081900360200190f35b61009b610144565b6100c7610153565b60408051918252519081900360200190f35b61009b610159565b6100c7610168565b61009b61016e565b61009b6004803603604081101561010757600080fd5b506001600160a01b03813516906020013561017d565b61009b6101b2565b6100c76101c1565b61009b6101c7565b6004546001600160a01b031681565b6001546001600160a01b031681565b60075481565b6005546001600160a01b031681565b60085481565b6002546001600160a01b031681565b6009602052816000526040600020818154811061019657fe5b6000918252602090912001546001600160a01b03169150829050565b6003546001600160a01b031681565b60065481565b6000546001600160a01b03168156fea26469706673582212200cf70753dc3e60e5ad5bd0fdca4793d1d8ce3532cec68187369631c27456d4d464736f6c634300060b0033";

type ComptrollerV1StorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ComptrollerV1StorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ComptrollerV1Storage__factory extends ContractFactory {
  constructor(...args: ComptrollerV1StorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ComptrollerV1Storage> {
    return super.deploy(overrides || {}) as Promise<ComptrollerV1Storage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ComptrollerV1Storage {
    return super.attach(address) as ComptrollerV1Storage;
  }
  override connect(signer: Signer): ComptrollerV1Storage__factory {
    return super.connect(signer) as ComptrollerV1Storage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ComptrollerV1StorageInterface {
    return new utils.Interface(_abi) as ComptrollerV1StorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ComptrollerV1Storage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ComptrollerV1Storage;
  }
}