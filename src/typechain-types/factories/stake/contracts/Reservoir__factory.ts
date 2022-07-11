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
  Reservoir,
  ReservoirInterface,
} from "../../../stake/contracts/Reservoir";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "dripRate_",
        type: "uint256",
      },
      {
        internalType: "contract EIP20Interface",
        name: "token_",
        type: "address",
      },
      {
        internalType: "address",
        name: "target_",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    constant: false,
    inputs: [],
    name: "drip",
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
    name: "dripRate",
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
    name: "dripStart",
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
    name: "dripped",
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
    name: "target",
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
    name: "token",
    outputs: [
      {
        internalType: "contract EIP20Interface",
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
  "0x608060405234801561001057600080fd5b5060405161052c38038061052c8339818101604052606081101561003357600080fd5b5080516020820151604090920151436000908155600192909255600280546001600160a01b039485166001600160a01b031991821617909155600380549490921693169290921790915560045561049d8061008f6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806388a91a8a1461006757806395f632b3146100815780639f678cca14610089578063d326159214610091578063d4b8399214610099578063fc0c546a146100bd575b600080fd5b61006f6100c5565b60408051918252519081900360200190f35b61006f6100cb565b61006f6100d1565b61006f6102c9565b6100a16102cf565b604080516001600160a01b039092168252519081900360200190f35b6100a16102de565b60005481565b60045481565b600254604080516370a0823160e01b815230600482015290516000926001600160a01b031691839183916370a08231916024808301926020929190829003018186803b15801561012057600080fd5b505afa158015610134573d6000803e3d6000fd5b505050506040513d602081101561014a57600080fd5b50516001546000805460045460035460408051808201909152601281527164726970546f74616c206f766572666c6f7760701b60208201529596509394919390926001600160a01b03909116914391906101a9908790878503906102ed565b905060006101e382866040518060400160405280601381526020017264656c74614472697020756e646572666c6f7760681b8152506103a0565b905060006101f189836103fa565b9050600061022487836040518060400160405280600c81526020016b1d185d5d1bdb1bd9da58d85b60a21b815250610413565b9050806004819055508a6001600160a01b031663a9059cbb87846040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561028d57600080fd5b505af11580156102a1573d6000803e3d6000fd5b505050506040513d60208110156102b757600080fd5b50919b50505050505050505050505090565b60015481565b6003546001600160a01b031681565b6002546001600160a01b031681565b6000836102fc57506000610399565b8383028385828161030957fe5b041483906103955760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561035a578181015183820152602001610342565b50505050905090810190601f1680156103875780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5090505b9392505050565b600081848411156103f25760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561035a578181015183820152602001610342565b505050900390565b600081831161040a57508161040d565b50805b92915050565b600083830182858210156103955760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561035a57818101518382015260200161034256fea265627a7a7231582036b804cfe508fd3c672279e6b049f07ffaea6c10fc73fabf5d7967ffa97900d464736f6c63430005100032";

type ReservoirConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReservoirConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Reservoir__factory extends ContractFactory {
  constructor(...args: ReservoirConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    dripRate_: BigNumberish,
    token_: string,
    target_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Reservoir> {
    return super.deploy(
      dripRate_,
      token_,
      target_,
      overrides || {}
    ) as Promise<Reservoir>;
  }
  override getDeployTransaction(
    dripRate_: BigNumberish,
    token_: string,
    target_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      dripRate_,
      token_,
      target_,
      overrides || {}
    );
  }
  override attach(address: string): Reservoir {
    return super.attach(address) as Reservoir;
  }
  override connect(signer: Signer): Reservoir__factory {
    return super.connect(signer) as Reservoir__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReservoirInterface {
    return new utils.Interface(_abi) as ReservoirInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Reservoir {
    return new Contract(address, _abi, signerOrProvider) as Reservoir;
  }
}
