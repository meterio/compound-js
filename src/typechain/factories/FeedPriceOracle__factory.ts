/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FeedPriceOracle,
  FeedPriceOracleInterface,
} from "../FeedPriceOracle";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "cToken_",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "source",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "tokenDecimals",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "feedDecimals",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "SetFeed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    name: "changeOwner",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "feeds",
    outputs: [
      {
        internalType: "uint8",
        name: "source",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "tokenDecimals",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "feedDecimals",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
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
    name: "fixedPrices",
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
        name: "cToken_",
        type: "address",
      },
    ],
    name: "getFeed",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "source",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "tokenDecimals",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "feedDecimals",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        internalType: "struct FeedPriceOracle.FeedData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "cToken_",
        type: "address",
      },
    ],
    name: "getFixedPrice",
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
        name: "cToken_",
        type: "address",
      },
    ],
    name: "getUnderlyingPrice",
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
        internalType: "address[]",
        name: "cTokens",
        type: "address[]",
      },
    ],
    name: "getUnderlyingPrices",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isPriceOracle",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "cToken_",
        type: "address",
      },
    ],
    name: "removeFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "cToken_",
        type: "address",
      },
    ],
    name: "removeFixedPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "cToken_",
        type: "address",
      },
      {
        internalType: "address",
        name: "feed_",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "tokenDecimals_",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "feedDecimals_",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "setBandFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "cToken_",
        type: "address",
      },
      {
        internalType: "address",
        name: "feed_",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "tokenDecimals_",
        type: "uint8",
      },
    ],
    name: "setChainlinkFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "cToken_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "setFixedPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "cToken_",
        type: "address",
      },
      {
        internalType: "address",
        name: "feed_",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "tokenDecimals_",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "feedDecimals_",
        type: "uint8",
      },
    ],
    name: "setWitnetFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080806040523461002857600080546001600160a01b0319163317905561149c908161002e8239f35b600080fdfe608080604052600436101561001357600080fd5b60003560e01c9081630c1502eb14610d845750806316b8e73114610ca15780631badc89a14610c575780631e922ea614610c125780632ef91c87146109a55780632fba4aa91461092357806348a1371b146107c75780634b90fd691461073857806366331bba1461071c5780638da5cb5b146106f3578063a6f9dae1146106a3578063ab9bfdfc1461042d578063e983fe25146103f3578063f0be3811146100f45763fc57d4df146100c457600080fd5b346100ef5760203660031901126100ef5760206100e76100e2610dba565b6110c3565b604051908152f35b600080fd5b346100ef5760a03660031901126100ef5761010d610dba565b610115610dd0565b61011d610e26565b610125610e36565b926084359267ffffffffffffffff84116100ef57366023850112156100ef57836004013567ffffffffffffffff81116103cc5760405194610170601f8301601f191660200187610eb8565b81865236602483830101116100ef578160009260246020930183890137860101526000546001600160a01b039182916101ac9083163314610f98565b16916101b9831515610fd1565b818116600052600160205260ff604060002054166103e2575b604051956101df87610e80565b6003875283602088015260ff8516604088015260016060880160ff831681526080890198888a528585166000528260205260406000209160ff825116918354926101008660a81b03602083015160081b1691604060ff60a81b91015160a81b169260ff60b01b905160b01b169368ffffffffffffffffff60b81b1617171717815501965196875167ffffffffffffffff81116103cc5761027f8254610e46565b601f811161038f575b506020601f821160011461030f5791816102ff9695949260ff946000805160206114478339815191529b9c600092610304575b50508160011b916000199060031b1c19161790555b8160405197889760038952602089015216604087015216606085015260a06080850152169460a0830190610de6565b0390a2005b015190508c806102bb565b601f198216998360005260206000209a60005b8181106103775750926000805160206114478339815191529a9b60ff9593600193836102ff9b9a99971061035e575b505050811b0190556102d0565b015160001960f88460031b161c191690558c8080610351565b838301518d556001909c019b60209384019301610322565b6103bc90836000526020600020601f840160051c810191602085106103c2575b601f0160051c0190611010565b89610288565b90915081906103af565b634e487b7160e01b600052604160045260246000fd5b6002602052600060408120556101d2565b346100ef5760203660031901126100ef576001600160a01b03610414610dba565b1660005260026020526020604060002054604051908152f35b346100ef5760603660031901126100ef57610446610dba565b61044e610dd0565b90610457610e26565b60005490926001600160a01b03916104729083163314610f98565b6040519261047f84610e9c565b600084526104908383161515610fd1565b828116600052600160205260ff60406000205416610692575b604051946104b686610e80565b60018652838316602087015260016040870160ff831681526060880197600889526080810198888a528786166000528360205260406000209260ff83511684549360206101008860a81b0391015160081b169160ff60a81b905160a81b169260ff60b01b905160b01b169368ffffffffffffffffff60b81b1617171717815501955195865167ffffffffffffffff81116103cc576105548254610e46565b601f8111610660575b506020601f82116001146105e057926102ff94928260ff9389966000805160206114478339815191529b9c6000926105d5575b50508160011b916000199060031b1c19161790555b604051968796600188521660208701521660408501526008606085015260a06080850152169460a0830190610de6565b015190508c80610590565b601f198216988360005260206000209960005b8181106106485750836000805160206114478339815191529a9b8a97946102ff99979460ff976001951061062f575b505050811b0190556105a5565b015160001960f88460031b161c191690558c8080610622565b838301518c556001909b019a602093840193016105f3565b61068c90836000526020600020601f840160051c810191602085106103c257601f0160051c0190611010565b8861055d565b6002602052600060408120556104a9565b346100ef5760203660031901126100ef576106bc610dba565b600054906001600160a01b03906106d63383851614610f98565b16906106e3821515610fd1565b6001600160a01b03191617600055005b346100ef5760003660031901126100ef576000546040516001600160a01b039091168152602090f35b346100ef5760003660031901126100ef57602060405160018152f35b346100ef5760203660031901126100ef57610751610dba565b6000546001600160a01b03919061076b9083163314610f98565b16600052600160205260016040600020600081550161078a8154610e46565b908161079257005b81601f600093116001146107a4575055005b9080839182526107c3601f60208420940160051c840160018501611010565b5555005b346100ef576020806003193601126100ef5760043567ffffffffffffffff81116100ef57366023820112156100ef57806004013561080481610f80565b916108126040519384610eb8565b8183528383016024809360051b830101913683116100ef578301905b8282106109045750505081519061084482610f80565b916108526040519384610eb8565b80835261085e81610f80565b8386019490601f190136863760005b8281106108b757868587604051928392818401908285525180915260408401929160005b8281106108a057505050500390f35b835185528695509381019392810192600101610891565b6108d36001600160a01b036108cc838561141c565b51166110c3565b6108dd828761141c565b5260001981146108ef5760010161086d565b83634e487b7160e01b60005260116004526000fd5b81356001600160a01b03811681036100ef57815290850190850161082e565b346100ef5760203660031901126100ef576001600160a01b0380610945610dba565b1660005260016020526040600020906109a1610965600184549401610eda565b60ff60405194859482821686528160081c166020860152818160a81c16604086015260b01c16606084015260a0608084015260a0830190610de6565b0390f35b346100ef5760803660031901126100ef576109be610dba565b6109c6610dd0565b906109cf610e26565b6109d7610e36565b9260018060a01b036109ee81600054163314610f98565b80604051926109fc84610e9c565b600084521693610a0d851515610fd1565b169384600052600160209381855260ff60406000205416610c02575b60405191610a3683610e80565b60028352808684019388855260ff6040820194169485855260ff6060830197169687815260808301958987528c600052848b5260ff6040600020945116845493610100600160a81b03905160081b169160ff60a81b905160a81b169260ff60b01b905160b01b169368ffffffffffffffffff60b81b161717171781550191519081519167ffffffffffffffff83116103cc57610ad28454610e46565b601f8111610bd2575b508790601f8411600114610b545792806102ff97959381936000805160206114478339815191529c9b9a9896600094610b49575b50501b916000199060031b1c19161790555b604051958695600287528601526040850152606084015260a0608084015260a0830190610de6565b015192508d80610b0f565b90601f9392931983169185600052896000209260005b818110610bbd5750916000805160206114478339815191529b9a9997959391856102ff9a98969410610ba4575b505050811b019055610b21565b015160001960f88460031b161c191690558b8080610b97565b82840151855593860193928b01928b01610b6a565b610bfc908560005289600020601f860160051c8101918b87106103c257601f0160051c0190611010565b8a610adb565b6002855260006040812055610a29565b346100ef5760203660031901126100ef57610c2b610dba565b6000546001600160a01b039190610c459083163314610f98565b16600090815260026020526040812055005b346100ef5760403660031901126100ef57610c70610dba565b6000546001600160a01b039190610c8a9083163314610f98565b166000526002602052602435604060002055600080f35b346100ef576020806003193601126100ef57610cbb610dba565b60606080604051610ccb81610e80565b6000815260008582015260006040820152600083820152015260018060a01b03809116600052600182526109a160406000209260405192610d0b84610e80565b845460ff809681938284168852858801818560081c168152610d47600160408b0194868860a81c1686528660608d019860b01c16885201610eda565b9660808a019788526040519a8b9a828c525116908a01525116604088015251166060860152511660808401525160a08084015260c0830190610de6565b346100ef5760203660031901126100ef576020906001600160a01b03610da8610dba565b16600052600282526040600020548152f35b600435906001600160a01b03821682036100ef57565b602435906001600160a01b03821682036100ef57565b919082519283825260005b848110610e12575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610df1565b6044359060ff821682036100ef57565b6064359060ff821682036100ef57565b90600182811c92168015610e76575b6020831014610e6057565b634e487b7160e01b600052602260045260246000fd5b91607f1691610e55565b60a0810190811067ffffffffffffffff8211176103cc57604052565b6020810190811067ffffffffffffffff8211176103cc57604052565b90601f8019910116810190811067ffffffffffffffff8211176103cc57604052565b9060405191826000825492610eee84610e46565b908184526001948581169081600014610f5d5750600114610f1a575b5050610f1892500383610eb8565b565b9093915060005260209081600020936000915b818310610f45575050610f1893508201013880610f0a565b85548884018501529485019487945091830191610f2d565b915050610f1894506020925060ff191682840152151560051b8201013880610f0a565b67ffffffffffffffff81116103cc5760051b60200190565b15610f9f57565b60405162461bcd60e51b815260206004820152600a60248201526927a7262c9027aba722a960b11b6044820152606490fd5b15610fd857565b60405162461bcd60e51b815260206004820152601060248201526f41646472657373206973205a65726f2160801b6044820152606490fd5b81811061101b575050565b60008155600101611010565b8181029291811591840414171561103a57565b634e487b7160e01b600052601160045260246000fd5b60ff166024039060ff821161103a57565b9060ff8091169116039060ff821161103a57565b1561107c57565b60405162461bcd60e51b8152602060048201526011602482015270444543494d414c20554e444552464c4f5760781b6044820152606490fd5b604d811161103a57600a0a90565b60018060a01b038091166000908082526020906001825260409384842085516110eb81610e80565b81549260ff808516835286830194828160081c168652898401828260a81c1681526111256001606097858989019560b01c16855201610eda565b94608081019586528488511661114a575b505050505050505090600291835252205490565b6001848251161461134257600284825116146112a1575183166003146111705780611136565b8a9750916111996111cd949282611190819a9e9a8a9d9a99975116611050565b91511690611061565b16996111a860248c1115611075565b511690518551958693849263195556f360e21b84528260048501526044840190610de6565b621554d160ea1b87848303926003198401602487015260038152015201915afa948515611296578095611218575b50505050509061120f6112159251916110b5565b90611027565b90565b9091929380955083813d831161128f575b6112338183610eb8565b8101031261128c5783519485019085821067ffffffffffffffff831117611278575083528151845280820151908401528101519082015261120f6112153880806111fb565b634e487b7160e01b81526041600452602490fd5b80fd5b503d611229565b8351903d90823e3d90fd5b5088969a99975060049895508293945091611190816112c1945116611050565b16966112d06024891115611075565b511685519485809263029f8a6d60e11b82525afa93841561133757508193611302575b50505061120f611215926110b5565b9091809350813d8311611330575b61131a8183610eb8565b8101031261128c57505161120f611215386112f3565b503d611310565b51913d9150823e3d90fd5b50905061135d92959998979650819450600493505116611050565b848489511688519384809263313ce56760e01b82525afa9182156114125786926113d4575b50916113948594926004979694611061565b16966113a36024891115611075565b51168551948580926350d25bcd60e01b82525afa938415611337575081936113025750505061120f611215926110b5565b9091508481813d831161140b575b6113ec8183610eb8565b81010312611407575182811681036114075790611394611382565b8580fd5b503d6113e2565b87513d88823e3d90fd5b80518210156114305760209160051b010190565b634e487b7160e01b600052603260045260246000fdfe1b292eb0703e5754e27a16b9921a0fad5631d77def2d1c27902b6bf37d194a9ca2646970667358221220047bc7e113e7937bec2a6319035d15a8b98d23e3a59dc7af448246aedfb964aa64736f6c63430008130033";

export class FeedPriceOracle__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FeedPriceOracle> {
    return super.deploy(overrides || {}) as Promise<FeedPriceOracle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FeedPriceOracle {
    return super.attach(address) as FeedPriceOracle;
  }
  connect(signer: Signer): FeedPriceOracle__factory {
    return super.connect(signer) as FeedPriceOracle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeedPriceOracleInterface {
    return new utils.Interface(_abi) as FeedPriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FeedPriceOracle {
    return new Contract(address, _abi, signerOrProvider) as FeedPriceOracle;
  }
}
