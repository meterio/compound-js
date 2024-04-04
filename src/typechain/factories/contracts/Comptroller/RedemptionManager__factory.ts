/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  RedemptionManager,
  RedemptionManagerInterface,
} from "../../../contracts/Comptroller/RedemptionManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_baseRate",
        type: "uint256",
      },
    ],
    name: "BaseRateUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "LastFeeOpTimeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "BETA",
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
    name: "DECIMAL_PRECISION",
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
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_BORROWING_FEE",
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
    name: "MINUTE_DECAY_FACTOR",
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
    name: "REDEMPTION_FEE_FLOOR",
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
    name: "SECONDS_IN_ONE_MINUTE",
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
    name: "baseRate",
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
        internalType: "uint256",
        name: "redeemAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "address",
        name: "cToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "suToken",
        type: "address",
      },
      {
        internalType: "contract IPriceOracle",
        name: "oracle",
        type: "address",
      },
    ],
    name: "calcActualRepayAndSeize",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    inputs: [],
    name: "comptroller",
    outputs: [
      {
        internalType: "contract IComptroller",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decayBaseRateFromBorrowing",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
    ],
    name: "getFirstProvider",
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
        name: "_asset",
        type: "address",
      },
      {
        internalType: "address",
        name: "_id",
        type: "address",
      },
    ],
    name: "getNextProvider",
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
    inputs: [],
    name: "getRedemptionRateWithDecay",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
    ],
    name: "hasNoProvider",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "contract ISortedBorrows",
        name: "_sortedBorrows",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastFeeOperationTime",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IComptroller",
        name: "_comptroller",
        type: "address",
      },
    ],
    name: "setComptroller",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISortedBorrows",
        name: "_sortedBorrows",
        type: "address",
      },
    ],
    name: "setSortedBorrows",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sortedBorrows",
    outputs: [
      {
        internalType: "contract ISortedBorrows",
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
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
        name: "csuToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "borrower",
        type: "address",
      },
    ],
    name: "updateSortedBorrows",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608080604052346100165761212a908161001c8239f35b600080fdfe608060408181526004908136101561001657600080fd5b600092833560e01c90816301ffc9a714610d0b57508063071a754114610cef5780631f68f20a14610cd05780632409266914610cae578063248a9ca314610c8357806328d28b5b14610c615780632b11551a14610c415780632f2ff15d14610b8757806336568abe14610af5578063485cc9551461093157806350e85423146108d05780635dba4c4a146108555780635fe3b5671461082c57806361ec893d146108105780638bad38dd146107405780639010d07c146106ff57806391d14854146106b8578063947f5b77146106795780639d3fe0b014610581578063a20baee61461055e578063a217fddf14610543578063bbf56b3a146104c8578063c33520eb146103f1578063c52861f2146103a1578063c7b554811461037e578063ca15c87314610356578063d380a37c14610337578063d547741f146102fa578063d99550c914610242578063ec8b88ee146102155763fb02cd421461017957600080fd5b34610211576020366003190112610211576020610194610ddd565b60c9548351633b725b2360e01b81526001600160a01b039283169581019590955284916024918391165afa91821561020757602093926101d8575b50519015158152f35b6101f9919250833d8111610200575b6101f18183611192565b810190611553565b90386101cf565b503d6101e7565b81513d85823e3d90fd5b8280fd5b83823461023e578160031936011261023e5760c95490516001600160a01b039091168152602090f35b5080fd5b5090346102115781600319360112610211576102a5916020610262610ddd565b9261026b610dc2565b60c95484516339ed25cd60e01b81526001600160a01b03968716938101938452918616602084015290958692918616918391829160400190565b03915afa9283156102f057602094936102c1575b505191168152f35b6102e2919350843d81116102e9575b6102da8183611192565b8101906116c4565b91386102b9565b503d6102d0565b81513d86823e3d90fd5b5034610211578060031936011261021157610334913561032f600161031d610dc2565b93838752606560205286200154610fe7565b6111e0565b80f35b83823461023e578160031936011261023e5760209060cc549051908152f35b5090346102115760203660031901126102115760209282913581526097845220549051908152f35b83823461023e578160031936011261023e5760209051670ddd4b8c6c7d70d88152f35b83823461023e578160031936011261023e576020906103ea670de0b6b3a76400006103e46103dc603c6103d660cc5442611456565b046115c7565b60cb54610d99565b04611698565b9051908152f35b50346102115760203660031901126102115761040b610ddd565b610413610df3565b60c95482516344b7213760e11b815290936001600160a01b039390916020818481888a165afa9081156104be5787916104a0575b501561046457505016906001600160601b0360a01b161760c95580f35b906020606492519162461bcd60e51b83528201526016602482015275696e76616c696420736f7274656420626f72726f777360501b6044820152fd5b6104b8915060203d8111610200576101f18183611192565b38610447565b82513d89823e3d90fd5b50823461053c5760a036600319011261053c576104e3610dc2565b6001600160a01b03936044359190858316830361053f5760643593868516850361053c57608435968716870361053c57509161052493916080969335611a54565b92939091815194855260208501528301526060820152f35b80fd5b8380fd5b83823461023e578160031936011261023e5751908152602090f35b83823461023e578160031936011261023e5760209051670de0b6b3a76400008152f35b50823461053c578160031936011261053c578235906105ab60018060a01b0360ca5416331461156b565b670de0b6b3a764000090816105ca6103dc603c6103d660cc5442611456565b049282810290808204841490151715610666576105ea9060243590610d79565b60011c83018093116106535750602093508082101561064b5750905b6106118215156115aa565b8160cb557fc454ee9b76c52f782a256af821b857ca6e125d1e3333bcede402fec2bed9600c838251848152a1610645611f0a565b51908152f35b905090610606565b634e487b7160e01b815260118552602490fd5b634e487b7160e01b825260118652602482fd5b83823461023e5736600319011261053c57610334610695610ddd565b61069d610dc2565b906106b360018060a01b0360ca5416331461156b565b6116e3565b5090346102115781600319360112610211578160209360ff926106d9610dc2565b90358252606586528282206001600160a01b039091168252855220549151911615158152f35b50903461021157816003193601126102115760209261072a91358152609784528260243591206113b4565b905491519160018060a01b039160031b1c168152f35b5090346102115760203660031901126102115780356001600160a01b038116929083900361053f57610770610df3565b8051623f1ee960e11b81526020818481875afa9081156108065785916107e8575b50156107af5750506001600160601b0360a01b60ca54161760ca5580f35b906020606492519162461bcd60e51b8352820152601360248201527234b73b30b634b21031b7b6b83a3937b63632b960691b6044820152fd5b610800915060203d8111610200576101f18183611192565b38610791565b82513d87823e3d90fd5b83823461023e578160031936011261023e5760209051603c8152f35b83823461023e578160031936011261023e5760ca5490516001600160a01b039091168152602090f35b83823461023e578160031936011261023e5760207fc454ee9b76c52f782a256af821b857ca6e125d1e3333bcede402fec2bed9600c91610893610df3565b670de0b6b3a7640000906108bf826108b56103dc603c6103d660cc5442611456565b04928311156115aa565b8160cb5551908152a1610334611f0a565b50346102115760203660031901126102115760249060206108ef610ddd565b60c9548351631bdb4c8d60e01b81526001600160a01b039283169681019690965290938591829086165afa9283156102f057602094936102c157505191168152f35b50903461021157816003193601126102115761094b610ddd565b90610954610dc2565b9184549260ff8460081c161592838094610ae8575b8015610ad1575b15610a77575060ff1984811660011787559383610a66575b50858052606560209081528587206001600160a01b039384168089529082528688205491956109ca9260ff1615610a1e575b50878052609786528688206113cc565b50166001600160601b0360a01b60c954161760c9556109e7578280f35b7f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989161ff001984541684555160018152a138808280f35b88805260658752878920828a5287526001888a20918254161790553381897f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8180a4386109ba565b61ffff191661010117865538610988565b608490602087519162461bcd60e51b8352820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152fd5b50303b1580156109705750600160ff861614610970565b50600160ff861610610969565b5091903461023e578260031936011261023e57610b10610dc2565b90336001600160a01b03831603610b2c579061033491356111e0565b608490602085519162461bcd60e51b8352820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152fd5b5034610211578060031936011261021157610bf49135906097610ba8610dc2565b9280865260209060658252610bc260018589200154610fe7565b808752606582528387206001600160a01b039095168088529482528387205460ff1615610bf8575b86525283206113cc565b5080f35b808752606582528387208588528252838720805460ff191660011790553385827f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d8a80a4610bea565b83823461023e578160031936011261023e576020906103ea60cb54611698565b83823461023e578160031936011261023e5760209051662386f26fc100008152f35b5090346102115760203660031901126102115781602093600192358152606585522001549051908152f35b83823461023e578160031936011261023e576020905166b1a2bc2ec500008152f35b83823461023e578160031936011261023e5760209060cb549051908152f35b83823461023e578160031936011261023e576020905160028152f35b84908434610211576020366003190112610211573563ffffffff60e01b81168091036102115760209250635a05180f60e01b8114908115610d4e575b5015158152f35b637965db0b60e01b811491508115610d68575b5083610d47565b6301ffc9a760e01b14905083610d61565b8115610d83570490565b634e487b7160e01b600052601260045260246000fd5b81810292918115918404141715610dac57565b634e487b7160e01b600052601160045260246000fd5b602435906001600160a01b0382168203610dd857565b600080fd5b600435906001600160a01b0382168203610dd857565b3360009081527fffdfc1249c027f9191656349feb0761381bb32c9f557e01f419fd08754bf5a1b602090815260408083205490929060ff1615610e3557505050565b610e3e336112a5565b83519082610e4b83611176565b60428352848301936060368637835115610fd35760308553835190600191821015610fd35790607860218601536041915b818311610f6557505050610f2357610ed1938593610f0993610efa604894610f1f9951988576020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8b9788015282519283916037890191016110f1565b8401917001034b99036b4b9b9b4b733903937b6329607d1b6037840152518093868401906110f1565b01036028810185520183611192565b5162461bcd60e51b8152918291600483016111b4565b0390fd5b60648486519062461bcd60e51b825280600483015260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b909192600f81166010811015610fbf576f181899199a1a9b1b9c1cb0b131b232b360811b901a610f95858861127e565b5360041c928015610fab57600019019190610e7c565b634e487b7160e01b82526011600452602482fd5b634e487b7160e01b83526032600452602483fd5b634e487b7160e01b81526032600452602490fd5b600081815260209060658252604092838220338352835260ff8483205416156110105750505050565b611019336112a5565b84519161102583611176565b60428352848301936060368637835115610fd35760308553835190600191821015610fd35790607860218601536041915b8183116110ab57505050610f2357610ed1938593610f0993610efa604894610f1f9951988576020b1b1b2b9b9a1b7b73a3937b61d1030b1b1b7bab73a1604d1b8b9788015282519283916037890191016110f1565b909192600f81166010811015610fbf576f181899199a1a9b1b9c1cb0b131b232b360811b901a6110db858861127e565b5360041c928015610fab57600019019190611056565b60005b8381106111045750506000910152565b81810151838201526020016110f4565b67ffffffffffffffff811161112857604052565b634e487b7160e01b600052604160045260246000fd5b6020810190811067ffffffffffffffff82111761112857604052565b6040810190811067ffffffffffffffff82111761112857604052565b6080810190811067ffffffffffffffff82111761112857604052565b90601f8019910116810190811067ffffffffffffffff82111761112857604052565b604091602082526111d481518092816020860152602086860191016110f1565b601f01601f1916010190565b90604061121e9260009080825260656020528282209360018060a01b03169384835260205260ff8383205416611221575b8152609760205220611463565b50565b808252606560205282822084835260205282822060ff1981541690553384827ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b8580a4611211565b906706f05b59d3b200008201809211610dac57565b90815181101561128f570160200190565b634e487b7160e01b600052603260045260246000fd5b604051906060820182811067ffffffffffffffff82111761112857604052602a825260208201604036823782511561128f5760309053815160019081101561128f57607860218401536029905b8082116113465750506113025790565b606460405162461bcd60e51b815260206004820152602060248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152fd5b9091600f8116601081101561139f576f181899199a1a9b1b9c1cb0b131b232b360811b901a611375848661127e565b5360041c91801561138a5760001901906112f2565b60246000634e487b7160e01b81526011600452fd5b60246000634e487b7160e01b81526032600452fd5b805482101561128f5760005260206000200190600090565b91906001830160009082825280602052604082205415600014611450578454946801000000000000000086101561143c578361142c611415886001604098999a018555846113b4565b819391549060031b91821b91600019901b19161790565b9055549382526020522055600190565b634e487b7160e01b83526041600452602483fd5b50925050565b91908203918211610dac57565b9060018201906000928184528260205260408420549081151560001461154c576000199180830181811161153857825490848201918211611524578082036114ef575b505050805480156114db578201916114be83836113b4565b909182549160031b1b191690555582526020526040812055600190565b634e487b7160e01b86526031600452602486fd5b61150f6114ff61141593866113b4565b90549060031b1c928392866113b4565b905586528460205260408620553880806114a6565b634e487b7160e01b88526011600452602488fd5b634e487b7160e01b87526011600452602487fd5b5050505090565b90816020910312610dd857518015158103610dd85790565b1561157257565b60405162461bcd60e51b815260206004820152601060248201526f37b7363c9031b7b6b83a3937b63632b960811b6044820152606490fd5b156115b157565b634e487b7160e01b600052600160045260246000fd5b90631f540500808311611690575b50811561168357670de0b6b3a764000091670ddd4b8c6c7d70d8905b60019182821115611664578183166116295761161e61161982670de0b6b3a764000093610d99565b611269565b04911c925b926115f1565b9361164f611619670de0b6b3a764000061164761161982958a610d99565b049680610d99565b0491600019820191821161138a571c92611623565b61167f9250611619915093670de0b6b3a76400009394610d99565b0490565b670de0b6b3a76400009150565b9150386115d5565b662386f26fc10000908101809111610dac57670de0b6b3a7640000808210156116bf575090565b905090565b90816020910312610dd857516001600160a01b0381168103610dd85790565b60408051637f4e225760e11b81526001600160a01b0393919260209285821692909160049185818481885afa9081156119f6576000916119d9575b501561172e575b50505050505050565b8551926395dd919360e01b84528781169788848601528685602481895afa9485156119ce5760009561199f575b5084156119945760c9548851631da4d95d60e31b81526001600160a01b038086168783019081529085166020820152918316918990829081906040010381855afa90811561190a57600091611977575b5015611915575060c95488516239c6e160ea1b81526001600160a01b03808616878301908152908516602082015290949183169391908990869081906040010381875afa94851561190a57908992916000966118e3575b508a516339ed25cd60e01b81526001600160a01b039182168882019081529290911660208301529190829081906040015b0381865afa9788156118d8576000986118b9575b5050813b15610dd85760009681889460a4978b519c8d9a8b9963bc9b5bd560e01b8b528a0152602489015260448801521660648601521660848401525af19081156118af57506118a0575b505b38808080808080611725565b6118a990611114565b38611892565b513d6000823e3d90fd5b6118d0929850803d106102e9576102da8183611192565b953880611847565b89513d6000823e3d90fd5b839291965061190190611833943d85116102e9576102da8183611192565b95909192611802565b8a513d6000823e3d90fd5b949650505050813b15610dd857600060a492819587519889968795633e499e0560e11b8752860152602485015260448401528160648401528160848401525af19081156118af5750611968575b50611894565b61197190611114565b38611962565b61198e9150893d8b11610200576101f18183611192565b386117ab565b505050505050505050565b90948782813d83116119c7575b6119b68183611192565b8101031261053c575051933861175b565b503d6119ac565b88513d6000823e3d90fd5b6119f09150863d8811610200576101f18183611192565b3861171e565b87513d6000823e3d90fd5b15611a0857565b60405162461bcd60e51b815260206004820152600b60248201526a383934b1b29032b93937b960a91b6044820152606490fd5b90816020910312610dd8575160ff81168103610dd85790565b9491929092604051906361bfb47160e11b825260018060a01b03809516958660048401526080836024818986165afa938415611d2d57600080948196611ec6575b50611e90578315611e4757861696604051906305eff7ef60e21b8252600482015260208160248160008c5af1908115611d2d57600091611e5e575b508015611e4757604051631d8e90d160e11b81529860208a600481878c165afa998a15611d2d5760009a611e13575b508915611dfb5760405163fc57d4df60e01b8152600481018a90529860208a602481878d165afa998a15611d2d5760009a611dc6575b506020600491611b468c1515611a01565b60405163313ce56760e01b815292839182905afa938415611d2d578991600095611da5575b50604051611b788161113e565b8b815260ff81961660128110611d6d575b50506020906024604051809c819363fc57d4df60e01b8352818b166004840152165afa988915611d2d57600099611d39575b50611bc7891515611a01565b60405190611bd48261113e565b8982526020829660046040518094819363313ce56760e01b8352165afa8015611d2d5760ff91600091611cfe575b501660128110611cd0575b5050611c3d939460405196611c218861113e565b8752611c4784611c4289670de0b6b3a76400009889958b611f91565b611f50565b612094565b51049080821015611cc85750905b80821015611cc05750935b82611c6f85611c428886611f91565b5104988381029081048403610dac578151611c8991610d79565b898110611c9c575b505050505093929190565b611cb4949950611c429293955080611c3d919a611f91565b51043880808080611c91565b905093611c60565b905090611c55565b90945060120360128111610dac57604d8111610dac57611c3d94611cf791600a0a90611f91565b9338611c0d565b611d20915060203d602011611d26575b611d188183611192565b810190611a3b565b38611c02565b503d611d0e565b6040513d6000823e3d90fd5b90986020823d602011611d65575b81611d5460209383611192565b8101031261053c5750519738611bbb565b3d9150611d47565b91955091506012039060ff8211610dac57604d60ff831611610dac57611d9d60209160ff8c9416600a0a90611f91565b949038611b89565b611dbf91955060203d602011611d2657611d188183611192565b9338611b6b565b90996020823d602011611df3575b81611de160209383611192565b8101031261053c575051986020611b35565b3d9150611dd4565b50505050505092505050600090600090600090600090565b90996020823d602011611e3f575b81611e2e60209383611192565b8101031261053c5750519838611aff565b3d9150611e21565b505050505092505050600090600090600090600090565b906020823d602011611e88575b81611e7860209383611192565b8101031261053c57505138611ad0565b3d9150611e6b565b60405162461bcd60e51b815260206004820152600e60248201526d39b730b839b437ba1032b93937b960911b6044820152606490fd5b95509093506080853d8211611f02575b81611ee360809383611192565b8101031261053c57508351602085015160609095015194939038611a95565b3d9150611ed6565b603c611f1860cc5442611456565b1015611f2057565b4260cc557f860f8d2f0c74dd487e89e2883e3b25b8159ce1e1b3433a291cba7b82c508f3bc6020604051428152a1565b670de0b6b3a764000091611f7e916000604051611f6c8161113e565b52519051611f78611fbc565b91612066565b0460405190611f8c8261113e565b815290565b90611faf916000604051611fa48161113e565b525190611f78611fbc565b60405190611f8c8261113e565b60405190611fc98261115a565b601782527f6d756c7469706c69636174696f6e206f766572666c6f770000000000000000006020830152565b15611ffd5750565b60405162461bcd60e51b8152908190610f1f90600483016111b4565b80159182801561205e575b61205657670de0b6b3a76400008083029383850482141715610dac5761204d6120539385610d79565b14611ff5565b90565b505050600090565b506000612024565b918215801561208c575b612056578161204d6120856120539486610d99565b9485610d79565b508115612070565b906120ba611faf9260006040516120aa8161113e565b52516120b4611fbc565b90612019565b9051906120ef6040516120cc8161115a565b600e81526d646976696465206279207a65726f60901b6020820152831515611ff5565b610d7956fea2646970667358221220a1543e5e3f0745570c7dec5b6caaf44e4de88cf0e01678298976abb61bb1f56d64736f6c63430008130033";

type RedemptionManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RedemptionManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RedemptionManager__factory extends ContractFactory {
  constructor(...args: RedemptionManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      RedemptionManager & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): RedemptionManager__factory {
    return super.connect(runner) as RedemptionManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RedemptionManagerInterface {
    return new Interface(_abi) as RedemptionManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): RedemptionManager {
    return new Contract(address, _abi, runner) as unknown as RedemptionManager;
  }
}
