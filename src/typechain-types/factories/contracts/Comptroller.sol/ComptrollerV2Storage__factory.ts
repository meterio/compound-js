/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ComptrollerV2Storage,
  ComptrollerV2StorageInterface,
} from "../../../contracts/Comptroller.sol/ComptrollerV2Storage";

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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "markets",
    outputs: [
      {
        internalType: "bool",
        name: "isListed",
        type: "bool",
      },
      {
        internalType: "uint8",
        name: "equalAssetGrouId",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "isComped",
        type: "bool",
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
  "0x608060405234801561001057600080fd5b506102e0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100995760003560e01c80632408d5f01461009e57806326782247146100bc5780634ada90af146100c45780637dc0d1d0146100d95780638e8f294b146100e157806394b2294b14610103578063bb82aa5e1461010b578063dce1544914610113578063dcfbc0c714610126578063e87554461461012e578063f851a44014610136575b600080fd5b6100a661013e565b6040516100b39190610270565b60405180910390f35b6100a661014d565b6100cc61015c565b6040516100b391906102a1565b6100a6610162565b6100f46100ef366004610224565b610171565b6040516100b393929190610284565b6100cc610199565b6100a661019f565b6100a6610121366004610246565b6101ae565b6100a66101e3565b6100cc6101f2565b6100a66101f8565b6004546001600160a01b031681565b6001546001600160a01b031681565b60075481565b6005546001600160a01b031681565b600a602052600090815260409020805460029091015460ff8083169261010090048116911683565b60085481565b6002546001600160a01b031681565b600960205281600052604060002081815481106101c757fe5b6000918252602090912001546001600160a01b03169150829050565b6003546001600160a01b031681565b60065481565b6000546001600160a01b031681565b80356001600160a01b038116811461021e57600080fd5b92915050565b600060208284031215610235578081fd5b61023f8383610207565b9392505050565b60008060408385031215610258578081fd5b6102628484610207565b946020939093013593505050565b6001600160a01b0391909116815260200190565b921515835260ff9190911660208301521515604082015260600190565b9081526020019056fea2646970667358221220f3ccbc99e4861e851ad0d5a08a507cef8456b856b74c05508a3d2cb018a2eca864736f6c634300060b0033";

type ComptrollerV2StorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ComptrollerV2StorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ComptrollerV2Storage__factory extends ContractFactory {
  constructor(...args: ComptrollerV2StorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ComptrollerV2Storage> {
    return super.deploy(overrides || {}) as Promise<ComptrollerV2Storage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ComptrollerV2Storage {
    return super.attach(address) as ComptrollerV2Storage;
  }
  override connect(signer: Signer): ComptrollerV2Storage__factory {
    return super.connect(signer) as ComptrollerV2Storage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ComptrollerV2StorageInterface {
    return new utils.Interface(_abi) as ComptrollerV2StorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ComptrollerV2Storage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ComptrollerV2Storage;
  }
}
