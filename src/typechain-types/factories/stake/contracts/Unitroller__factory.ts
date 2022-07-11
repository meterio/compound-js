/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Unitroller,
  UnitrollerInterface,
} from "../../../stake/contracts/Unitroller";

const _abi = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "error",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "info",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "detail",
        type: "uint256",
      },
    ],
    name: "Failure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldImplementation",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "NewImplementation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldPendingAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldPendingImplementation",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newPendingImplementation",
        type: "address",
      },
    ],
    name: "NewPendingImplementation",
    type: "event",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    constant: false,
    inputs: [],
    name: "_acceptAdmin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "_acceptImplementation",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "_setPendingAdmin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "newPendingImplementation",
        type: "address",
      },
    ],
    name: "_setPendingImplementation",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "admin",
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
    constant: true,
    inputs: [],
    name: "comptrollerImplementation",
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
    constant: true,
    inputs: [],
    name: "pendingAdmin",
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
    constant: true,
    inputs: [],
    name: "pendingComptrollerImplementation",
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
    constant: true,
    inputs: [],
    name: "underWriterAdmin",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610613806100326000396000f3fe6080604052600436106100865760003560e01c8063c1e8033411610059578063c1e80334146101a9578063dcfbc0c7146101be578063e992a041146101d3578063e9c714f214610206578063f851a4401461021b57610086565b80632408d5f014610109578063267822471461013a578063b71d1a0c1461014f578063bb82aa5e14610194575b6002546040516000916001600160a01b031690829036908083838082843760405192019450600093509091505080830381855af49150503d80600081146100e9576040519150601f19603f3d011682016040523d82523d6000602084013e6100ee565b606091505b505090506040513d6000823e818015610105573d82f35b3d82fd5b34801561011557600080fd5b5061011e610230565b604080516001600160a01b039092168252519081900360200190f35b34801561014657600080fd5b5061011e61023f565b34801561015b57600080fd5b506101826004803603602081101561017257600080fd5b50356001600160a01b031661024e565b60408051918252519081900360200190f35b3480156101a057600080fd5b5061011e6102df565b3480156101b557600080fd5b506101826102ee565b3480156101ca57600080fd5b5061011e6103e9565b3480156101df57600080fd5b50610182600480360360208110156101f657600080fd5b50356001600160a01b03166103f8565b34801561021257600080fd5b5061018261047c565b34801561022757600080fd5b5061011e610562565b6004546001600160a01b031681565b6001546001600160a01b031681565b600080546001600160a01b031633146102745761026d6001600e610571565b90506102da565b600180546001600160a01b038481166001600160a01b0319831681179093556040805191909216808252602082019390935281517fca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9929181900390910190a160005b9150505b919050565b6002546001600160a01b031681565b6003546000906001600160a01b03163314158061031457506003546001600160a01b0316155b1561032b57610324600180610571565b90506103e6565b60028054600380546001600160a01b038082166001600160a01b031980861682179687905590921690925560408051938316808552949092166020840152815190927fd604de94d45953f9138079ec1b82d533cb2160c906d1076d1f7ed54befbca97a92908290030190a1600354604080516001600160a01b038085168252909216602083015280517fe945ccee5d701fc83f9b8aa8ca94ea4219ec1fcbd4f4cab4f0ea57c5c3e1d8159281900390910190a160005b925050505b90565b6003546001600160a01b031681565b600080546001600160a01b031633146104175761026d6001600f610571565b600380546001600160a01b038481166001600160a01b0319831617928390556040805192821680845293909116602083015280517fe945ccee5d701fc83f9b8aa8ca94ea4219ec1fcbd4f4cab4f0ea57c5c3e1d8159281900390910190a160006102d6565b6001546000906001600160a01b031633141580610497575033155b156104a85761032460016000610571565b60008054600180546001600160a01b038082166001600160a01b031980861682179687905590921690925560408051938316808552949092166020840152815190927ff9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc92908290030190a1600154604080516001600160a01b038085168252909216602083015280517fca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a99281900390910190a160006103e1565b6000546001600160a01b031681565b60007f45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa08360118111156105a057fe5b8360148111156105ac57fe5b604080519283526020830191909152600082820152519081900360600190a18260118111156105d757fe5b939250505056fea265627a7a72315820598a1f2cdcc3a570640b5c03abb702085608c519b039185c0e31e83d569d47f664736f6c63430005100032";

type UnitrollerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UnitrollerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Unitroller__factory extends ContractFactory {
  constructor(...args: UnitrollerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Unitroller> {
    return super.deploy(overrides || {}) as Promise<Unitroller>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Unitroller {
    return super.attach(address) as Unitroller;
  }
  override connect(signer: Signer): Unitroller__factory {
    return super.connect(signer) as Unitroller__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UnitrollerInterface {
    return new utils.Interface(_abi) as UnitrollerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Unitroller {
    return new Contract(address, _abi, signerOrProvider) as Unitroller;
  }
}
