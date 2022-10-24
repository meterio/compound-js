/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Owned,
  OwnedInterface,
} from "../../../../contracts/stake/abstract/Owned";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerNominated",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "nominateNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nominatedOwner",
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
    name: "owner",
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
  "0x608060405234801561001057600080fd5b506040516103b63803806103b68339818101604052602081101561003357600080fd5b50516001600160a01b038116610090576040805162461bcd60e51b815260206004820152601960248201527f4f776e657220616464726573732063616e6e6f74206265203000000000000000604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b038316908117825560408051928352602083019190915280517fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c9281900390910190a1506102be806100f86000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631627540c1461005157806353a47bb71461007957806379ba50971461009d5780638da5cb5b146100a5575b600080fd5b6100776004803603602081101561006757600080fd5b50356001600160a01b03166100ad565b005b61008161014a565b604080516001600160a01b039092168252519081900360200190f35b610077610159565b610081610215565b6000546001600160a01b031633146100f65760405162461bcd60e51b815260040180806020018281038252602f81526020018061025a602f913960400191505060405180910390fd5b600180546001600160a01b0383166001600160a01b0319909116811790915560408051918252517f906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce229181900360200190a150565b6001546001600160a01b031681565b6001546001600160a01b031633146101a25760405162461bcd60e51b81526004018080602001828103825260358152602001806102256035913960400191505060405180910390fd5b600054600154604080516001600160a01b03938416815292909116602083015280517fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c9281900390910190a160018054600080546001600160a01b03199081166001600160a01b03841617909155169055565b6000546001600160a01b03168156fe596f75206d757374206265206e6f6d696e61746564206265666f726520796f752063616e20616363657074206f776e6572736869704f6e6c792074686520636f6e7472616374206f776e6572206d617920706572666f726d207468697320616374696f6ea26469706673582212209aeb8bdadfb75fd4f649cfbd7c1dcd644c7ceabf696c3b679e476873b9acfe9564736f6c634300060b0033";

type OwnedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Owned__factory extends ContractFactory {
  constructor(...args: OwnedConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Owned> {
    return super.deploy(_owner, overrides || {}) as Promise<Owned>;
  }
  override getDeployTransaction(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): Owned {
    return super.attach(address) as Owned;
  }
  override connect(signer: Signer): Owned__factory {
    return super.connect(signer) as Owned__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnedInterface {
    return new utils.Interface(_abi) as OwnedInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Owned {
    return new Contract(address, _abi, signerOrProvider) as Owned;
  }
}