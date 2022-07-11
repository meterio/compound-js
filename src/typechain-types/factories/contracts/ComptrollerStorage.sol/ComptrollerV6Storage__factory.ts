/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ComptrollerV6Storage,
  ComptrollerV6StorageInterface,
} from "../../../contracts/ComptrollerStorage.sol/ComptrollerV6Storage";

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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allMarkets",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compAccrued",
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
    name: "compBorrowSpeeds",
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
    name: "compBorrowState",
    outputs: [
      {
        internalType: "uint224",
        name: "index",
        type: "uint224",
      },
      {
        internalType: "uint32",
        name: "block",
        type: "uint32",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compBorrowerIndex",
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
    name: "compContributorSpeeds",
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
    name: "compRate",
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
    name: "compSpeeds",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "compSupplierIndex",
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
    name: "compSupplySpeeds",
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
    name: "compSupplyState",
    outputs: [
      {
        internalType: "uint224",
        name: "index",
        type: "uint224",
      },
      {
        internalType: "uint32",
        name: "block",
        type: "uint32",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastContributorBlock",
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
  "0x608060405234801561001057600080fd5b5061060d806100206000396000f3fe608060405234801561001057600080fd5b506004361061011d5760003560e01c80631d7b33d7146101225780632408d5f01461015a578063267822471461017e5780634ada90af1461018657806352d84d1e1461018e5780636aa875b5146101ab5780636b79c38d146101d15780637dc0d1d01461021f5780638c57804e146102275780638e8f294b1461024d57806394b2294b14610297578063986ab8381461029f578063aa900754146102c5578063b21be7fd146102cd578063bb82aa5e146102fb578063bea6b8b814610303578063ca0af04314610329578063cc7ebdc414610357578063dce154491461037d578063dcfbc0c7146103a9578063e8755446146103b1578063f4a433c0146103b9578063f851a440146103df575b600080fd5b6101486004803603602081101561013857600080fd5b50356001600160a01b03166103e7565b60408051918252519081900360200190f35b6101626103f9565b604080516001600160a01b039092168252519081900360200190f35b610162610408565b610148610417565b610162600480360360208110156101a457600080fd5b503561041d565b610148600480360360208110156101c157600080fd5b50356001600160a01b0316610444565b6101f7600480360360208110156101e757600080fd5b50356001600160a01b0316610456565b604080516001600160e01b03909316835263ffffffff90911660208301528051918290030190f35b610162610480565b6101f76004803603602081101561023d57600080fd5b50356001600160a01b031661048f565b6102736004803603602081101561026357600080fd5b50356001600160a01b03166104b9565b60408051931515845260ff9092166020840152151582820152519081900360600190f35b6101486104e1565b610148600480360360208110156102b557600080fd5b50356001600160a01b03166104e7565b6101486104f9565b610148600480360360408110156102e357600080fd5b506001600160a01b03813581169160200135166104ff565b61016261051c565b6101486004803603602081101561031957600080fd5b50356001600160a01b031661052b565b6101486004803603604081101561033f57600080fd5b506001600160a01b038135811691602001351661053d565b6101486004803603602081101561036d57600080fd5b50356001600160a01b031661055a565b6101626004803603604081101561039357600080fd5b506001600160a01b03813516906020013561056c565b6101626105a1565b6101486105b0565b610148600480360360208110156103cf57600080fd5b50356001600160a01b03166105b6565b6101626105c8565b600d6020526000908152604090205481565b6004546001600160a01b031681565b6001546001600160a01b031681565b60075481565b600b818154811061042a57fe5b6000918252602090912001546001600160a01b0316905081565b60166020526000908152604090205481565b600e602052600090815260409020546001600160e01b03811690600160e01b900463ffffffff1682565b6005546001600160a01b031681565b600f602052600090815260409020546001600160e01b03811690600160e01b900463ffffffff1682565b600a602052600090815260409020805460029091015460ff8083169261010090048116911683565b60085481565b60136020526000908152604090205481565b600c5481565b601060209081526000928352604080842090915290825290205481565b6002546001600160a01b031681565b60146020526000908152604090205481565b601160209081526000928352604080842090915290825290205481565b60126020526000908152604090205481565b6009602052816000526040600020818154811061058557fe5b6000918252602090912001546001600160a01b03169150829050565b6003546001600160a01b031681565b60065481565b60156020526000908152604090205481565b6000546001600160a01b03168156fea264697066735822122089d3ebbbd071f441a5b4bbbdef6b01946fda0a04c766daa7ab4a9f41329445b964736f6c634300060b0033";

type ComptrollerV6StorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ComptrollerV6StorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ComptrollerV6Storage__factory extends ContractFactory {
  constructor(...args: ComptrollerV6StorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ComptrollerV6Storage> {
    return super.deploy(overrides || {}) as Promise<ComptrollerV6Storage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ComptrollerV6Storage {
    return super.attach(address) as ComptrollerV6Storage;
  }
  override connect(signer: Signer): ComptrollerV6Storage__factory {
    return super.connect(signer) as ComptrollerV6Storage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ComptrollerV6StorageInterface {
    return new utils.Interface(_abi) as ComptrollerV6StorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ComptrollerV6Storage {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ComptrollerV6Storage;
  }
}
